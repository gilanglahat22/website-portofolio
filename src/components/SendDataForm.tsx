"use client";

import { useState, useEffect, useRef } from "react";
import {
  handleCekDataSheet,
  handleCreateFolder,
  handleFileUpload,
  handleUpdateSheet,
} from "../utils/utils";
import "react-datepicker/dist/react-datepicker.css";
import { FormDataEntry } from "@/models/FormData";
import { StatusData } from "@/utils/const";
import { EmailForm } from "./FormulirPage1";
import { JalurPendaftaranForm } from "./FormulirPage2";
import { SocialMediaForm } from "./FormulirPage3";
import { DataAkademikAndNonAkademik } from "./FormulirPage4";
import { DokumenPendukungLainnya } from "./FormulirPage5";
import { PhotoProfileAndDataUkuranPakaian } from "./FormulirPage6";
import { PertanyaanIsian } from "./FormulirPage7";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function FormSendData() {
  const [selectedPrestasiAkademikFile, setSelectedPrestasiAkademikFile] =
    useState<File | null>(null);
  const [selectedPrestasiNonAkademikFile, setSelectedPrestasiNonAkademikFile] =
    useState<File | null>(null);
  const [selectedKTPFile, setSelectedKTPFile] = useState<File | null>(null);
  const [selectedBpjs, setSelectedBpjs] = useState<File | null>(null);
  const [selectedIjazah, setSelectedIjazah] = useState<File | null>(null);
  const [
    selectedSuratKeteranganSetiaKepadaPancasila,
    setSelectedSuratKeteranganSetiaKepadaPancasila,
  ] = useState<File | null>(null);
  const [selectedFormulirPendaftaran, setSelectedFormulirPendaftaran] =
    useState<File | null>(null);
  const [selectedFormulirIjinOrangTua, setSelectedFormulirIjinOrangTua] =
    useState<File | null>(null);
  const [
    selectedFormulirPernyataanKomitmen,
    setSelectedFormulirPernyataanKomitmen,
  ] = useState<File | null>(null);
  const [selectedPhotoCloseUp, setSelectedPhotoCloseUp] = useState<File | null>(
    null,
  );
  const [selectedPhotoFullBody, setSelectedPhotoFullBody] =
    useState<File | null>(null);
  const [selectedSuratKeteranganSehat, setSelectedSuratKeteranganSehat] =
    useState<File | null>(null);
  const [dataToSend, setDataToSend] = useState<FormDataEntry>({
    email: "",
    jalur_pendaftaran_data: {
      jalur_pendaftaran: "",
      nama_lengkap: "",
      nama_panggilan: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      usia: "",
      jenis_kelamin: "",
      nik: "",
      alamat_domisili: "",
      agama: "",
      mewakili_provinsi: "",
      tinggi_badan: "",
      berat_badan: "",
    },
    social_media_data: {
      nomor_telepon: "",
      akun_instagram: "",
      akun_tiktok: "",
      akun_twitter: "",
      akun_facebook: "",
    },
    akademik_non_akademik_data: {
      pendidikan_terakhir: "",
      status_pendidikan: "",
      institusi: "",
      fakultas: "",
      program_studi: "",
      minat_bakat: "",
      language_proficiency: "",
      bahasa_daerah: "",
      url_prestasi_akademik: "",
      url_prestasi_non_akademik: "",
      pengalaman_organisasi: "",
    },
    dokumen_pendukung_lainnya_data: {
      url_ktp: "",
      url_bpjs: "",
      url_ijazah: "",
      url_surat_keterangan_kesehatan_RSUD: "",
      url_surat_keterangan_setia_kepada_pancasila: "",
      url_formulir_pendaftaran: "",
      url_formulir_ijin_orangtua: "",
      url_formulir_pernyataan_komitmen: "",
      riwayat_penyakit: "",
    },
    photo_profile_and_data_ukuran_pakaian_data: {
      url_foto_close_up: "",
      url_foto_full_body: "",
      ukuran_kaos_berkerah: "",
      ukuran_celana: "",
    },
    pernyataan_isian_form: {
      pahami_tentang_maritim: "",
      isu_maritim_paling_menarik: "",
      yang_diketahui_tentang_putera_puteri_maritim: "",
      alasan_terpilih_menjadi_finalis_putera_puteri_maritim: "",
    },
    status: StatusData.BELUM_VERIFIKASI_DATA, // oke
    created_at: new Date().toISOString().replace("T", " ").substring(0, 19), // oke
    updated_at: new Date().toISOString().replace("T", " ").substring(0, 19), // oke
  });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedAgreePolicy, setSelectedAgreePolicy] =
    useState<boolean>(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const resetDataAfterSubmit = () => {
    setSelectedPrestasiAkademikFile(null);
    setSelectedPrestasiNonAkademikFile(null);
    setSelectedKTPFile(null);
    setSelectedBpjs(null);
    setSelectedIjazah(null);
    setSelectedSuratKeteranganSetiaKepadaPancasila(null);
    setSelectedFormulirPendaftaran(null);
    setSelectedFormulirIjinOrangTua(null);
    setSelectedFormulirPernyataanKomitmen(null);
    setSelectedPhotoCloseUp(null);
    setSelectedPhotoFullBody(null);
    setSelectedSuratKeteranganSehat(null);
    setSelectedAgreePolicy(false);
    setIsLoading(false);
    setProgress(0);
    setError("");
    setCurrentPage(1);
    setDataToSend({
      email: "", // oke
      jalur_pendaftaran_data: {
        jalur_pendaftaran: "",
        nama_lengkap: "",
        nama_panggilan: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        usia: "",
        jenis_kelamin: "",
        nik: "",
        alamat_domisili: "",
        agama: "",
        mewakili_provinsi: "",
        tinggi_badan: "",
        berat_badan: "",
      },
      social_media_data: {
        nomor_telepon: "",
        akun_instagram: "",
        akun_tiktok: "",
        akun_twitter: "",
        akun_facebook: "",
      },
      akademik_non_akademik_data: {
        pendidikan_terakhir: "",
        status_pendidikan: "",
        institusi: "",
        fakultas: "",
        program_studi: "",
        minat_bakat: "",
        language_proficiency: "",
        bahasa_daerah: "",
        url_prestasi_akademik: "",
        url_prestasi_non_akademik: "",
        pengalaman_organisasi: "",
      },
      dokumen_pendukung_lainnya_data: {
        url_ktp: "",
        url_bpjs: "",
        url_ijazah: "",
        url_surat_keterangan_kesehatan_RSUD: "",
        url_surat_keterangan_setia_kepada_pancasila: "",
        url_formulir_pendaftaran: "",
        url_formulir_ijin_orangtua: "",
        url_formulir_pernyataan_komitmen: "",
        riwayat_penyakit: "",
      },
      photo_profile_and_data_ukuran_pakaian_data: {
        url_foto_close_up: "",
        url_foto_full_body: "",
        ukuran_kaos_berkerah: "",
        ukuran_celana: "",
      },
      pernyataan_isian_form: {
        pahami_tentang_maritim: "",
        isu_maritim_paling_menarik: "",
        yang_diketahui_tentang_putera_puteri_maritim: "",
        alasan_terpilih_menjadi_finalis_putera_puteri_maritim: "",
      },
      status: StatusData.BELUM_VERIFIKASI_DATA, // oke
      created_at: new Date().toISOString().replace("T", " ").substring(0, 19), // oke
      updated_at: new Date().toISOString().replace("T", " ").substring(0, 19), // oke
    });
    setIsLoading(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setProgress(0);

    if (!selectedAgreePolicy) {
      setError("You must agree to the privacy policy to proceed.");
      setIsLoading(false);
      return;
    }

    try {
      const folderId = await handleCreateFolder(
        dataToSend.jalur_pendaftaran_data.nama_lengkap,
      );

      if (folderId == null) {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        return;
      }

      const fileInputs = [
        {
          ref: selectedPrestasiAkademikFile,
          parentField: "akademik_non_akademik_data",
          fieldName: "url_prestasi_akademik",
        },
        {
          ref: selectedPrestasiNonAkademikFile,
          parentField: "akademik_non_akademik_data",
          fieldName: "url_prestasi_non_akademik",
        },
        {
          ref: selectedKTPFile,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_ktp",
        },
        {
          ref: selectedBpjs,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_bpjs",
        },
        {
          ref: selectedIjazah,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_ijazah",
        },
        {
          ref: selectedSuratKeteranganSehat,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_surat_keterangan_kesehatan_RSUD",
        },
        {
          ref: selectedSuratKeteranganSetiaKepadaPancasila,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_surat_keterangan_setia_kepada_pancasila",
        },
        {
          ref: selectedFormulirPendaftaran,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_formulir_pendaftaran",
        },
        {
          ref: selectedFormulirIjinOrangTua,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_formulir_ijin_orangtua",
        },
        {
          ref: selectedFormulirPernyataanKomitmen,
          parentField: "dokumen_pendukung_lainnya_data",
          fieldName: "url_formulir_pernyataan_komitmen",
        },
        {
          ref: selectedPhotoCloseUp,
          parentField: "photo_profile_and_data_ukuran_pakaian_data",
          fieldName: "url_foto_close_up",
        },
        {
          ref: selectedPhotoFullBody,
          parentField: "photo_profile_and_data_ukuran_pakaian_data",
          fieldName: "url_foto_full_body",
        },
      ];

      const totalFiles = fileInputs.length;
      let completedFiles = 0;

      // Create a new object to accumulate the changes
      const updatedDataToSend: FormDataEntry = { ...dataToSend };

      const fileUploadPromises = fileInputs.map(
        async ({ ref, parentField, fieldName }) => {
          const file = ref || null;

          if (file) {
            const filename = `${file.name.split(".")[0]}-${dataToSend.email}.${file.name.split(".").pop()}`;
            const res = await handleFileUpload(
              file,
              setShowError,
              folderId,
              filename,
            );

            if (res?.data?.webViewLink) {
              const parentObject =
                updatedDataToSend[parentField as keyof FormDataEntry];
              if (parentObject && typeof parentObject === "object") {
                // Type guard: Ensure fieldName exists on parentObject
                if (fieldName in parentObject) {
                  (parentObject as Record<string, any>)[fieldName] =
                    res.data.webViewLink;
                }
              }
            }
            completedFiles += 1;
            setProgress(Math.round((completedFiles / totalFiles) * 100));
          }
        },
      );

      await Promise.all(fileUploadPromises);

      // Now update the state once all uploads are complete
      setDataToSend(updatedDataToSend);
      await handleUpdateSheet(updatedDataToSend); // Use the updated object to update the sheet
      await handleVerifyClick(updatedDataToSend.email);
      setShowSuccess(true);
      setShowError(false);
    } catch (error) {
      console.error("Error uploading or processing file:", error);
      setShowError(true);
      setShowSuccess(false);
    } finally {
      resetDataAfterSubmit();
      showPopUpResultAfterSubmit();
    }
  };

  const showPopUpResultAfterSubmit = () => {
    if (showSuccess) {
      setShowError(false);
      setTimeout(() => setShowSuccess(false), 10000);
    } else if (showError) {
      setShowSuccess(false);
      setTimeout(() => setShowError(false), 10000);
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleVerifyClick = async (emailRecepient: string) => {
    if (validateEmail(emailRecepient)) {
      try {
        const response = await fetch("/api/send-verification-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailRecepient }),
        });

        if (!response.ok) {
          alert("Failed to send verification email. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="mx-auto max-w-full text-center pt-9 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
      <div className="fixed top-4 inset-x-0 flex items-center justify-center z-50 pointer-events-none">
        {!isLoading && selectedAgreePolicy && (
          <>
            {showSuccess && (
              <div
                className="bg-green-500 text-white py-4 px-8 rounded-lg shadow-lg flex items-center justify-center space-x-3 transform transition-all duration-500 ease-in-out opacity-0 translate-y-[-20px] pointer-events-auto"
                style={{
                  opacity: showSuccess ? 1 : 0,
                  transform: showSuccess
                    ? "translateY(0)"
                    : "translateY(-20px)",
                }}
              >
                <span className="text-lg font-semibold">
                  Pendaftaran kamu telah berhasil, jangan lupa untuk cek kotak
                  email kamu🎉
                </span>
              </div>
            )}

            {showError && (
              <div
                className="bg-red-500 text-white py-4 px-8 rounded-lg shadow-lg flex items-center justify-center space-x-3 transform transition-all duration-500 ease-in-out opacity-0 translate-y-[-20px] pointer-events-auto"
                style={{
                  opacity: showError ? 1 : 0,
                  transform: showError ? "translateY(0)" : "translateY(-20px)",
                }}
              >
                <span className="text-lg font-semibold">
                  Terjadi kesalahan saat mengirim data!
                </span>
              </div>
            )}
          </>
        )}
      </div>
      {currentPage == 1 && (
        <EmailForm
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}

      {currentPage == 2 && (
        <JalurPendaftaranForm
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}

      {currentPage == 3 && (
        <SocialMediaForm
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}

      {currentPage == 4 && (
        <DataAkademikAndNonAkademik
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          selectedAkademikFile={selectedPrestasiAkademikFile}
          setSelectedAkademikFile={setSelectedPrestasiAkademikFile}
          selectedNonAkademikFile={selectedPrestasiNonAkademikFile}
          setSelectedNonAkademikFile={setSelectedPrestasiNonAkademikFile}
        />
      )}

      {currentPage == 5 && (
        <DokumenPendukungLainnya
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          selectedKTPFile={selectedKTPFile}
          setSelectedKTPFile={setSelectedKTPFile}
          selectedBpjs={selectedBpjs}
          setSelectedBpjs={setSelectedBpjs}
          selectedIjazah={selectedIjazah}
          setSelectedIjazah={setSelectedIjazah}
          selectedSuratKeteranganSehat={selectedSuratKeteranganSehat}
          setSelectedSuratKeteranganSehat={setSelectedSuratKeteranganSehat}
          selectedSuratKeteranganSetiaKepadaPancasila={
            selectedSuratKeteranganSetiaKepadaPancasila
          }
          setSelectedSuratKeteranganSetiaKepadaPancasila={
            setSelectedSuratKeteranganSetiaKepadaPancasila
          }
          selectedFormulirPendaftaran={selectedFormulirPendaftaran}
          setSelectedFormulirPendaftaran={setSelectedFormulirPendaftaran}
          selectedFormulirIjinOrangTua={selectedFormulirIjinOrangTua}
          setSelectedFormulirIjinOrangTua={setSelectedFormulirIjinOrangTua}
          selectedFormulirPernyataanKomitmen={
            selectedFormulirPernyataanKomitmen
          }
          setSelectedFormulirPernyataanKomitmen={
            setSelectedFormulirPernyataanKomitmen
          }
        />
      )}

      {currentPage == 6 && (
        <PhotoProfileAndDataUkuranPakaian
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          selectedPhotoCloseUp={selectedPhotoCloseUp}
          setSelectedPhotoCloseUp={setSelectedPhotoCloseUp}
          selectedPhotoFullBody={selectedPhotoFullBody}
          setSelectedPhotoFullBody={setSelectedPhotoFullBody}
        />
      )}

      {currentPage == 7 && (
        <PertanyaanIsian
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handleSubmit={handleSubmit}
          selectedAgreePolicy={selectedAgreePolicy}
          setSelectedAgreePolicy={setSelectedAgreePolicy}
          isLoading={isLoading}
          progress={progress}
          error={error}
        />
      )}
    </div>
  );
}
