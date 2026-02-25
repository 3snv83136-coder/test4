import twilio from 'twilio';

export default async function handler(
  req: { method?: string; body?: { name?: string; phone?: string } },
  res: { status: (n: number) => { json: (o: object) => void }; json: (o: object) => void }
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ error: "Nom et téléphone requis" });
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhone = process.env.TWILIO_FROM_PHONE;
  const adminPhone = process.env.ADMIN_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromPhone || !adminPhone) {
    return res.json({
      success: true,
      message: "Demande reçue (Mode simulation : SMS non envoyé car config manquante)",
    });
  }

  try {
    const client = twilio(accountSid, authToken);
    await client.messages.create({
      body: `NOUVELLE DEMANDE SPANC\nNom: ${name}\nTel: ${phone}\nAction: Rappel immédiat requis.`,
      from: fromPhone,
      to: adminPhone,
    });
    return res.json({ success: true, message: "SMS envoyé à l'expert" });
  } catch (error) {
    console.error("Twilio Error:", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi du SMS" });
  }
}
