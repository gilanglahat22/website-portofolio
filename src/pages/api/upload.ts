import { NextApiRequest, NextApiResponse } from "next";
import { uploadFileToDrive } from "../../utils/helper";
import fs from "fs";
import path from "path";
import Busboy from "busboy";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const busboy = Busboy({ headers: req.headers }); // Ensure Busboy is correctly instantiated
  let fileName = "";
  let mimeType = "";
  let folderId = "";
  const filePath = path.join(
    "/tmp",
    `${Date.now()}-${Math.random().toString(36).substring(2)}`,
  ); // Ensure the file path is a string

  busboy.on("field", (fieldname: any, val: any) => {
    if (fieldname === "fileName") {
      fileName = val;
    } else if (fieldname === "mimeType") {
      mimeType = val;
    } else if (fieldname === "folderId") {
      folderId = val;
    }
  });

  busboy.on(
    "file",
    (
      fieldname: any,
      file: any,
      filename: any,
      encoding: any,
      mimetype: any,
    ) => {
      const writeStream = fs.createWriteStream(filePath);
      file.pipe(writeStream);
    },
  );

  busboy.on("finish", async () => {
    try {
      const fileStream = fs.createReadStream(filePath);

      const fileData = await uploadFileToDrive(
        fileName,
        mimeType,
        fileStream,
        folderId,
      );

      fs.unlinkSync(filePath); // Clean up the temp file

      return res
        .status(200)
        .json({ message: "File uploaded successfully", data: fileData });
    } catch (error) {
      console.error("Error during file upload:", error);
      return res
        .status(500)
        .json({ message: "Error uploading file", error: error });
    }
  });

  req.pipe(busboy);
}
