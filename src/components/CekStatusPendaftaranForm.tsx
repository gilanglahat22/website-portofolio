import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleCekDataSheet } from "../utils/utils"; // Update with correct path to your utility function
import { StatusData, StatusWording } from "@/utils/const";

export const CekStatusPendaftaranForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [verifyStatus, setVerifyStatus] = useState<number>(0);
  const [errorModal, setErrorModal] = useState(false); // State for error modal visibility

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      toast.dismiss();
      const result = await handleCekDataSheet(email);
      if (result && result.result.data) {
        setVerifyStatus(Number(result.result.data.status));
        setShowModal(true); // Show modal
      } else {
        setErrorModal(true); // Show error modal
      }
    } catch (error) {
      toast.error(`Error fetching data: ${error}`, { position: "top-center" });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setErrorModal(false);
  };

  const verificationStatusWordingHandler = (status: number) => {
    if (status == StatusData.BELUM_VERIFIKASI_DATA) {
      return StatusWording.BELUM_VERIFIKASI_DATA;
    } else {
      return StatusWording.SUDAH_VERIFIKASI_DATA;
    }
  };

  return (
    <div className="mx-auto max-w-full text-center pt-9 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
      <div className="mx-auto max-w-3xl text-center pt-9 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
        <h2
          className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl"
          style={{
            color: "#162E50",
            fontFamily: "Zen Antique", // Apply Zen Antique font
            fontSize: "40px", // Set font size to 40px
            fontWeight: 400, // Set font weight to 400
            lineHeight: "57.92px", // Set line height
            textAlign: "center", // Set text alignment to center
            textUnderlinePosition: "from-font", // Set text underline position
            textDecorationSkipInk: "none", // Set text decoration skip
          }}
        >
          Cek Status Pendaftaran
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 sm:mt-18 pt-6 pl-8 pr-8 pb-8 rounded-lg text-left"
          style={{
            background: "linear-gradient(180deg, #090425 52.5%, #0E0838 100%)",
          }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email-cek"
                  id="email-cek"
                  autoComplete="given-email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ color: "black" }}
                  placeholder="Masukkan Email Kamu"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              style={{ backgroundColor: "#549BAC" }}
            >
              {isLoading ? "Loading..." : "Cek"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />

      {/* Modal for displaying status */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Status Pendaftaran
            </h3>
            <p
              className={`mb-4 text-xl font-semibold ${verifyStatus === 1 ? "text-green-600" : "text-yellow-600"}`}
            >
              {verificationStatusWordingHandler(verifyStatus)}
            </p>
            <button
              onClick={closeModal}
              className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      {/* Error Modal for email not registered */}
      {errorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Email belum terdaftar!
            </h3>
            <p className="mb-4 text-gray-900">
              Silakan periksa kembali email yang Anda masukkan.
            </p>
            <button
              onClick={closeModal}
              className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
