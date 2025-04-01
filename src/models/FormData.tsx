export interface JalurPendaftaranDataDiriPeserta {
  jalur_pendaftaran: string;
  nama_lengkap: string;
  nama_panggilan: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  usia: string;
  jenis_kelamin: string;
  nik: string;
  alamat_domisili: string;
  agama: string;
  mewakili_provinsi: string;
  tinggi_badan: string;
  berat_badan: string;
}

export interface SocialMediaForm {
  nomor_telepon: string;
  akun_instagram: string;
  akun_tiktok: string;
  akun_twitter: string;
  akun_facebook: string;
}

export interface AkademikDanNonAkademikForm {
  pendidikan_terakhir: string;
  status_pendidikan: string;
  institusi: string;
  fakultas: string;
  program_studi: string;
  minat_bakat: string;
  language_proficiency: string;
  bahasa_daerah: string;
  url_prestasi_akademik: string;
  url_prestasi_non_akademik: string;
  pengalaman_organisasi: string;
}

export interface DokumenPendukungLainnyaForm {
  url_ktp: string;
  url_bpjs: string;
  url_ijazah: string;
  url_surat_keterangan_kesehatan_RSUD: string;
  url_surat_keterangan_setia_kepada_pancasila: string;
  url_formulir_pendaftaran: string;
  url_formulir_ijin_orangtua: string;
  url_formulir_pernyataan_komitmen: string;
  riwayat_penyakit: string;
}

export interface PhotoProfileAndDataUkuranPakaian {
  url_foto_close_up: string;
  url_foto_full_body: string;
  ukuran_kaos_berkerah: string;
  ukuran_celana: string;
}

export interface PertanyaanIsianForm {
  pahami_tentang_maritim: string;
  isu_maritim_paling_menarik: string;
  yang_diketahui_tentang_putera_puteri_maritim: string;
  alasan_terpilih_menjadi_finalis_putera_puteri_maritim: string;
}

export interface FormDataEntry {
  email: string;
  jalur_pendaftaran_data: JalurPendaftaranDataDiriPeserta;
  social_media_data: SocialMediaForm;
  akademik_non_akademik_data: AkademikDanNonAkademikForm;
  dokumen_pendukung_lainnya_data: DokumenPendukungLainnyaForm;
  photo_profile_and_data_ukuran_pakaian_data: PhotoProfileAndDataUkuranPakaian;
  pernyataan_isian_form: PertanyaanIsianForm;
  status: number | string; // Handle both string and number
  updated_at: string;
  created_at: string | null;
}

export interface FormDataEmailStatus {
  email: string;
  status: number;
  updated_at: string;
  created_at: string | null;
}
