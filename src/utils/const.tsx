export const ENDPOINT_FETCH_COUNTRY = "https://restcountries.com/v3.1/all";
export const SCOPE = ["https://www.googleapis.com/auth/drive.file"];
export const SCOPE_SHEET = ["https://www.googleapis.com/auth/spreadsheets"];
export const REDIRECT_URI = "https://developers.google.com/oauthplayground";
export const SCOPE_GMAIL = ["https://www.googleapis.com/auth/gmail.send"];

export const PAR_FOLDER_ID = "1UGs0S93OBvC0cC2J-rGrh708-I30cdkw";

export const credentials = {
  type: "service_account",
  project_id: "your-project-id",
  private_key_id: "your-private-key-id",
  private_key: "your-private-key",
  client_email: "your-client-email",
  client_id: "your-client-id",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://accounts.google.com/o/oauth2/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "your-cert-url",
};

export const SPREADSHEET_ID = "1c0VHemGdH7Xm5zsPGCA8EYBPm0-hZWN82t1MEBV7EoU";

export const GDRIVE_BASE_URL = "https://drive.google.com/file/d/";

export enum StatusData {
  BELUM_VERIFIKASI_DATA = 0,
  SUDAH_VERIFIKASI_DATA = 1,
}

export enum StatusEmail {
  BELUM_VERIFIKASI_EMAIL = 0,
  SUDAH_VERIFIKASI_EMAIL = 1,
}

export enum StatusWording {
  BELUM_VERIFIKASI_DATA = "Belum Verifikasi Data",
  SUDAH_VERIFIKASI_DATA = "Sudah Verifikasi Data",
}

export interface Status {
  status_num: string;
  status_wording: string;
}
