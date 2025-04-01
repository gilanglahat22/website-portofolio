"use client";

import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import TextInputField from "./TextInputField";

export const PertanyaanIsian: React.FC<PertanyaanIsianProps> = ({
  setDataToSend,
  dataToSend,
  setCurrentPage,
  currentPage,
  handleSubmit,
  selectedAgreePolicy,
  setSelectedAgreePolicy,
  isLoading,
  progress,
  error,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center pt-4 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
      {isLoading && selectedAgreePolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-white mt-2 text-2xl">Uploading...</span>
            <div className="w-64 h-4 bg-gray-200 rounded-full">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-white mt-2 text-2xl">{progress}%</span>
          </div>
        </div>
      )}
      <h2
        className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl font-cinzel-decorative-bold"
        style={{ color: "#162E50", fontWeight: 700, fontSize: "170%" }}
      >
        FORMULIR
      </h2>
      {/* <UploadProvider> */}
      <form
        // method="POST"
        onSubmit={handleSubmit}
        className="mx-auto mt-12 sm:mt-11 pt-6 pl-8 pr-8 pb-8 rounded-lg text-left"
        style={{
          background: "linear-gradient(180deg, #090425 52.5%, #0E0838 100%)",
        }}
      >
        <label
          className="block text-sm font-semibold leading-6 text-white-900 text-[20px]"
          style={{ color: "white" }}
        >
          Pertanyaan Isian
        </label>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 mt-7">
          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="pernyataan_isian_form"
            field_input="pahami_tentang_maritim"
            form_name="Apa yang Anda pahami tentang maritim?"
            form_id="pahami-tentang-maritim"
            give_name="given-name"
            required={true}
            customPlaceholder={false}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="pernyataan_isian_form"
            field_input="isu_maritim_paling_menarik"
            form_name="Isu maritim apa yang paling menarik perhatian Anda? Jelaskan?"
            form_id="isu-maritim-paling-menarik"
            give_name="given-name"
            required={true}
            customPlaceholder={false}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="pernyataan_isian_form"
            field_input="yang_diketahui_tentang_putera_puteri_maritim"
            form_name="Apa yang Anda ketahui tentang Putera Puteri Maritim Indonesia?"
            form_id="ketahui-tentang-putera-puteri"
            give_name="given-name"
            required={true}
            customPlaceholder={false}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="pernyataan_isian_form"
            field_input="alasan_terpilih_menjadi_finalis_putera_puteri_maritim"
            form_name="Apabila Anda terpilih menjadi Finalis Putera Puteri Maritim Indonesia 2025, 
                                bagaimana komitmen Anda sebagai Duta Maritim Indonesia selama 1 tahun menjabat 
                                dalam mengerjakan Program Kerja yang ditentukan?"
            form_id="alasan-terpilih"
            give_name="given-name"
            required={true}
            customPlaceholder={false}
          />

          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agree_policy"
                checked={selectedAgreePolicy || false}
                onChange={(e) => {
                  setSelectedAgreePolicy(e.target.checked);
                }}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required
              />
              <span className="text-[13px]" style={{ color: "white" }}>
                Klik untuk menyetujui formulir di atas
              </span>
            </label>
          </div>
        </div>

        {!selectedAgreePolicy && (
          <p className="text-red-500 text-sm mt-5">{error}</p>
        )}

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
            {"Submit"}{" "}
          </button>
        </div>
      </form>
      {/* </UploadProvider> */}
    </div>
  );
};
