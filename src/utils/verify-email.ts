import { NextApiRequest, NextApiResponse } from "next";

interface User {
  email: string;
  token: string;
  verified: boolean;
}

const users: { [key: string]: User } = {}; // Simple in-memory store

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;
  const user = Object.values(users).find((user) => user.token === token);
  if (user) {
    user.verified = true;
    res.status(200).send("Email verified successfully.");
  } else {
    res.status(400).send("Invalid verification token.");
  }
}
