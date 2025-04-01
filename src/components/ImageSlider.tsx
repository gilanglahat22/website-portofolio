import React, { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSwipeable } from "react-swipeable";

interface ImageSliderProps {
  images: string[];
  open: boolean;
  onClose: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, open, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex(getNextIndex()),
    onSwipedRight: () => setCurrentIndex(getPrevIndex()),
    trackMouse: true, // Allows swipe gestures with the mouse as well
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.85)", // Background hitam transparan
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        {...swipeHandlers} // Add swipe functionality here
      >
        {/* Close Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "white",
            zIndex: 10,
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{ fontSize: 35 }} />
        </IconButton>

        {/* Slider Container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            position: "relative",
            maxWidth: "1400px",
            width: "90%",
          }}
        >
          {/* Previous Slide */}
          <Box
            onClick={() => handleImageClick(getPrevIndex())}
            sx={{
              width: "40%",
              height: "75%",
              opacity: 0.5,
              transform: "translateX(-35%) scale(0.95)",
              borderRadius: "60px",
              overflow: "hidden",
              cursor: "pointer",
              position: "absolute",
              left: "3%",
              transition: "transform 0.4s ease-in-out",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.6)",
            }}
          >
            <img
              src={images[getPrevIndex()]}
              alt="Previous"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Current Slide */}
          <Box
            sx={{
              width: "90%",
              borderRadius: "60px",
              overflow: "hidden",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.9)",
              zIndex: 5,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Next Slide */}
          <Box
            onClick={() => handleImageClick(getNextIndex())}
            sx={{
              width: "40%",
              height: "75%",
              opacity: 0.5,
              transform: "translateX(35%) scale(0.95)",
              borderRadius: "60px",
              overflow: "hidden",
              cursor: "pointer",
              position: "absolute",
              right: "3%",
              transition: "transform 0.4s ease-in-out",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.6)",
            }}
          >
            <img
              src={images[getNextIndex()]}
              alt="Next"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageSlider;
