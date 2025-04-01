"use client";

import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { useEffect, useRef } from "react";
import agamas from "../../agamas.json";
import provinsis from "../../provinsis.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { CalendarIcon } from "@heroicons/react/24/outline";
import TextInputField from "./TextInputField";
import NumberInputField from "./NumberInputField";

export const JalurPendaftaranForm: React.FC<JalurPendaftaranFormFieldProps> = ({
  setDataToSend,
  dataToSend,
  setCurrentPage,
  currentPage,
}) => {
  const datePickerRef = useRef<DatePicker>(null);

  const handleNext = async (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const genderOptions = [
    { value: "laki-laki", label: "Laki-Laki" },
    { value: "perempuan", label: "Perempuan" },
  ];

  const jalurPendaftaranOptions = [
    { value: "Umum", label: "Umum" },
    { value: "Rekomendasi Paguyuban", label: "Rekomendasi Paguyuban" },
    {
      value: "Rekomendasi LANAL/LANTAMAL",
      label: "Rekomendasi LANAL/LANTAMAL",
    },
  ];

  const handleButtonClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Open the date picker dropdown
    }
  };

  const formatDate = (date: Date | null): string => {
    if (!date) {
      return ""; // Handle the case where no date is selected
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const convertToDate = (dateString: string): Date | null => {
    if (dateString == "") {
      return null;
    }
    const [day, month, year] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day); // Month is 0-indexed
  };

  return (
    <div className="mx-auto max-w-2xl text-center pt-4 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
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
          Jalur Pendaftaran & Data Diri Peserta
        </label>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 mt-7">
          <div className="items-center space-x-0 sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6"
              style={{ color: "white" }}
            >
              Jalur Pendaftaran <span className="text-white-500">*</span>
            </label>
            <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 mt-2">
              {jalurPendaftaranOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    name="jalur_pendaftaran"
                    value={option.value}
                    checked={
                      dataToSend.jalur_pendaftaran_data.jalur_pendaftaran === option.value
                    }
                    onChange={() => {
                      setDataToSend({
                        ...dataToSend,
                        jalur_pendaftaran_data: {
                          ...dataToSend.jalur_pendaftaran_data,
                          jalur_pendaftaran: option.value,
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

          {/* Nama Lengkap */}
          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="jalur_pendaftaran_data"
            field_input="nama_lengkap"
            form_name="Nama Lengkap"
            form_id="nama-lengkap"
            give_name="given-name"
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="jalur_pendaftaran_data"
            field_input="nama_panggilan"
            form_name="Nama Panggilan"
            form_id="nama-panggilan"
            give_name="given-name"
            required={true}
          />

          <div className="sm:col-span-2">
            {/* Make the date picker occupy one column */}
            <label
              className="block text-sm font-semibold leading-6"
              style={{ color: "white" }}
            >
              Tempat Tanggal Lahir <span className="text-white-500">*</span>
            </label>
            <div className="mt-2.5 relative w-full">
              <div className="mt-2.5 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                {/* Input for Kota */}
                <input
                  type="text"
                  value={dataToSend["jalur_pendaftaran_data"]["tempat_lahir"]}
                  onChange={(event) => {
                    setDataToSend({
                      ...dataToSend,
                      jalur_pendaftaran_data: {
                        ...dataToSend.jalur_pendaftaran_data,
                        tempat_lahir: event.target.value,
                      },
                    });
                  }}
                  name="asal-kota"
                  id="asal-kota"
                  autoComplete="given-name"
                  className="w-full md:w-1/4 rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ring-gray-300"
                  placeholder="Kota"
                  required
                />

                {/* Date Picker and Button Container */}
                <div className="flex flex-row items-center space-x-1 md:space-x-0 md:flex-1">
                  <DatePicker
                    selected={convertToDate(
                      dataToSend["jalur_pendaftaran_data"]["tanggal_lahir"]
                    )}
                    onChange={(date: Date | null) =>
                      setDataToSend({
                        ...dataToSend,
                        jalur_pendaftaran_data: {
                          ...dataToSend.jalur_pendaftaran_data,
                          tanggal_lahir: formatDate(date),
                        },
                      })
                    }
                    className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    dateFormat="dd-MM-yyyy"
                    isClearable
                    placeholderText="dd-MM-yyyy"
                    ref={datePickerRef}
                    required
                  />
                  <button
                    type="button"
                    className="flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-400 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
                    onClick={handleButtonClick}
                  >
                    <CalendarIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <NumberInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="jalur_pendaftaran_data"
            field_input="usia"
            form_name="Usia"
            form_id="usia"
            required={true}
          />

          <div className="items-center space-x-0 sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6 text-white-900"
              style={{ color: "white" }}
            >
              Jenis Kelamin <span className="text-white-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              {genderOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 space-y-1"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={
                      dataToSend["jalur_pendaftaran_data"]["jenis_kelamin"]
                    }
                    checked={
                      dataToSend["jalur_pendaftaran_data"]["jenis_kelamin"] ===
                      option.value
                    }
                    onChange={() => {
                      setDataToSend({
                        ...dataToSend,
                        jalur_pendaftaran_data: {
                          ...dataToSend.jalur_pendaftaran_data,
                          jenis_kelamin: option.value,
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

          <div className="sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6 text-white-900"
              style={{ color: "white" }}
            >
              NIK <span className="text-white-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="nik"
                id="nik"
                value={dataToSend["jalur_pendaftaran_data"]["nik"]}
                onChange={(event) => {
                  const cleanedValue = event.target.value.replace(
                    /[^0-9+]/g,
                    "",
                  );
                  setDataToSend({
                    ...dataToSend,
                    jalur_pendaftaran_data: {
                      ...dataToSend.jalur_pendaftaran_data,
                      nik: cleanedValue,
                    },
                  });
                }}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ color: "black" }}
                placeholder="Masukkan NIK Kamu"
                required
              />
            </div>
          </div>

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="jalur_pendaftaran_data"
            field_input="alamat_domisili"
            form_name="Alamat Lengkap Sesuai Domisili"
            form_id="AlamatDomisili"
            give_name="organization"
            required={true}
          />

          <div className="sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6"
              style={{ color: "white" }}
            >
              Agama <span className="text-gray-400">*</span>
            </label>
            <div className="mt-2.5">
              <select
                value={dataToSend["jalur_pendaftaran_data"]["agama"] || ""}
                onChange={(event) => {
                  setDataToSend({
                    ...dataToSend,
                    jalur_pendaftaran_data: {
                      ...dataToSend.jalur_pendaftaran_data,
                      agama: event.target.value,
                    },
                  });
                }}
                name="agama"
                id="agama"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-base"
                required
              >
                <option value="">Pilih Opsi</option>
                {agamas.map((agama: string) => (
                  <option key={agama} value={agama}>
                    {agama}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mewakili Provinsi Dropdown */}
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6"
              style={{ color: "white" }}
            >
              Mendaftarkan Diri Mewakili Provinsi{" "}
              <span className="text-gray-400">*</span>
            </label>
            <div className="mt-2.5">
              <select
                value={
                  dataToSend["jalur_pendaftaran_data"]["mewakili_provinsi"] || ""
                }
                onChange={(event) => {
                  setDataToSend({
                    ...dataToSend,
                    jalur_pendaftaran_data: {
                      ...dataToSend.jalur_pendaftaran_data,
                      mewakili_provinsi: event.target.value,
                    },
                  });
                }}
                name="mewakili_provinsi"
                id="mewakili_provinsi"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-base"
                required
              >
                <option value="">Pilih Opsi</option>
                {provinsis.map((provinsi: string) => (
                  <option key={provinsi} value={provinsi}>
                    {provinsi}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6 text-white-900"
              style={{ color: "white" }}
            >
              Tinggi Badan (cm) <span className="text-white-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="tinggi_badan"
                id="tinggi_badan"
                value={dataToSend["jalur_pendaftaran_data"]["tinggi_badan"]}
                onChange={(event) => {
                  const cleanedValue = event.target.value.replace(
                    /[^0-9+]/g,
                    "",
                  );
                  setDataToSend({
                    ...dataToSend,
                    jalur_pendaftaran_data: {
                      ...dataToSend.jalur_pendaftaran_data,
                      tinggi_badan: cleanedValue,
                    },
                  });
                }}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ color: "black" }}
                placeholder="Masukkan Tinggi Badan Kamu"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              className="block text-sm font-semibold leading-6 text-white-900"
              style={{ color: "white" }}
            >
              Berat Badan (kg) <span className="text-white-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="berat_badan"
                id="berat_badan"
                value={dataToSend["jalur_pendaftaran_data"]["berat_badan"]}
                onChange={(event) => {
                  const cleanedValue = event.target.value.replace(
                    /[^0-9+]/g,
                    "",
                  );
                  setDataToSend({
                    ...dataToSend,
                    jalur_pendaftaran_data: {
                      ...dataToSend.jalur_pendaftaran_data,
                      berat_badan: cleanedValue,
                    },
                  });
                }}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ color: "black" }}
                placeholder="Masukkan Berat Badan Kamu"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex space-x-3">
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
