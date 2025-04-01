"use client";

import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { useState } from "react";
import pendidikan from "../../pendidikan.json";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import DropdownInputField from "./DropdownInputField";
import RadioInputVerticalField from "./RadioInputVerticalField";
import TextInputField from "./TextInputField";
import english_level from "../../english_level.json";
import UploadFileInputField from "./UploadFileInputField";

export const DataAkademikAndNonAkademik: React.FC<
  FormulirDataAkademikAndNonAkademikProps
> = ({
  setDataToSend,
  dataToSend,
  setCurrentPage,
  currentPage,
  selectedAkademikFile,
  setSelectedAkademikFile,
  selectedNonAkademikFile,
  setSelectedNonAkademikFile,
}) => {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleNext = async (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const statusPendidikanOptions = [
    {
      value: "Tamat (Dibuktikan Dengan Scan Prestasi Akademik)",
      label: "Tamat (Dibuktikan Dengan Scan Prestasi Akademik)",
    },
    {
      value:
        "Sedang Menjalan Pendidikan (Dibuktikan Dengan Scan Nilai Semester Terakhir)",
      label:
        "Sedang Menjalan Pendidikan (Dibuktikan Dengan Scan Nilai Semester Terakhir)",
    },
  ];

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
          Data Akademik & Non-Akademik
        </label>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 mt-7">
          <DropdownInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="pendidikan_terakhir"
            form_name="Pendidikan Terakhir"
            form_id="pendidikan-terakhir"
            dropdownOptions={pendidikan}
            required={true}
          />

          <RadioInputVerticalField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="status_pendidikan"
            form_name="Status Pendidikan Saat ini"
            form_id="status-pendidikan"
            radioOptions={statusPendidikanOptions}
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="institusi"
            form_name="Institusi"
            form_id="institusi"
            give_name="given-name"
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="fakultas"
            form_name="Fakultas"
            form_id="fakultas"
            give_name="given-name"
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="program_studi"
            form_name="Program Studi"
            form_id="program-studi"
            give_name="given-name"
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="minat_bakat"
            form_name="Minat dan Bakat"
            form_id="minat-bakat"
            give_name="given-name"
            required={true}
          />

          <DropdownInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="language_proficiency"
            form_name="Kemampuan Bahasa Inggris (Beginner to Profecient: 1-5)"
            form_id="language-proficiency"
            dropdownOptions={english_level}
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="bahasa_daerah"
            form_name="Bahasa Daerah"
            form_id="bahasa-daerah"
            give_name="given-name"
            required={false}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input={"url_prestasi_akademik"}
            form_name={"Lampiran Prestasi Akademis"}
            form_id={"url-prestasi-akademik"}
            format_filename={"[Nama file: Provinsi_PA_Nama]"}
            setError={setError}
            selectedFile={selectedAkademikFile}
            setSelectedFile={setSelectedAkademikFile}
            required={true}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input={"url_prestasi_non_akademik"}
            form_name={"Lampiran Prestasi Non-Akademis"}
            form_id={"url-prestasi-akademik"}
            format_filename={"[Nama file: Provinsi_PNA_Nama]"}
            setError={setError}
            selectedFile={selectedNonAkademikFile}
            setSelectedFile={setSelectedNonAkademikFile}
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="akademik_non_akademik_data"
            field_input="pengalaman_organisasi"
            form_name="Pengalaman Organisasi"
            form_id="pengalaman-organisasi"
            give_name="given-name"
            required={false}
          />
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
