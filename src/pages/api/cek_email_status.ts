import { NextApiRequest, NextApiResponse } from "next";
import { getSheetEmailStatusByEmail } from "../../utils/helper";

const allowedOrigin = "https://www.figma.com"; // Replace this with your actual frontend domain

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Allow CORS only from the specific frontend domain
  const origin = req.headers.origin;

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );

  // Handle preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({
      code: 405,
      message: `Method ${req.method} Not Allowed`,
      result: null,
    });
  }

  try {
    const { email } = req.query;

    if (!email) {
      return res
        .status(400)
        .json({ code: 400, message: "Field email is required", result: null });
    }

    const data = await getSheetEmailStatusByEmail(email as string);

    if (!data) {
      return res
        .status(404)
        .json({ code: 404, message: "Email not found", result: null });
    }

    return res.status(200).json({
      code: 200,
      message: "Successfully retrieved email data",
      result: data,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error fetching email data",
      error: error instanceof Error ? error.message : error,
    });
  }
}
