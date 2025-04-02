"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export default function VerificationSuccess() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5); // Hitung mundur dimulai dari 5 detik
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1); // Mengurangi hitung mundur 1 setiap detik
    }, 1000);

    // Arahkan ke halaman utama ketika hitung mundur mencapai 0
    if (countdown === 0) {
      router.push("/");
    }

    return () => clearInterval(interval); // Bersihkan interval saat komponen dibuang
  }, [countdown, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card rounded-lg shadow-lg p-8 max-w-md text-center">
        <h2 className="text-2xl font-semibold">
          Verifikasi Email Berhasil!
        </h2>
        <p className="mt-4">
          Terima kasih telah memverifikasi email Anda. Anda akan diarahkan ke
          halaman utama dalam{" "}
          <span className="font-bold">
            {countdown}
          </span>{" "}
          detik.
        </p>
        <div className="mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
