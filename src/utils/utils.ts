import { FormDataEmailStatus, FormDataEntry } from "../models/FormData";
import { GDRIVE_BASE_URL } from "./const";

// Ensure handleFileUpload correctly processes and returns the response
export const handleFileUpload = async (
  file: File | null,
  setShowError: (error: boolean) => void,
  folderId: any,
  filename: string,
) => {
  if (!file) {
    setShowError(true);
    return null;
  }

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", filename);
    formData.append("mimeType", file.type);
    formData.append("folderId", folderId);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error uploading or processing file:", error);
    setShowError(true);
    return null;
  }
};

export const handleCreateFolder = async (nama_lengkap: string) => {
  // Check if nama_lengkap is valid
  if (!nama_lengkap || nama_lengkap.trim() === "") {
    console.error("Invalid nama_lengkap value");
    return null;
  }

  try {
    // Prepare the JSON payload
    const payload = { nama_lengkap: nama_lengkap };

    // Make the API request to create the folder
    const response = await fetch("/api/create_folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Parse the JSON response
    const createFolderResponse = await response.json();
    return createFolderResponse.data;
  } catch (error) {
    console.error("Error creating new folder:", error);
    return null;
  }
};

export const handleUpdateSheet = async (req: FormDataEntry) => {
  try {
    const response = await fetch("/api/update_sheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting data:", error);
    return null;
  }
};

export const postUserEmailStatus = async (req: FormDataEmailStatus) => {
  try {
    const response = await fetch("/api/post_email_status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting data:", error);
    return null;
  }
};

export const handleCekDataSheet = async (email: string) => {
  try {
    const response = await fetch(
      `/api/cek_data?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from sheet:", error);
    return null;
  }
};

export const handleCekEmailStatus = async (email: string) => {
  try {
    const response = await fetch(
      `/api/cek_email_status?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from sheet:", error);
    return null;
  }
};

export const handleSendVerifyEmail = async (email: string) => {
  try {
    const response = await fetch("/api/send-verification-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    // if (!response.ok) {
    //   alert("Failed to send verification email. Please try again.");
    // }

    const data = await response.json();
    return data;
  } catch (error) {
    alert("An error occurred. Please try again.");
  }
};
