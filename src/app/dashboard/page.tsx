"use client";

import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { faUser, faTrophy, faImage } from "@fortawesome/free-solid-svg-icons"; // Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuNavbar from "../../components/MenuNavbar";
// import Footer from '../../components/Footer';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Box, Typography, Button } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import ModalPopup from "@/components/ModalPopup";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import ImageSlider from "@/components/ImageSlider";
import { FooterCopyright } from "@/components/FooterCopyright";
import Image from "next/image";
import Link from "next/link";
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';

const imageGroups: { [key: string]: string[] } = {
  2023: ["/cover_2023.webp", "/2023_1.webp", "/2023_2.webp", "/2023_3.webp", "/2023_4.webp", "/2023_5.webp",
    "/2023_6.webp", "/2023_7.webp", "/2023_8.webp"
  ],
  2022: ["/cover_2022.webp", "/2022_1.webp", "/2022_2.webp", "/2022_3.webp", "/2022_4.webp", "/2022_5.webp",
    "/2022_6.webp", "/2022_7.webp", "/2022_8.webp", "/2022_9.webp", "/2022_10.webp", "/2022_11.webp", "/2022_12.webp",
    "/2022_13.webp", "/2022_14.webp", "/2022_15.webp", "/2022_16.webp", "/2022_17.webp",
   ],
  2018: ["/cover_2018.webp", "/2018_1.webp", "/2018_2.webp"],
  2017: ["/cover_2017.webp", "/2017_1.webp", "/2017_2.webp", "/2017_3.webp", "/2017_4.webp", "/2017_5.webp", 
    "/2017_6.webp", "/2017_7.webp", "/2017_8.webp", "/2017_9.webp", "/2017_10.webp", "/2017_11.webp"
  ],
  2016: ["/cover_2016.webp", "/2016_1.webp", "/2016_2.webp"],
};

function GallerySection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [sliderOpen, setSliderOpen] = useState(false);

  const handleImageClick = (year: string) => {
    setSelectedYear(year);
    setSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setSliderOpen(false);
    setSelectedYear(null);
  };

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
          body {
            font-family: 'Poppins';
          }
        `}
      </style>
      <Box
        sx={{
          padding: "50px 20px", // Reduce the padding
          backgroundColor: "#FFFFFF",
          margin: "0 auto", // Posisi di tengah halaman
          maxWidth: "800px", // Set a maximum width for the container
          marginTop: isMobile ? "-350px" : "0px",
          scale: isMobile ? 0.75 : 1,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          marginBottom="30px" // Reduce the margin bottom
          color="#042043"
        >
          Kilas Balik
          <br />
          Pemilihan Putera Puteri Maritim Indonesia
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", // 1 column for mobile, 2 columns for desktop
            justifyContent: "center",
            gap: "30px 35px", // Slightly increase the gap between the columns
          }}
        >
          {Object.keys(imageGroups)
            .sort((a, b) => parseInt(b) - parseInt(a)) // Urutkan dari tahun terbaru
            .map((year, index, array) => (
              <Box
                key={year}
                onClick={() => handleImageClick(year)}
                sx={{
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  gridColumn:
                    !isMobile &&
                    array.length % 2 !== 0 &&
                    index === array.length - 1
                      ? "span 2"
                      : "auto", // Span 2 for the last item in an odd row on desktop
                  justifySelf:
                    !isMobile &&
                    array.length % 2 !== 0 &&
                    index === array.length - 1
                      ? "center"
                      : "auto", // Center the last item in an odd row on desktop
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    width: "420.74px",
                    height: "420.74px",
                    margin: "0 auto", // Center the box
                    position: "relative", // Ensure the image covers the box
                  }}
                >
                  <img
                    src={imageGroups[year][0]}
                    alt={`Event ${year}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      objectFit: "cover", // Ensure the image covers the box
                      objectPosition: "center", // Center the image within the box
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  fontSize={30}
                  mt={1.5}
                  color="#042043"
                  textAlign="center" // Center the caption text
                >
                  {year}
                </Typography>
              </Box>
            ))}
        </Box>

        {selectedYear && (
          <ImageSlider
            images={imageGroups[selectedYear]}
            open={sliderOpen}
            onClose={handleCloseSlider}
          />
        )}
      </Box>
    </div>
  );
}

