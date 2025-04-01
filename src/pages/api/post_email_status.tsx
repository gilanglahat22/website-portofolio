import { NextApiRequest, NextApiResponse } from "next";
import { appendEmailStatusRow } from "../../utils/helper"; // Ensure this path is correct
import { FormDataEmailStatus } from "@/models/FormData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const data: FormDataEmailStatus = req.body;
    await appendEmailStatusRow(data.email, data.status);
    return res
      .status(200)
      .json({ code: 200, message: "Data appended successfully" });
  } catch (error) {
    console.error("Error appending data:", error);
    return res
      .status(500)
      .json({ code: 500, message: "Error appending data", error: error });
  }
}
