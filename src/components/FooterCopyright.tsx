import { Instagram, Youtube, Linkedin } from "lucide-react";

export const FooterCopyright = () => {
  return (
  <div className="flex flex-col md:flex-row justify-between items-center pt-6 px-6 md:px-10 space-y-4 md:space-y-0">
    {/* Left Section */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div
        className="text-lg font-bold text-black mb-1"
        style={{ fontSize: 27 }}
      >
        FELINE LAB.
      </div>
      <div className="text-sm text-gray-600 pt-2 md:pt-0">
        Copyright © Pemilihan Putera Puteri Maritim 2025 Powered by Feline Lab.
      </div>
    </div>

    {/* Right Section (Social Icons) */}
    <div className="flex justify-center space-x-4">
      <a
        href="#"
        className="text-gray-600 hover:text-gray-800 transition duration-200"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-gray-800 transition duration-200"
      >
        <Instagram size={20} />
      </a>
    </div>
  </div>
  );
};