interface SupporterLogo {
  name: string;
  imageUrl: string;
  alt: string;
}

interface OrganizationSupportProps {
  organizer: {
    name: string;
    logoUrl: string;
  };
  supporters: SupporterLogo[];
}

// Improved TikTok Icon Component
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);


interface FooterProps {
  isMobile: boolean;
}
const Footer: React.FC<FooterProps> = ({
  isMobile
}) => {
  return (
    <footer className="w-full bg-white"
      style={{
        marginTop: isMobile ? -70 : 80,
      }}
      >
      
      {/* Sponsor Section */}
      <div className="mb-12">
        <h2
          className="text-3xl font-bold mb-8" style={{ color: "#042043" }}
        >
          SPONSOR
        </h2>
        <div
          className="flex justify-center items-center gap-16 pt-6 pl-2 pr-1"
          style={{ flexWrap: "nowrap" }}
        >
          <div key={"inez"} className="w-44 h-44 md:w-62 md:h-62 relative">
            <img
              src={`/logo_inez.webp`}
              alt={`Logo Inez`}
              className="w-full h-full object-contain"
            />
          </div>

          <div key={"aqua"} className="w-28 h-28 md:w-28 md:h-28 relative">
            <img
              src={`/logo_aqua.webp`}
              alt={`Logo Aqua`}
              className="w-full h-full object-contain"
            />
          </div>

          <div key={"samudera"} className="w-44 h-44 md:w-68 md:h-68 relative">
            <img
              src={`/Samudera_Peduli.png`}
              alt={`Logo Aqua`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Red Border */}
      <div className="border-t-8 border-red-500 my-8 w-full"></div>

      <div className="max-full mx-auto px-0 py-8">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#042043" }}>
            Contact us:
          </h2>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-red-500 font-medium">Vryzas</p>
              <p className="text-lg text-black">0821-6888-4114</p>
            </div>
            <div>
              <p className="text-red-500 font-medium">Monic</p>
              <p className="text-lg text-black">0813-4176-7897</p>
            </div>
            <p className="text-lg text-black">puteraputerimaritim@gmail.com</p>
          </div>
          <p className="text-sm max-w-2xl mx-auto text-black">
            Sekretariat Panitia Pemilihan Putera-Puteri Maritim Indonesia Tahun
            2025 di Jl. Palem Kartika No 6. Bambu Apus, Cipayung, Jakarta
            Timur.13890.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Our Social Media
          </h2>
          <div className="flex justify-center space-x-8">
            <a href="https://www.instagram.com/ppmaritimindonesia?igsh=eWQ5MGdtN3Q5MWt2" className="text-black hover:text-black">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@ppmaritimindonesia?_t=8s0fjwA3xL8&_r=1" className="text-black hover:text-black">
              <TikTokIcon size={24} />
            </a>
            <a href="https://www.youtube.com/@puteraputerimaritimindonesia" className="text-black hover:text-black">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Red Border */}
        <div className="border-t-8 border-red-500 my-8 w-full"></div>

        <FooterCopyright></FooterCopyright>
      </div>
    </footer>
  );
};

