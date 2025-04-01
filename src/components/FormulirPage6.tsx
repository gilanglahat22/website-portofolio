"use client";

import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import UploadFileInputField from "./UploadFileInputField";

export const PhotoProfileAndDataUkuranPakaian: React.FC<
  PhotoProfileAndDataUkuranPakaianProps
> = ({
  setDataToSend,
  dataToSend,
  setCurrentPage,
  currentPage,
  selectedPhotoCloseUp,
  setSelectedPhotoCloseUp,
  selectedPhotoFullBody,
  setSelectedPhotoFullBody,
}) => {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleNext = async (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const ukuranKaosBerkerahOptions = [
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const ukuranCelanaOptions = [
    { value: "M (30-33)", label: "M (30-33)" },
    { value: "L (34-36)", label: "L (34-36)" },
    { value: "XL (37-39)", label: "XL (37-39)" },
    { value: "XXL (40-42)", label: "XXL (40-42)" },
  ];

  return (
    <div className="mx-auto max-w-3xl text-center pt-4 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
      <h2
        className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl font-cinzel-decorative-bold"
        style={{ color: "#162E50", fontWeight: 700, fontSize: "170%" }}
      >
        FORMULIR
      </h2>
      {/* <UploadProvider> */}
      <form
        // method="POST"
        onSubmit={handleNext}
        className="mx-auto mt-12 sm:mt-11 pt-6 pl-8 pr-8 pb-8 rounded-lg text-left"
        style={{
          background: "linear-gradient(180deg, #090425 52.5%, #0E0838 100%)",
        }}
      >
        <label
          className="block text-sm font-semibold leading-6 text-white-900 text-[20px]"
          style={{ color: "white" }}
        >
          Photo Profile & Data Ukuran Pakaian
        </label>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 mt-7">
          <div className="sm:col-span-2 pr-10 pl-10">
            <div style={{ backgroundColor: "white", padding: 5 }}>
              <img
                src={"./photo_pakaian.png"}
                alt="Form Image"
                className="w-full md:w-auto h-auto mx-auto object-cover rounded-lg z-10 relative"
              />
            </div>
          </div>
          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field={"photo_profile_and_data_ukuran_pakaian_data"}
            field_input={"url_foto_close_up"}
            form_name={"Foto Close Up Ukuran 4R Menggunakan Pakaian Formal"}
            form_id={"url-foto-close-up"}
            format_filename={"[Nama file: Provinsi_PNA_Nama]"}
            setError={setError}
            selectedFile={selectedPhotoCloseUp}
            setSelectedFile={setSelectedPhotoCloseUp}
            required={true}
            isPDF={false}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field={"photo_profile_and_data_ukuran_pakaian_data"}
            field_input={"url_foto_full_body"}
            form_name={"Foto Full Body Ukuran 4R Menggunakan Pakaian Formal"}
            form_id={"url-foto-full-body"}
            format_filename={"[Nama file: Provinsi_FB_Nama]"}
            setError={setError}
            selectedFile={selectedPhotoFullBody}
            setSelectedFile={setSelectedPhotoFullBody}
            required={true}
            isPDF={false}
          />

          <div className="items-center space-x-0 space-y-1 sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6 text-white-900"
              style={{ color: "white" }}
            >
              Ukuran Kaos Berkerah <span className="text-white-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              {ukuranKaosBerkerahOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 space-y-1"
                >
                  <input
                    type="radio"
                    name="ukuran_kaos_berkerah"
                    value={
                      dataToSend["photo_profile_and_data_ukuran_pakaian_data"][
                        "ukuran_kaos_berkerah"
                      ]
                    }
                    checked={
                      dataToSend["photo_profile_and_data_ukuran_pakaian_data"][
                        "ukuran_kaos_berkerah"
                      ] === option.value
                    }
                    onChange={() => {
                      setDataToSend({
                        ...dataToSend,
                        photo_profile_and_data_ukuran_pakaian_data: {
                          ...dataToSend.photo_profile_and_data_ukuran_pakaian_data,
                          ukuran_kaos_berkerah: option.value,
                        },
                      });
                    }}
                    className="peer h-4 w-4 appearance-none rounded-full border border-gray-300 checked:bg-indigo-500 checked:border-white focus:ring-indigo-500"
                    required
                  />
                  <span
                    className="peer-checked:text-indigo-500 text-[13px]"
                    style={{ color: "white" }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="items-center space-x-0 space-y-1 sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6 text-white-900"
              style={{ color: "white" }}
            >
              Ukuran Celana <span className="text-white-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              {ukuranCelanaOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 space-y-1"
                >
                  <input
                    type="radio"
                    name="ukuran_celana"
                    value={
                      dataToSend["photo_profile_and_data_ukuran_pakaian_data"][
                        "ukuran_celana"
                      ]
                    }
                    checked={
                      dataToSend["photo_profile_and_data_ukuran_pakaian_data"][
                        "ukuran_celana"
                      ] === option.value
                    }
                    onChange={() => {
                      setDataToSend({
                        ...dataToSend,
                        photo_profile_and_data_ukuran_pakaian_data: {
                          ...dataToSend.photo_profile_and_data_ukuran_pakaian_data,
                          ukuran_celana: option.value,
                        },
                      });
                    }}
                    className="peer h-4 w-4 appearance-none rounded-full border border-gray-300 checked:bg-indigo-500 checked:border-white focus:ring-indigo-500"
                    required
                  />
                  <span
                    className="peer-checked:text-indigo-500 text-[13px]"
                    style={{ color: "white" }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex space-x-3">
          <button
            type="button" // Use type="button" to prevent form submission
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            style={{ backgroundColor: "#A94243" }}
            onClick={() => setCurrentPage(currentPage - 1)} // Go back to the previous page
          >
            {"Kembali"}
          </button>
          <button
            type="submit"
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            style={{ backgroundColor: "#549BAC" }}
          >
            {"Lanjutkan"}{" "}
          </button>
        </div>
      </form>
      {/* </UploadProvider> */}
    </div>
  );
};
