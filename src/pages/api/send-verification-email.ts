import { sendVerificationEmail } from "@/utils/email";
import { sendVerifyEmail } from "@/utils/helper";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ code: 400, message: "Email is required" });
    }

    try {
      await sendVerifyEmail(email);
      return res
        .status(200)
        .json({ code: 200, message: "Verification email sent" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ code: 500, message: "Failed to send verification email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
