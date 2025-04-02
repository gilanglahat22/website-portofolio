"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export default function AlreadyVerified() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5); // Hitung mundur dimulai dari 5 detik
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1); // Mengurangi hitung mundur setiap detik
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
          Email Sudah Diverifikasi
        </h2>
        <p className="mt-4">
          Email Anda sudah diverifikasi. Anda akan diarahkan ke halaman utama
          dalam{" "}
          <span className="font-bold">
            {countdown}
          </span>{" "}
          detik.
        </p>
        <div className="mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01m-6.938 4h13.856c1.507 0 2.845-1.08 3.155-2.571l1.342-6.71c.253-1.267-.75-2.571-2.07-2.571H5.614c-1.32 0-2.323 1.304-2.07 2.571l1.342 6.71C3.177 18.92 4.515 20 6.022 20z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
