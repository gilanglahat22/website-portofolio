import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = (email: string, token: string) => {
  const verificationUrl = `http://localhost:3000/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification",
    html: `<p>Please verify your email by clicking the link below:</p>
           <a href="${verificationUrl}">${verificationUrl}</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending verification email:", error);
    }
  });
};

export const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString("hex");
};
