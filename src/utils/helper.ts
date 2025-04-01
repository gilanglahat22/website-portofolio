import { UploadFileToDriveParams } from "../models/Upload";
import { google, drive_v3, sheets_v4 } from "googleapis";
import { JWT } from "google-auth-library";
import { SCOPE, SPREADSHEET_ID, SCOPE_SHEET, SCOPE_GMAIL } from "./const";
import credentials from "../../credentials.json";
import {
  AkademikDanNonAkademikForm,
  DokumenPendukungLainnyaForm,
  FormDataEntry,
  JalurPendaftaranDataDiriPeserta,
  PertanyaanIsianForm,
  PhotoProfileAndDataUkuranPakaian,
  SocialMediaForm,
} from "@/models/FormData";
import { PAR_FOLDER_ID } from "./const";
import nodemailer from "nodemailer";

// A function that can provide access to Google Drive API
export async function authorize(
  credentials: UploadFileToDriveParams["credentials"],
  scope: any,
): Promise<JWT> {
  const jwtClient = new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    scope,
  );

  await jwtClient.authorize();

  return jwtClient;
}

export async function createFolder(folderName: string): Promise<string> {
  const authClient = await authorize(credentials, SCOPE);
  const drive = google.drive({ version: "v3", auth: authClient });

  const parentFolderId = PAR_FOLDER_ID; // Replace with your root folder ID

  // Create the folder if it does not exist
  const folderMetaData = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
    parents: [parentFolderId],
  };

  const folder = await drive.files.create({
    requestBody: folderMetaData,
    fields: "id",
  });

  return folder.data.id!;
}