const OrganizationSupport: React.FC<OrganizationSupportProps> = ({
  organizer,
  supporters,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="w-full">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
        `}
      </style>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Organizer Section */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl font-bold text-black mb-8"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "33px" : "43px",
              fontWeight: 500,
              lineHeight: "48px",
              color: "#042043",
            }}
          >
            Diselenggarakan Oleh
          </h2>
          <div className="flex justify-center">
            <div className="w-32 h-32 relative">
              <img
                src={organizer.logoUrl}
                alt={organizer.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Supporters Section */}
        <div className="text-center">
          <h2
            className="text-2xl font-bold text-black mb-8"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "33px" : "43px",
              fontWeight: 500,
              lineHeight: "48px",
              color: "#042043",
            }}
          >
            Didukung Oleh
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {supporters.map((supporter, index) => (
              <div key={index} className="w-24 h-24 md:w-32 md:h-32 relative">
                <img
                  src={supporter.imageUrl}
                  alt={supporter.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
const StatCard = ({ title, value, change, icon }) => {
  return (
    // @ts-ignore
    <div className="bg-white rounded-xl p-5 shadow-md">
      {/* @ts-ignore */}
      <div className="flex justify-between items-start mb-4">
        {/* @ts-ignore */}
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {/* @ts-ignore */}
        <div className={`text-xs font-medium px-2 py-1 rounded-full ${change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      </div>
      {/* @ts-ignore */}
      <div className="flex items-end space-x-2">
        {/* @ts-ignore */}
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {/* @ts-ignore */}
        <div className="text-blue-500 h-8 w-8 mb-1">{icon}</div>
      </div>
    </div>
  );
};

// @ts-ignore
const BarChart = () => {
  const data = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 59 },
    { month: 'Mar', value: 80 },
    { month: 'Apr', value: 81 },
    { month: 'May', value: 56 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 40 },
  ];
  
  const max = Math.max(...data.map(item => item.value));
  
  return (
    // @ts-ignore
    <div className="h-64 flex items-end space-x-2">
      {data.map((item, index) => (
        // @ts-ignore
        <div key={index} className="flex-1 flex flex-col items-center">
          {/* @ts-ignore */}
          <div 
            className="w-full bg-blue-500 rounded-t-md transition-all duration-500 ease-in-out hover:bg-blue-600"
            style={{ height: `${(item.value / max) * 100}%` }}
          ></div>
          {/* @ts-ignore */}
          <div className="text-xs text-gray-500 mt-2">{item.month}</div>
        </div>
      ))}
    </div>
  );
};

