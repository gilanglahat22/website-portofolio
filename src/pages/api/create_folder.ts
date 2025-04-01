import { NextApiRequest, NextApiResponse } from "next";
import { createFolder } from "../../utils/helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { nama_lengkap } = req.body;

    if (!nama_lengkap) {
      return res
        .status(400)
        .json({ message: "Field nama_lengkap is required" });
    }

    const folderId = await createFolder(nama_lengkap);

    res
      .status(200)
      .json({ message: "Folder created successfully", data: folderId });
  } catch (error) {
    console.error("Error during folder creation:", error);
    res.status(500).json({ message: "Error creating folder", error: error });
  }
}
