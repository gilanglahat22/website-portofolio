import {
  authorize,
  getSheetStatusEmailDataByEmail,
  updateStatus,
} from "@/utils/helper";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import credentials from "../../../credentials.json";
import { SCOPE_SHEET, StatusData, StatusEmail } from "@/utils/const";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.query;
  if (!email) {
    return res.status(400).send("Missing email query parameter.");
  }

  try {
    const auth = await authorize(credentials, SCOPE_SHEET);
    const sheets = google.sheets({ version: "v4", auth });

    // Get the user data by email
    const response = await getSheetStatusEmailDataByEmail(email as string);
    if (response != null) {
      const { data, rowIndex } = response;
      const statusEmail: number = Number(data.status);
      if (statusEmail === StatusEmail.BELUM_VERIFIKASI_EMAIL) {
        // Update the status to "Sudah Verifikasi Email"
        data.status = StatusEmail.SUDAH_VERIFIKASI_EMAIL;

        await updateStatus(sheets, rowIndex, data);
        res
          .status(200)
          .redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/verification-success`);
      } else if (statusEmail === StatusEmail.SUDAH_VERIFIKASI_EMAIL) {
        // If already verified, redirect to a page showing it's already verified
        res
          .status(200)
          .redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/already-verified`);
      } else {
        res.status(400).send("Invalid status for email verification.");
      }
    } else {
      return res.status(400).send("Invalid email or user not found.");
    }
  } catch (error) {
    console.error("Error during email verification:", error);
    res.status(500).send("An error occurred while verifying the email.");
  }
}
