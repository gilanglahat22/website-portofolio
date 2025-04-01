"use client";

import React, { useEffect, useRef, ChangeEvent } from "react";

interface UploadFileInputFieldProps {
  setDataToSend: (data: any) => void;
  dataToSend: any;
  parent_field: string;
  field_input: string;
  form_name: string;
  form_id: string;
  format_filename: string;
  setError: (error: string) => void;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  required?: boolean;
  isPDF?: boolean;
}

const UploadFileInputField: React.FC<UploadFileInputFieldProps> = ({
  setDataToSend,
  dataToSend,
  parent_field,
  field_input,
  form_name,
  form_id,
  format_filename,
  setError,
  selectedFile,
  setSelectedFile,
  required = false,
  isPDF = true,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const fileName = file?.name || "";

    if (file) {
      const allowedTypes = isPDF
        ? ["application/pdf"]
        : ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        setError(
          isPDF ? "File harus berformat PDF" : "File harus berformat JPG/PNG",
        );
        return;
      }
    }

    setSelectedFile(file || null);
    setDataToSend({
      ...dataToSend,
      [parent_field]: {
        ...dataToSend[parent_field],
        [field_input]: fileName,
      },
    });
  };

  // Use effect to reassign fileInputRef to the selected file on mount
  useEffect(() => {
    if (selectedFile && fileInputRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(selectedFile);
      fileInputRef.current.files = dataTransfer.files;
    }
  }, [selectedFile]);

  return (
    <div className="sm:col-span-2">
      <label
        className="block text-sm font-semibold leading-6 text-white"
        style={{ color: "white" }}
        htmlFor={form_id}
      >
        {form_name}
        {required ? (
          <span className="text-white-500">*</span>
        ) : (
          <span className="text-white-500">(opsional)</span>
        )}{" "}
        {format_filename}
      </label>
      <div className="mt-2.5 flex items-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={isPDF ? ".pdf" : ".png, .jpg, .jpng"}
          className="hidden"
          required={required}
        />

        <div className="flex-1 flex items-center justify-between space-x-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 bg-white text-black py-2 px-3 rounded flex items-center justify-between"
            style={{ backgroundColor: "white", width: "100px" }} // Fixed width for the container
          >
            {selectedFile ? (
              <>
                <p className="truncate w-64" title={selectedFile.name}>
                  {selectedFile.name}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the file input click
                    setSelectedFile(null);
                    setDataToSend({
                      ...dataToSend,
                      [parent_field]: {
                        ...dataToSend[parent_field],
                        [field_input]: "",
                      },
                    });
                  }}
                  className="ml-4 text-red-500 hover:text-red-700 underline"
                >
                  Hapus
                </button>
              </>
            ) : (
              <p className="text-black">{isPDF ? "PDF" : "JPG/PNG/JPNG"}</p>
            )}
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded border border-white"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadFileInputField;
