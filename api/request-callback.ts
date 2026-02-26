import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

  const adminEmail = process.env.ADMIN_EMAIL || process.env.CONTACT_EMAIL || 'contact@centrenational-assainissement.fr';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!resend) {
    return res.json({
      success: true,
      message: "Demande enregistrée (config email manquante : définir RESEND_API_KEY)",
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `[Site] Demande de rappel - ${name}`,
      text: `Nouvelle demande de rappel depuis le site.\n\nNom : ${name}\nTéléphone : ${phone}\n\nMerci de rappeler ce contact.`,
      html: `<p>Nouvelle demande de rappel depuis le site.</p><p><strong>Nom :</strong> ${name}<br><strong>Téléphone :</strong> ${phone}</p><p>Merci de rappeler ce contact.</p>`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }

    return res.json({ success: true, message: "Demande envoyée par email" });
  } catch (err) {
    console.error("Request callback error:", err);
    return res.status(500).json({ error: "Erreur lors de l'envoi" });
  }
}
