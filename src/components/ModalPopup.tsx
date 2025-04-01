import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
}

const ModalPopup: React.FC<ModalPopupProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
        style={{scale: isMobile ? 0.468 : 0.9}}>
      <div className="relative bg-white rounded-lg shadow-lg p-1 w-full max-w-2xl">
        {/* Close Button */}
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title Section */}
        <h2
          className="text-3xl font-bold mb-4"
          style={{
            fontFamily: "Poppins",
            color: "black",
            textAlign: "left",
            fontSize: "32px",
          }}
        >
          {title}
        </h2>

        {/* Content Section */}
        <div
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "Poppins",
            fontSize: "13px",
            color: "#042043",
            textAlign: "justify",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