export async function uploadFileToDrive(
  fileName: any,
  mimeType: any,
  fileContent: any,
  folderId: any,
): Promise<drive_v3.Schema$File> {
  const authClient = await authorize(credentials, SCOPE);
  const drive = google.drive({ version: "v3", auth: authClient });

  try {
    // Get or create the folder

    const fileMetaData = {
      name: fileName,
      parents: [folderId],
    };

    const media = {
      mimeType,
      body: fileContent,
    };

    const response = await drive.files.create({
      requestBody: fileMetaData,
      media,
      fields: "id, webViewLink",
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to upload file to Google Drive: ${error}`);
  }
}

async function getNextId(
  sheets: sheets_v4.Sheets,
  sheet_section: string,
): Promise<number> {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: sheet_section + "!A:A", // Assuming the ID column is the first column
  });

  const rows = response.data.values || [];
  const ids = rows
    .slice(1)
    .map((row) => parseInt(row[0], 10))
    .filter((id) => !isNaN(id));
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;

  return maxId + 1;
}

export async function appendPendaftaranDataDiriPesertaRow(
  email: string,
  status: number | string,
  data: JalurPendaftaranDataDiriPeserta,
) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  const nextId = await getNextId(sheets, "Jalur_Pendaftaran_Data_Diri_Peserta");
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);

  const values = [
    [
      nextId,
      email,
      status,
      data.jalur_pendaftaran,
      data.nama_lengkap,
      data.nama_panggilan,
      data.tempat_lahir,
      data.tanggal_lahir,
      data.usia,
      data.jenis_kelamin,
      data.nik,
      data.alamat_domisili,
      data.agama,
      data.mewakili_provinsi,
      data.tinggi_badan,
      data.berat_badan,
      formattedTimestamp,
      formattedTimestamp,
    ],
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Jalur_Pendaftaran_Data_Diri_Peserta!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error appending data:", error);
  }
}

export async function appendSocialMediaDataRow(
  email: string,
  data: SocialMediaForm,
) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  const nextId = await getNextId(sheets, "Social_Media_Peserta");
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);

  const values = [
    [
      nextId,
      email,
      data.nomor_telepon,
      data.akun_instagram,
      data.akun_tiktok,
      data.akun_twitter,
      data.akun_facebook,
      formattedTimestamp,
      formattedTimestamp,
    ],
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Social_Media_Peserta!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error appending data:", error);
  }
}

export async function appendDataAkademikNonAkademikRow(
  email: string,
  data: AkademikDanNonAkademikForm,
) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  const nextId = await getNextId(sheets, "Data_Akademik_Non_Akademik_Peserta");
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);

  const values = [
    [
      nextId,
      email,
      data.pendidikan_terakhir,
      data.status_pendidikan,
      data.institusi,
      data.fakultas,
      data.program_studi,
      data.minat_bakat,
      data.language_proficiency,
      data.bahasa_daerah,
      data.url_prestasi_akademik,
      data.url_prestasi_non_akademik,
      data.pengalaman_organisasi,
      formattedTimestamp,
      formattedTimestamp,
    ],
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Data_Akademik_Non_Akademik_Peserta!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error appending data:", error);
  }
}

export async function appendDokumenPendukungLainnyaRow(
  email: string,
  data: DokumenPendukungLainnyaForm,
) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  const nextId = await getNextId(sheets, "Dokumen_Pendukung_Lainnya_Peserta");
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);

  const values = [
    [
      nextId,
      email,
      data.url_ktp,
      data.url_bpjs,
      data.url_ijazah,
      data.url_surat_keterangan_kesehatan_RSUD,
      data.url_surat_keterangan_setia_kepada_pancasila,
      data.url_formulir_pendaftaran,
      data.url_formulir_ijin_orangtua,
      data.url_formulir_pernyataan_komitmen,
      data.riwayat_penyakit,
      formattedTimestamp,
      formattedTimestamp,
    ],
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Dokumen_Pendukung_Lainnya_Peserta!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error appending data:", error);
  }
}

export async function appendPhotoProfileAndDataUkuranPakaianRow(
  email: string,
  data: PhotoProfileAndDataUkuranPakaian,
) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  const nextId = await getNextId(
    sheets,
    "Photo_Profile_dan_Data_Ukuran_Pakaian_Peserta",
  );
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);

  const values = [
    [
      nextId,
      email,
      data.url_foto_close_up,
      data.url_foto_full_body,
      data.ukuran_kaos_berkerah,
      data.ukuran_celana,
      formattedTimestamp,
      formattedTimestamp,
    ],
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Photo_Profile_dan_Data_Ukuran_Pakaian_Peserta!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error appending data:", error);
  }
}

export async function appendPertanyaanIsianPesertaRow(
  email: string,
  data: PertanyaanIsianForm,
) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  const nextId = await getNextId(sheets, "Pertanyaan_Isian_Peserta");
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);

  const values = [
    [
      nextId,
      email,
      data.pahami_tentang_maritim,
      data.isu_maritim_paling_menarik,
      data.yang_diketahui_tentang_putera_puteri_maritim,
      data.alasan_terpilih_menjadi_finalis_putera_puteri_maritim,
      formattedTimestamp,
      formattedTimestamp,
    ],
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Pertanyaan_Isian_Peserta!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error appending data:", error);
  }
}

export async function appendEmailStatusRow(email: string, status: number) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  const nextId = await getNextId(sheets, "Data_Status_Email");
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);

  const values = [
    [nextId, email, status, formattedTimestamp, formattedTimestamp],
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Data_Status_Email!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error appending email status data:", error);
  }
}

export async function getSheetDataByEmail(email: string) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Jalur_Pendaftaran_Data_Diri_Peserta!A1:Z", // Adjust the range as needed
    });

    const rows = response.data.values;

    if (rows && rows.length) {
      const header = rows[0]; // The header row (column names)

      const dataRowIndex = rows.findIndex((row) => row[1] === email); // Find the index of the row with the email

      if (dataRowIndex === -1) {
        return null; // No row found for the given email
      }

      const dataRow = rows[dataRowIndex];

      const dataObject = header.reduce(
        (acc, key, index) => {
          acc[key] = dataRow[index] || ""; // Map row data to column names
          return acc;
        },
        {} as Record<string, string>,
      );

      return { data: dataObject, rowIndex: dataRowIndex + 1 }; // Return the data and the row index (+1 for 1-based indexing)
    }

    return null;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    throw new Error("Error fetching data from Google Sheets");
  }
}

export async function getSheetStatusEmailDataByEmail(email: string) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Data_Status_Email!A1:Z", // Adjust the range as needed
    });

    const rows = response.data.values;
    if (rows && rows.length) {
      const header = rows[0]; // The header row (column names)

      const dataRowIndex = rows.findIndex((row) => row[1] === email); // Find the index of the row with the email
      if (dataRowIndex === -1) {
        return null; // No row found for the given email
      }

      const dataRow = rows[dataRowIndex];

      const dataObject = header.reduce(
        (acc, key, index) => {
          acc[key] = dataRow[index] || ""; // Map row data to column names
          return acc;
        },
        {} as Record<string, string>,
      );

      return { data: dataObject, rowIndex: dataRowIndex + 1 }; // Return the data and the row index (+1 for 1-based indexing)
    }

    return null;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    throw new Error("Error fetching data from Google Sheets");
  }
}

export async function getSheetEmailStatusByEmail(email: string) {
  const auth = await authorize(credentials, SCOPE_SHEET);
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Data_Status_Email!A1:Z", // Adjust the range as needed
    });

    const rows = response.data.values;

    if (rows && rows.length) {
      const header = rows[0]; // The header row (column names)

      const dataRowIndex = rows.findIndex((row) => row[1] === email); // Find the index of the row with the email

      if (dataRowIndex === -1) {
        return null; // No row found for the given email
      }

      const dataRow = rows[dataRowIndex];

      const dataObject = header.reduce(
        (acc, key, index) => {
          acc[key] = dataRow[index] || ""; // Map row data to column names
          return acc;
        },
        {} as Record<string, string>,
      );

      return { data: dataObject, rowIndex: dataRowIndex + 1 }; // Return the data and the row index (+1 for 1-based indexing)
    }

    return null;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    throw new Error("Error fetching data from Google Sheets");
  }
}

// Helper function to update a row
export async function updateRow(
  sheets: any,
  rowIndex: number,
  updatedValues: Record<string, any>,
) {
  // Convert the updated values into a 2D array
  const values = [
    Object.values(updatedValues), // Flatten the object to an array
  ];

  const resource = {
    values, // Set the 2D array for the request body
  };

  try {
    const result = await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `Data_Pendaftar!A${rowIndex}:Z${rowIndex}`, // Specify the range to update
      valueInputOption: "RAW",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error updating row:", error);
    throw new Error("Failed to update the data.");
  }
}

export async function updateStatus(
  sheets: any,
  rowIndex: number,
  updatedValues: Record<string, any>,
) {
  // Add the current timestamp
  const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19);
  updatedValues.updated_at = timestamp; // Add timestamp to the updated values

  // Convert the updated values into a 2D array
  const values = [
    Object.values(updatedValues), // Flatten the object to an array
  ];

  const resource = {
    values, // Set the 2D array for the request body
  };

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `Data_Status_Email!A${rowIndex}:Z${rowIndex}`, // Specify the range to update
      valueInputOption: "RAW",
      requestBody: resource,
    });
  } catch (error) {
    console.error("Error updating row:", error);
    throw new Error("Failed to update the data.");
  }
}

// export async function updateStatus(
//   sheets: any,
//   rowIndex: number,
//   updatedValues: Record<string, any>,
// ) {
//   // Convert the updated values into a 2D array
//   const values = [
//     Object.values(updatedValues), // Flatten the object to an array
//   ];

//   const resource = {
//     values, // Set the 2D array for the request body
//   };

//   try {
//     await sheets.spreadsheets.values.update({
//       spreadsheetId: SPREADSHEET_ID,
//       range: `Data_Status_Email!A${rowIndex}:Z${rowIndex}`, // Specify the range to update
//       valueInputOption: "RAW",
//       requestBody: resource,
//     });
//   } catch (error) {
//     console.error("Error updating row:", error);
//     throw new Error("Failed to update the data.");
//   }
// }

export async function sendVerifyEmail(recipientEmail: string) {
  try {
    // Create a transport using Nodemailer with SMTP configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465, // Use 465 for secure SMTP
      secure: true, // true for 465, false for other ports
      auth: {
        user: "labfeline@gmail.com",
        pass: "kljj zehf xtjr gpxv", // Your Gmail App Password
      },
    });

    // Set up email data
    const mailOptions = {
      from: {
        name: "Putera Putri Maritim 2025 Verify Email",
        address: "no-reply@putraputrimaritim.com",
      },
      to: recipientEmail, // Recipient's email address
      subject: "Verify Email",
      text: "Verifikasi Email Kamu dengan Cara menekan tombol Verifikasi Email.",
      html: `
          <div style="
            font-family: Poppins, Arial, sans-serif;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            background-color: #f9f9f9;
          ">
            <h2 style="
              color: #042043;
              text-align: center;
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 20px;
            ">
              Putera Puteri Maritim 2025 - Verifikasi Email
            </h2>

            <p style="font-size: 14px; color: #333; line-height: 1.6; margin-bottom: 16px;">
              Halo! Terima kasih telah mendaftar pada Ajang Pemilihan Putera Puteri Maritim Nasional 2025. 🎉
            </p>

            <p style="font-size: 14px; color: #333; line-height: 1.6; margin-bottom: 16px;">
              Untuk melanjutkan proses pendaftaran, kami perlu memverifikasi alamat email kamu. Harap tekan tombol di bawah ini untuk menyelesaikan verifikasi email.
            </p>

            <p style="font-size: 14px; color: #333; line-height: 1.6; margin-bottom: 16px;">
              Setelah verifikasi berhasil, silakan lanjutkan proses pendaftaran dengan mengikuti langkah-langkah berikut:
            </p>

            <ol style="
              font-size: 14px;
              color: #333;
              line-height: 1.6;
              margin: 16px 0;
              padding-left: 20px;
            ">
              <li style="margin-bottom: 10px;">
                Klik tombol "Lanjutkan" pada laman web sebelumnya dengan input email kamu yang sudah terverifikasi yaa.
              </li>
              <li style="margin-bottom: 10px;">
                Unggah berkas-berkas yang telah kamu siapkan.
              </li>
              <li>
                Pastikan semua berkas terunggah dengan benar hingga proses selesai.
              </li>
            </ol>

            <p style="font-size: 14px; color: #333; line-height: 1.6; margin-bottom: 20px;">
              Jangan lupa untuk memantau email kamu untuk informasi selanjutnya dari kami!
            </p>

            <div style="text-align: center; margin: 20px 0;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?email=${encodeURIComponent(
                recipientEmail
              )}"
                style="
                  display: inline-block;
                  background-color: #042043;
                  color: #fff;
                  padding: 12px 20px;
                  text-decoration: none;
                  font-size: 14px;
                  font-weight: 700;
                  border-radius: 5px;
                  letter-spacing: 1px;
                  text-align: center;
                ">
                Verifikasi Email
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />

            <p style="font-size: 12px; color: #999; text-align: center;">
              Email ini dikirim oleh Putera Puteri Maritim 2025. Jika kamu tidak melakukan pendaftaran, silakan abaikan email ini.
            </p>
          </div>
      `,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Failed to send verification email");
  }
}
