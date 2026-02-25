import express from "express";
import { createServer as createViteServer } from "vite";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Callback Request (SMS)
  app.post("/api/request-callback", async (req, res) => {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Nom et téléphone requis" });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromPhone = process.env.TWILIO_FROM_PHONE;
    const adminPhone = process.env.ADMIN_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromPhone || !adminPhone) {
      console.warn("Twilio credentials or Admin phone number missing. SMS not sent.");
      // In a real app, you might want to log this or send an email instead.
      // For now, we'll return success to the client but log the issue.
      return res.json({ 
        success: true, 
        message: "Demande reçue (Mode simulation : SMS non envoyé car config manquante)" 
      });
    }

    try {
      const client = twilio(accountSid, authToken);
      await client.messages.create({
        body: `NOUVELLE DEMANDE SPANC\nNom: ${name}\nTel: ${phone}\nAction: Rappel immédiat requis.`,
        from: fromPhone,
        to: adminPhone,
      });

      res.json({ success: true, message: "SMS envoyé à l'expert" });
    } catch (error) {
      console.error("Twilio Error:", error);
      res.status(500).json({ error: "Erreur lors de l'envoi du SMS" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving would go here
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