// @ts-ignore
const LineChart = () => {
  const data = [
    { day: 'Mon', visitors: 120 },
    { day: 'Tue', visitors: 150 },
    { day: 'Wed', visitors: 200 },
    { day: 'Thu', visitors: 180 },
    { day: 'Fri', visitors: 250 },
    { day: 'Sat', visitors: 280 },
    { day: 'Sun', visitors: 300 },
  ];
  
  const max = Math.max(...data.map(item => item.visitors));
  const min = Math.min(...data.map(item => item.visitors));
  const range = max - min;
  
  const points = data.map((item, index) => {
    const x = index * (100 / (data.length - 1));
    const y = 100 - ((item.visitors - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    // @ts-ignore
    <div className="relative h-64 w-full">
      {/* @ts-ignore */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(y => (
          // @ts-ignore
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="#e5e7eb"
            strokeWidth="0.5"
          />
        ))}
        
        {/* Line */}
        {/* @ts-ignore */}
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          points={points}
        />
        
        {/* Area under the line */}
        {/* @ts-ignore */}
        <polyline
          fill="rgba(59, 130, 246, 0.1)"
          stroke="none"
          points={`0,100 ${points} 100,100`}
        />
        
        {/* Data points */}
        {data.map((item, index) => {
          const x = index * (100 / (data.length - 1));
          const y = 100 - ((item.visitors - min) / range) * 100;
          return (
            // @ts-ignore
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1.5"
              fill="#3b82f6"
              stroke="#fff"
              strokeWidth="1"
            />
          );
        })}
      </svg>
      
      {/* X-axis labels */}
      {/* @ts-ignore */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
        {data.map((item, index) => (
          // @ts-ignore
          <div key={index} className="text-xs text-gray-500">{item.day}</div>
        ))}
      </div>
    </div>
  );
};

// @ts-ignore
const DonutChart = () => {
  const data = [
    { label: 'Desktop', value: 45, color: '#3b82f6' },
    { label: 'Mobile', value: 35, color: '#10b981' },
    { label: 'Tablet', value: 20, color: '#f59e0b' },
  ];
  
  // Calculate the circumference of the circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the starting position and length of each arc
  let currentOffset = 0;
  const arcs = data.map(item => {
    const percentage = item.value / 100;
    const arcLength = percentage * circumference;
    
    const arc = {
      offset: currentOffset,
      length: arcLength,
      color: item.color,
      label: item.label,
      value: item.value
    };
    
    currentOffset += arcLength;
    return arc;
  });
  
  return (
    // @ts-ignore
    <div className="flex flex-col items-center justify-center h-64">
      {/* @ts-ignore */}
      <div className="relative w-40 h-40">
        {/* @ts-ignore */}
        <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
          {arcs.map((arc, index) => (
            // @ts-ignore
            <circle
              key={index}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={arc.color}
              strokeWidth="15"
              strokeDasharray={`${arc.length} ${circumference - arc.length}`}
              strokeDashoffset={-arc.offset}
              className="transition-all duration-500 ease-in-out"
            />
          ))}
          {/* Empty center */}
          {/* @ts-ignore */}
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="white"
          />
        </svg>
      </div>
      
      {/* Legend */}
      {/* @ts-ignore */}
      <div className="flex justify-center mt-4 space-x-4">
        {data.map((item, index) => (
          // @ts-ignore
          <div key={index} className="flex items-center">
            {/* @ts-ignore */}
            <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
            {/* @ts-ignore */}
            <span className="text-xs text-gray-600">{item.label} ({item.value}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// @ts-ignore
export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-8 px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <MacOSWindow title="Dashboard" variant="dark">
            {/* @ts-ignore */}
            <div className="space-y-4">
              {/* @ts-ignore */}
              <div className="flex justify-between items-center">
                {/* @ts-ignore */}
                <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
                
                {/* Time period selector */}
                {/* @ts-ignore */}
                <div className="inline-flex p-1 rounded-xl bg-gray-800">
                  {['day', 'week', 'month', 'year'].map(period => (
                    // @ts-ignore
                    <button
                      key={period}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${selectedPeriod === period ? 'bg-gray-700 shadow-sm text-white' : 'text-gray-400 hover:text-gray-300'}`}
                      onClick={() => setSelectedPeriod(period)}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* @ts-ignore */}
              <p className="text-gray-300">
                Overview of your website performance and user engagement metrics.
              </p>
            </div>
          </MacOSWindow>
          
          {/* Stats Cards */}
          {/* @ts-ignore */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Total Visitors" 
              value="1,290" 
              change={12.5}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              } 
            />
            <StatCard 
              title="Page Views" 
              value="5,432" 
              change={8.2}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              } 
            />
            <StatCard 
              title="Conversion Rate" 
              value="3.2%" 
              change={-0.8}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              } 
            />
            <StatCard 
              title="Avg. Session" 
              value="4m 32s" 
              change={5.1}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } 
            />
          </div>
          
          {/* Charts */}
          {/* @ts-ignore */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MacOSWindow title="Visitors Overview" variant="system">
              <LineChart />
            </MacOSWindow>
            
            <MacOSWindow title="Monthly Pageviews" variant="system">
              <BarChart />
            </MacOSWindow>
          </div>
          
          {/* Additional stats */}
          {/* @ts-ignore */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MacOSWindow title="Device Distribution" variant="system">
              <DonutChart />
            </MacOSWindow>
            
            <MacOSWindow title="Top Pages" variant="system" className="lg:col-span-2">
              {/* @ts-ignore */}
              <div className="overflow-x-auto">
                {/* @ts-ignore */}
                <table className="min-w-full">
                  {/* @ts-ignore */}
                  <thead>
                    {/* @ts-ignore */}
                    <tr className="border-b border-gray-200">
                      {/* @ts-ignore */}
                      <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                      {/* @ts-ignore */}
                      <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                      {/* @ts-ignore */}
                      <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bounce Rate</th>
                      {/* @ts-ignore */}
                      <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Time</th>
                    </tr>
                  </thead>
                  {/* @ts-ignore */}
                  <tbody>
                    {[
                      { page: '/', views: 1243, bounce: '32%', time: '2m 10s' },
                      { page: '/blog', views: 857, bounce: '45%', time: '3m 24s' },
                      { page: '/projects', views: 649, bounce: '28%', time: '1m 50s' },
                      { page: '/contact', views: 422, bounce: '60%', time: '1m 05s' },
                      { page: '/about', views: 390, bounce: '22%', time: '2m 40s' },
                    ].map((row, index) => (
                      // @ts-ignore
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        {/* @ts-ignore */}
                        <td className="px-5 py-4 text-sm text-gray-900">{row.page}</td>
                        {/* @ts-ignore */}
                        <td className="px-5 py-4 text-sm text-gray-900">{row.views}</td>
                        {/* @ts-ignore */}
                        <td className="px-5 py-4 text-sm text-gray-900">{row.bounce}</td>
                        {/* @ts-ignore */}
                        <td className="px-5 py-4 text-sm text-gray-900">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MacOSWindow>
          </div>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
}
