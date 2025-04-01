// Interface to represent the file object
export interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

export interface UploadContextType {
  handleFileUpload: (file: File, field: string) => Promise<string | null>;
  uploadProgress: Record<string, number>;
  uploadErrors: Record<string, string | null>;
  uploadedFileUrls: Record<string, string>;
  handleRemoveFile: (field: string) => void;
}

export interface UploadProviderProps {
  children: React.ReactNode;
}

export interface UploadFileToDriveParams {
  fileName: string;
  mimeType: string;
  credentials: any;
  fileContent: any;
  folderName: string; // New parameter for the folder name
}
