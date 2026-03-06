import express from "express";
import Lead from "../models/Lead.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save lead to MongoDB
    const newLead = new Lead({
      name,
      email,
      phone,
      message
    });

    await newLead.save();

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🚀 New Lead from Kamal Web Studio",
      html: `
        <h2>New Website Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(201).json({
      success: true,
      message: "Lead saved successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

export default router;