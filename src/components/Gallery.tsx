"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MacOSWindow from '@/components/MacOSWindow';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="w-full h-full">
      <MacOSWindow title="Gallery" variant="system" className="min-h-[80vh]">
        <motion.div
           className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-3 space-y-3 p-2"
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0 },
             visible: {
               opacity: 1,
               transition: {
                 staggerChildren: 0.1,
               },
             },
           }}
         >
           {images.map((image, index) => (
             <motion.div
               key={index}
               className="break-inside-avoid relative overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
               variants={{
                 hidden: { opacity: 0, y: 50 },
                 visible: { opacity: 1, y: 0 },
               }}
               whileHover={{ scale: 1.02 }}
               onClick={() => openLightbox(image, index)}
             >
               <div className="relative w-full">
                 <Image
                   src={`/Gilang_Photos/${image}`}
                   alt={`Gallery Photo ${index + 1}`}
                   width={500}
                   height={500}
                   className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   placeholder="blur"
                   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
               </div>
             </motion.div>
           ))}
         </motion.div>

         {images.length === 0 && (
            <div className="flex flex-col items-center justify-center p-20 text-center opacity-60">
               <p className="text-xl font-medium">No photos found</p>
               <p className="text-sm">Add images to public/Gilang_Photos to see them here.</p>
            </div>
         )}
      </MacOSWindow>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-50 focus:outline-none"
              onClick={closeLightbox}
            >
              <IoClose />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors hidden sm:block p-2"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>

            <div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={`/Gilang_Photos/${selectedImage}`}
                  alt="Full Details"
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </motion.div>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors hidden sm:block p-2"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
