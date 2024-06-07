// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Mengirim email menggunakan nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New contact form submission from ${name}`,
    text: message,
  };

  // Mengirim pesan WhatsApp menggunakan Twilio
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  
  try {
    // Kirim email
    await transporter.sendMail(mailOptions);
    
    // Kirim pesan WhatsApp
    await client.messages.create({
      body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:${process.env.MY_WHATSAPP_NUMBER}`,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;
