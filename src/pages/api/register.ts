import { NextApiRequest, NextApiResponse } from "next";
import {
  sendVerificationEmail,
  generateVerificationToken,
} from "../../utils/email";

interface User {
  email: string;
  token: string;
  verified: boolean;
}

const users: { [key: string]: User } = {}; // Simple in-memory store

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }

  const token = generateVerificationToken();
  users[email] = { email, token, verified: false };
  sendVerificationEmail(email, token);

  res
    .status(200)
    .send(
      "Registration successful. Please check your email to verify your account.",
    );
}
