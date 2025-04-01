"use client";

import { useState } from "react";
import menuItems from "../../menu_data.json";
import { MenuItem } from "../models/MenuItem";
import Link from "next/link"; // Import Link component from Next.js

const MenuNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white p-0 relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
        `}
      </style>
      <div
        className="container mx-auto flex items-center justify-between"
        style={{ height: 120 }}
      >
        {/* Your Logo Image */}
        <div className="relative h-full flex flex-row items-center flex-wrap sm:flex-nowrap">
          {/* Gambar */}
          <img
            src={"./logo_utama.webp"}
            alt="Your Logo"
            className="object-contain h-24 w-24 sm:h-full sm:w-auto"
          />
          {/* Teks */}
          <div
            className="ml-4 flex flex-col text-[#042043] text-left"
            style={{
              width: "calc(100% - 6rem)", // Menghindari tumpang tindih dengan gambar di mobile
              maxWidth: "40%",
            }}
          >
            <h3 className="font-zen-antique text-[19px] lg:text-[26px] font-normal leading-[26px] lg:leading-[31.2px]">
              Paguyuban Putera Puteri Maritim Indonesia
            </h3>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-8"
          style={{ marginTop: "2px", color: "#162E50" }}
        >
          {menuItems.map((item: MenuItem) => (
            <li key={item.id}>
              {item.isHaveContainer ? (
                <div
                  style={{
                    backgroundColor: "#042043",
                    borderRadius: 10,
                    paddingTop: 16,
                    paddingRight: 32,
                    paddingLeft: 32,
                    paddingBottom: 16,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <Link
                    href={item.link}
                    className="hover:text-[rgba(104,87,46,1)] hover:transition-all duration-300 font-Poppins-bold"
                    style={{
                      fontWeight: 900,
                      fontSize: "140%",
                      color: item.color,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              ) : (
                <div
                  style={{
                    borderRadius: 10,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingLeft: 16,
                    paddingBottom: 16,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <Link
                    href={item.link}
                    className="hover:text-[rgba(104,87,46,1)] hover:transition-all duration-300 font-Poppins-bold"
                    style={{
                      fontWeight: 900,
                      fontSize: "140%",
                      color: item.color,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#162E50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Full-Screen Popup Menu (Visible on Smaller Screens) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-gradient-to-b from-[#081422] to-[#162E50] bg-opacity-90 flex flex-col items-center justify-center z-50 font-cinzel-decorative-bold md:hidden"
            style={{ background: "white" }}
            onClick={toggleMenu}
          >
            <ul className="space-y-8 text-xl" style={{ color: "#162E50", fontFamily: "'Poppins', sans-serif"  }}>
              {menuItems.map((item: MenuItem) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <div
                      className="hover:text-white font-bold transition-colors duration-300"
                      onClick={toggleMenu} // Close menu on click for mobile
                    >
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuNavbar;
