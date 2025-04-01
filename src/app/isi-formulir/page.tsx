"use client";

import FormSendData from "../../components/SendDataForm";
import MenuNavbar from "../../components/MenuNavbar";
import { FooterCopyright } from "@/components/FooterCopyright";

export default function CekDataPage() {
  return (
    <div
      className="flex flex-col text-center min-h-screen"
      style={{
        background: "#FAFAFA",
      }}
    >
      <div
        className="flex flex-col items-center mt-3"
        style={{
          width: "100%",
        }}
      >
        {/* Navbar */}
        <div
          className="animate-fade-in"
          style={{
            width: "100%", // Match the width of the content section
            maxWidth: "90vw",
            margin: "0 auto", // Center align
          }}
        >
          <MenuNavbar />
        </div>
      </div>
      <div
        className="isolate bg-white px-0 py-1 sm:py-3 lg:px-0 min-h-screen"
        style={{
          background: "#FAFAFA",
        }}
      >
        <FormSendData></FormSendData>
      </div>
      <footer className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <FooterCopyright></FooterCopyright>
        </div>
      </footer>
    </div>
  );
}
