import { NextApiRequest, NextApiResponse } from "next";
import { getSheetDataByEmail } from "../../utils/helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { email } = req.query;

    if (!email) {
      return res
        .status(400)
        .json({ code: 400, message: "Field email is required", result: null });
    }

    const data = await getSheetDataByEmail(email as string);
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
    console.error("Error during fetch email data:", error);
    return res
      .status(500)
      .json({ code: 500, message: "Error fetching email data", error });
  }
}
