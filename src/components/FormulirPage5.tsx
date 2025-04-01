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

export const DokumenPendukungLainnya: React.FC<
  FormulirDataDokumenPendukungProps
> = ({
  setDataToSend,
  dataToSend,
  setCurrentPage,
  currentPage,
  selectedKTPFile,
  setSelectedKTPFile,
  selectedBpjs,
  setSelectedBpjs,
  selectedIjazah,
  setSelectedIjazah,
  selectedSuratKeteranganSehat,
  setSelectedSuratKeteranganSehat,
  selectedSuratKeteranganSetiaKepadaPancasila,
  setSelectedSuratKeteranganSetiaKepadaPancasila,
  selectedFormulirPendaftaran,
  setSelectedFormulirPendaftaran,
  selectedFormulirIjinOrangTua,
  setSelectedFormulirIjinOrangTua,
  selectedFormulirPernyataanKomitmen,
  setSelectedFormulirPernyataanKomitmen,
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
          Dokumen Pendukung Lainnya
        </label>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 mt-7">
          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_ktp"}
            form_name={"Scan KTP"}
            form_id={"url-ktp"}
            format_filename={"[Nama file: Provinsi_PNA_Nama]"}
            setError={setError}
            selectedFile={selectedKTPFile}
            setSelectedFile={setSelectedKTPFile}
            required={true}
            isPDF={false}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_bpjs"}
            form_name={"Scan BPJS Aktif"}
            form_id={"url-bpjs"}
            format_filename={"[Nama file: Provinsi_BPJS_Nama]"}
            setError={setError}
            selectedFile={selectedBpjs}
            setSelectedFile={setSelectedBpjs}
            required={true}
            isPDF={false}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_ijazah"}
            form_name={"Scan Ijazah/Transkip Nilai Terakhir"}
            form_id={"url-ijazah"}
            format_filename={"[Nama file: Provinsi_Ijazah_Nama]"}
            setError={setError}
            selectedFile={selectedIjazah}
            setSelectedFile={setSelectedIjazah}
            required={true}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_surat_keterangan_kesehatan_RSUD"}
            form_name={"Surat Keterangan Kesehatan dari RSUD"}
            form_id={"url-keterangan-kesehatan-RSUD"}
            format_filename={"[nama file: Provinsi_KES_Nama]"}
            setError={setError}
            selectedFile={selectedSuratKeteranganSehat}
            setSelectedFile={setSelectedSuratKeteranganSehat}
            required={true}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_surat_keterangan_setia_kepada_pancasila"}
            form_name={"Surat Keterangan Setia Kepada Pancasila"}
            form_id={"url-surat-keterangan-setia-kepada-pancasila"}
            format_filename={"[nama file: Provinsi_SETIA_Nama]"}
            setError={setError}
            selectedFile={selectedSuratKeteranganSetiaKepadaPancasila}
            setSelectedFile={setSelectedSuratKeteranganSetiaKepadaPancasila}
            required={true}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_formulir_pendaftaran"}
            form_name={"Formulir Pendaftaran"}
            form_id={"url-formulir-pendaftaran"}
            format_filename={"[nama file: Provinsi_FORM_Nama]"}
            setError={setError}
            selectedFile={selectedFormulirPendaftaran}
            setSelectedFile={setSelectedFormulirPendaftaran}
            required={true}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_formulir_ijin_orangtua"}
            form_name={"Formulir Ijin Orangtua"}
            form_id={"url-formulir-ijin-orangtua"}
            format_filename={"[nama file: Provinsi_IJIN_Nama]"}
            setError={setError}
            selectedFile={selectedFormulirIjinOrangTua}
            setSelectedFile={setSelectedFormulirIjinOrangTua}
            required={true}
          />

          <UploadFileInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input={"url_formulir_pernyataan_komitmen"}
            form_name={"Formulir Pernyataan Komitmen"}
            form_id={"url_formulir_pernyataan_komitmen"}
            format_filename={"[nama file: Provinsi_KOM_Nama]"}
            setError={setError}
            selectedFile={selectedFormulirPernyataanKomitmen}
            setSelectedFile={setSelectedFormulirPernyataanKomitmen}
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="dokumen_pendukung_lainnya_data"
            field_input="riwayat_penyakit"
            form_name="Riwayat Penyakit"
            form_id="riwayat-penyakit"
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
