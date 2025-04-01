"use client";

import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import TextInputField from "./TextInputField";
import NumberInputField from "./NumberInputField";

export const SocialMediaForm: React.FC<SocialMediaFormFieldProps> = ({
  setDataToSend,
  dataToSend,
  setCurrentPage,
  currentPage,
}) => {
  const handleNext = async (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="mx-auto max-w-2xl text-center pt-4 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
      <h2
        className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl font-cinzel-decorative-bold"
        style={{ color: "#162E50", fontWeight: 700, fontSize: "170%" }}
      >
        FORMULIR
      </h2>
      <form
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
          Social Media
        </label>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 mt-7">
          <NumberInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="social_media_data"
            field_input="nomor_telepon"
            form_name="No Handphone/Whatsapp"
            form_id="nomor-telepon"
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="social_media_data"
            field_input="akun_instagram"
            form_name="Akun Instagram"
            form_id="akun-instagram"
            give_name="given-name"
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="social_media_data"
            field_input="akun_tiktok"
            form_name="Akun Tiktok"
            form_id="akun-tiktok"
            give_name="given-name"
            required={true}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="social_media_data"
            field_input="akun_twitter"
            form_name="Akun Twitter"
            form_id="akun-twitter"
            give_name="given-name"
            required={false}
          />

          <TextInputField
            setDataToSend={setDataToSend}
            dataToSend={dataToSend}
            parent_field="social_media_data"
            field_input="akun_facebook"
            form_name="Akun Facebook"
            form_id="akun-facebook"
            give_name="given-name"
            required={false}
          />

          {/* Input Guidelines */}
          <div className="mt-4 text-sm text-gray-300">
            <p>
              <strong>Catatan:</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>
                Masukkan nomor telepon/Whatsapp dengan format +62 diikuti oleh
                nomor aktif Anda.
              </li>
              <li>
                Masukkan nama pengguna Instagram (username) tanpa simbol @.
              </li>
              <li>
                Gunakan nama pengguna Tiktok sesuai dengan yang tertera di
                profil Anda.
              </li>
              <li>
                Nama pengguna Twitter bisa dikosongkan jika tidak memiliki akun.
              </li>
              <li>
                Untuk Facebook, masukkan tautan profil lengkap atau nama
                pengguna Anda.
              </li>
              <li>
                Jika tidak memiliki informasi yang diminta, masukkan tanda strip
                (-).
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 flex space-x-3">
          <button
            type="button"
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            style={{ backgroundColor: "#A94243" }}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {"Kembali"}
          </button>
          <button
            type="submit"
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            style={{ backgroundColor: "#549BAC" }}
          >
            {"Lanjutkan"}
          </button>
        </div>
      </form>
    </div>
  );
};
