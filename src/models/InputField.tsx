type NumberInputFieldProps = {
  setDataToSend: (value: any) => void;
  dataToSend: any;
  parent_field: string;
  field_input: string;
  form_name: string;
  form_id: string;
  required?: boolean; // New parameter to control the required flag
};

type TextInputFieldProps = {
  setDataToSend: (value: any) => void;
  dataToSend: any;
  parent_field: string;
  field_input: string;
  form_name: string;
  form_id: string;
  give_name?: string;
  required?: boolean; // New parameter to control the required flag
  customPlaceholder?: boolean;
};

type FormulirFieldProps = {
  setDataToSend: (value: any) => void;
  dataToSend: any;
  setCurrentPage: (value: any) => void;
  currentPage: number;
  handleSubmit?: any;
  resetDataAfterSubmit?: any;
  selectedAgreePolicy?: any;
  setSelectedAgreePolicy?: any;
  isLoading?: boolean;
  progress?: number;
  error?: string;
};

type JalurPendaftaranFormFieldProps = FormulirFieldProps;

type SocialMediaFormFieldProps = FormulirFieldProps;

type FormulirDataAkademikAndNonAkademikProps = FormulirFieldProps & {
  selectedAkademikFile: any;
  setSelectedAkademikFile: any;
  selectedNonAkademikFile: any;
  setSelectedNonAkademikFile: any;
};

type DropdownFieldProps = {
  setDataToSend: (value: any) => void;
  dataToSend: any;
  parent_field: string;
  field_input: string;
  form_name: string;
  form_id: string;
  give_name?: string;
  dropdownOptions: Array<any>;
  required?: boolean; // New parameter to control the required flag
};

type RadioInputFieldProps = {
  setDataToSend: (value: any) => void;
  dataToSend: any;
  parent_field: string;
  field_input: string;
  form_name: string;
  form_id: string;
  give_name?: string;
  radioOptions: Array<any>;
  required?: boolean; // New parameter to control the required flag
};

type UploadFileInputFieldProps = {
  setDataToSend: (value: any) => void;
  dataToSend: any;
  parent_field: string;
  field_input: string;
  form_name: string;
  form_id: string;
  give_name?: string;
  required?: boolean; // New parameter to control the required flag
};

type FormulirDataDokumenPendukungProps = FormulirFieldProps & {
  selectedKTPFile: any;
  setSelectedKTPFile: any;
  selectedBpjs: any;
  setSelectedBpjs: any;
  selectedIjazah: any;
  setSelectedIjazah: any;
  selectedSuratKeteranganSehat: any;
  setSelectedSuratKeteranganSehat: any;
  selectedSuratKeteranganSetiaKepadaPancasila: any;
  setSelectedSuratKeteranganSetiaKepadaPancasila: any;
  selectedFormulirPendaftaran: any;
  setSelectedFormulirPendaftaran: any;
  selectedFormulirIjinOrangTua: any;
  setSelectedFormulirIjinOrangTua: any;
  selectedFormulirPernyataanKomitmen: any;
  setSelectedFormulirPernyataanKomitmen: any;
};

type PhotoProfileAndDataUkuranPakaianProps = FormulirFieldProps & {
  selectedPhotoCloseUp: any;
  setSelectedPhotoCloseUp: any;
  selectedPhotoFullBody: any;
  setSelectedPhotoFullBody: any;
};

type PertanyaanIsianProps = FormulirFieldProps;
