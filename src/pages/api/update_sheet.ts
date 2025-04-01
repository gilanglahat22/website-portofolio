import { NextApiRequest, NextApiResponse } from "next";
import {
  appendDataAkademikNonAkademikRow,
  appendDokumenPendukungLainnyaRow,
  appendPendaftaranDataDiriPesertaRow,
  appendPertanyaanIsianPesertaRow,
  appendPhotoProfileAndDataUkuranPakaianRow,
  appendSocialMediaDataRow,
} from "../../utils/helper"; // Ensure this path is correct
import { FormDataEntry } from "@/models/FormData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const data: FormDataEntry = req.body;
    await appendPendaftaranDataDiriPesertaRow(
      data.email,
      data.status,
      data.jalur_pendaftaran_data,
    );
    await appendSocialMediaDataRow(data.email, data.social_media_data);
    await appendDataAkademikNonAkademikRow(
      data.email,
      data.akademik_non_akademik_data,
    );
    await appendDokumenPendukungLainnyaRow(
      data.email,
      data.dokumen_pendukung_lainnya_data,
    );
    await appendPhotoProfileAndDataUkuranPakaianRow(
      data.email,
      data.photo_profile_and_data_ukuran_pakaian_data,
    );
    await appendPertanyaanIsianPesertaRow(
      data.email,
      data.pernyataan_isian_form,
    );
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
