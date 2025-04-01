"use client";

import { useState } from "react";
import {
  handleCekDataSheet,
  handleCekEmailStatus,
  handleSendVerifyEmail,
  postUserEmailStatus,
} from "../utils/utils";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { toast } from "react-toastify";
import { StatusData, StatusEmail, StatusWording } from "@/utils/const";

export const EmailForm: React.FC<FormulirFieldProps> = ({
  setDataToSend,
  dataToSend,
  setCurrentPage,
  currentPage,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatusMessage, setEmailStatusMessage] = useState(""); // To store the email availability message
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean>(false);
  const [isLoadingVerificationButton, setIsLoadingVerificationButton] =
    useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const cekAvailabilityEmailtoSubmit = async () => {
    const emailToSend = dataToSend.email;
    if (validateEmail(emailToSend)) {
      try {
        const responseCekEmail = await handleCekEmailStatus(emailToSend);
        if (responseCekEmail) {
          if (responseCekEmail.code == 200) {
            const status = responseCekEmail.result.data.status;
            if (status == StatusEmail.BELUM_VERIFIKASI_EMAIL) {
              setEmailStatusMessage(
                "Email belum terverifikasi, silahkan verifikasi email terlebih dahulu.",
              );
              setIsEmailAvailable(false);
            } else {
              const responseData = await handleCekDataSheet(emailToSend);
              if (responseData) {
                if (responseData.code == 200) {
                  setEmailStatusMessage(
                    "Email sudah terdaftar, silakan gunakan email lain.",
                  );
                  setIsEmailAvailable(false);
                } else if (responseData.code == 404) {
                  setCurrentPage(currentPage + 1);
                  setIsEmailAvailable(true);
                } else {
                  setEmailStatusMessage(
                    "Terjadi kesalahan, silahkan coba lagi.",
                  );
                  setIsEmailAvailable(false);
                }
              } else {
                setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
                setIsEmailAvailable(false);
              }
            }
          } else if (responseCekEmail.code == 404) {
            setEmailStatusMessage(
              "Email belum terverifikasi, silahkan verifikasi email terlebih dahulu.",
            );
            setIsEmailAvailable(false);
          } else {
            setEmailStatusMessage(responseCekEmail.message);
            setIsEmailAvailable(false);
          }
        } else {
          setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
          setIsEmailAvailable(false);
        }
      } catch (error) {
        setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
        setIsEmailAvailable(false);
      }
    } else {
      setEmailStatusMessage("Harap masukkan alamat email yang valid.");
      setIsEmailAvailable(false);
    }
  };

  const handleCekEmailClick = async () => {
    setEmailStatusMessage("");
    setIsEmailAvailable(false);
    const emailToSend = dataToSend.email;
    if (emailToSend.length == 0) {
      setEmailStatusMessage("Email tidak boleh kosong");
      setIsEmailAvailable(false);
    } else {
      if (validateEmail(emailToSend)) {
        try {
          const responseCekEmail = await handleCekEmailStatus(emailToSend);
          if (responseCekEmail) {
            if (responseCekEmail.code == 200) {
              const status = responseCekEmail.result.data.status;
              if (status == StatusEmail.SUDAH_VERIFIKASI_EMAIL) {
                setEmailStatusMessage(
                  "Email sudah terdaftar, silahkan gunakan email lain.",
                );
                setIsEmailAvailable(false);
              } else {
                setEmailStatusMessage("Email tersedia untuk digunakan.");
                setIsEmailAvailable(true);
              }
            } else if (responseCekEmail.code == 404) {
              setEmailStatusMessage("Email tersedia untuk digunakan.");
              setIsEmailAvailable(true);
            } else {
              setEmailStatusMessage(responseCekEmail.message);
              setIsEmailAvailable(false);
            }
          } else {
            setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
            setIsEmailAvailable(false);
          }
        } catch (error) {
          setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
          setIsEmailAvailable(false);
        }
      } else {
        setEmailStatusMessage("Harap masukkan alamat email yang valid.");
        setIsEmailAvailable(false);
      }
    }
  };

  const handleVerifyClick = async () => {
    const emailRecepient = dataToSend.email;
    setEmailStatusMessage("");
    setIsEmailAvailable(false);
    setIsLoadingVerificationButton(true);
    if (emailRecepient.length == 0) {
      setEmailStatusMessage("Email tidak boleh kosong");
      setIsEmailAvailable(false);
    } else {
      if (validateEmail(emailRecepient)) {
        try {
          const responseCekEmail = await handleCekEmailStatus(emailRecepient);
          if (responseCekEmail) {
            if (responseCekEmail.code == 200) {
              const status = responseCekEmail.result.data.status;
              if (status == StatusEmail.SUDAH_VERIFIKASI_EMAIL) {
                setEmailStatusMessage(
                  "Email sudah terdaftar, silahkan gunakan email lain.",
                );
                setIsEmailAvailable(false);
                setIsLoadingVerificationButton(false);
                return;
              } else {
                const response: any =
                  await handleSendVerifyEmail(emailRecepient);
                if (response.code === 200) {
                  setEmailStatusMessage(
                    "Email verifikasi berhasil dikirim, silahkan cek di kotak masuk email Anda.",
                  );
                  setIsEmailAvailable(true);
                } else {
                  setEmailStatusMessage(response.message);
                  setIsEmailAvailable(false);
                }
              }
            } else if (responseCekEmail.code == 404) {
              const resPostEmailStatus = await postUserEmailStatus({
                email: emailRecepient,
                status: StatusEmail.BELUM_VERIFIKASI_EMAIL,
                updated_at: new Date()
                  .toISOString()
                  .replace("T", " ")
                  .substring(0, 19),
                created_at: new Date()
                  .toISOString()
                  .replace("T", " ")
                  .substring(0, 19),
              });
              if (resPostEmailStatus.code == 200) {
                const response: any =
                  await handleSendVerifyEmail(emailRecepient);
                if (response.code === 200) {
                  setEmailStatusMessage(
                    "Email verifikasi berhasil dikirim, silahkan cek di kotak masuk email Anda.",
                  );
                  setIsEmailAvailable(true);
                } else {
                  setEmailStatusMessage(response.message);
                  setIsEmailAvailable(false);
                }
              } else {
                setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
                setIsEmailAvailable(false);
              }
            } else if (responseCekEmail.code == 400) {
              setEmailStatusMessage(responseCekEmail.message);
              setIsEmailAvailable(false);
            } else {
              setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
              setIsEmailAvailable(false);
            }
          } else {
            setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
            setIsEmailAvailable(false);
          }
        } catch (error) {
          setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
          setIsEmailAvailable(false);
        }
      } else {
        setEmailStatusMessage("Harap masukkan alamat email yang valid.");
        setIsEmailAvailable(false);
      }
    }
    setIsLoadingVerificationButton(false);
  };

  const handleNext = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setEmailStatusMessage("");
    setIsEmailAvailable(false);
    try {
      toast.dismiss();
      await cekAvailabilityEmailtoSubmit();
    } catch (error) {
      setEmailStatusMessage("Terjadi kesalahan, silahkan coba lagi.");
      setIsEmailAvailable(false);
      toast.error(`Error fetching data: ${error}`, { position: "top-center" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
<div className="mx-auto max-w-3xl text-center pt-9 pb-20 pl-2 pr-2 mt-2 sm:mt-7">
      <h2
        className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl"
        style={{
          color: "#162E50",
          fontFamily: "Zen Antique",
          fontSize: "40px",
          fontWeight: 400,
          lineHeight: "57.92px",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Formulir
      </h2>

      <form
        onSubmit={handleNext}
        className="mx-auto mt-12 sm:mt-18 pt-6 pl-8 pr-8 pb-8 rounded-lg text-left"
        style={{
          background: "linear-gradient(180deg, #090425 52.5%, #0E0838 100%)",
        }}
      >
        {/* Email Input */}
        <div className="sm:col-span-2 space-y-3">
          <label
            className="block text-sm font-semibold leading-6 text-white-900"
            style={{ color: "white" }}
          >
            Email <span className="text-red-500">*</span>
          </label>

          <div className="flex-1 flex items-center justify-between space-x-2">
            <input
              type="text"
              value={dataToSend.email}
              onChange={(event) =>
                setDataToSend({ ...dataToSend, email: event.target.value })
              }
              name="email"
              id="email"
              placeholder="Masukkan Email Kamu"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ring-gray-300"
              style={{ color: "black" }}
              required
            />
            <button
              type="button"
              onClick={handleVerifyClick}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-2 rounded border border-white"
            >
              {isLoadingVerificationButton ? "Loading..." : "Verifikasi"}
            </button>
          </div>

          {/* Email Status Message */}
          {emailStatusMessage && (
            <p
              className={`mt-2 text-sm ${
                isEmailAvailable ? "text-green-600" : "text-red-600"
              }`}
            >
              {emailStatusMessage}
            </p>
          )}
        </div>

        <div className="mt-5 flex space-x-3 pt-4">
          <button
            type="submit"
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            style={{ backgroundColor: "#549BAC" }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Lanjutkan"}
          </button>
        </div>
      </form>

      {/* Download Instructions */}
      <div className="text-center mt-12">
        <h2
          className="mb-4"
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "19.5px",
            letterSpacing: "2px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#000000"
          }}
        >
          SEBELUM MELAKUKAN PENDAFTARAN
          <br />
          SILAHKAN DOWNLOAD FILE BERIKUT:
        </h2>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "19.5px",
            letterSpacing: "2px",
            textAlign: "center",
            textDecorationStyle: "solid",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "auto",
            color: "#000000"
          }}
        >
          PANDUAN PENDAFTARAN{" "}
          <a
            href="https://drive.google.com/file/d/1gy8hxPCbHoX0zY6RVNWmqjhw0WJf5fRb/view?usp=sharing"
            className="text-blue-600 font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            DISINI
          </a>
        </p>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "19.5px",
            letterSpacing: "2px",
            textAlign: "center",
            textDecorationStyle: "solid",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "auto",
            color: "#000000"
          }}
        >
          TEMPLATE SURAT{" "}
          <a
            href="https://docs.google.com/document/d/1uNQ6AOttmc2Wz91XZCJVn2uyxw0PPCrl/edit?usp=sharing&ouid=109776342437564163399&rtpof=true&sd=true"
            className="text-blue-600 font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            DISINI
          </a>
        </p>
      </div>
    </div>
  );
};
