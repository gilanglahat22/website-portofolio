"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MacOSWindow from '@/components/MacOSWindow';
import AppleDock from '@/components/AppleDock';

interface PhotoCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
    photos: string[];
}

interface GalleryClientProps {
    gilangCategories: PhotoCategory[];
    wfcCategory: PhotoCategory;
    allGilangPhotos: string[];
}

const GalleryClient: React.FC<GalleryClientProps> = ({
    gilangCategories,
    wfcCategory,
    allGilangPhotos
}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentFolder, setCurrentFolder] = useState<string>('Gilang_Photos');
    const [activeTab, setActiveTab] = useState<'gilang' | 'wfc'>('gilang');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get all photos for current view
    const getCurrentPhotos = () => {
        if (activeTab === 'wfc') return wfcCategory.photos;
        if (selectedCategory) {
            const cat = gilangCategories.find(c => c.id === selectedCategory);
            return cat?.photos || [];
        }
        return allGilangPhotos;
    };

    const currentPhotos = getCurrentPhotos();

    const openLightbox = (image: string, index: number, folder: string) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setCurrentFolder(folder);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const photos = currentPhotos;
        const newIndex = (currentIndex + 1) % photos.length;
        setCurrentIndex(newIndex);
        setSelectedImage(photos[newIndex]);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const photos = currentPhotos;
        const newIndex = (currentIndex - 1 + photos.length) % photos.length;
        setCurrentIndex(newIndex);
        setSelectedImage(photos[newIndex]);
    };

    const renderPhotoGrid = (photos: string[], folder: string) => (
        <motion.div
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 },
                },
            }}
        >
            {photos.map((image, index) => (
                <motion.div
                    key={`${folder}-${index}`}
                    className="break-inside-avoid relative overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openLightbox(image, index, folder)}
                >
                    <div className="relative w-full">
                        <Image
                            src={`/${folder}/${image}`}
                            alt={`Gallery Photo ${index + 1}`}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <div className="min-h-screen">
            <main className="pt-8 px-4 sm:px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    <MacOSWindow title="Career Gallery" variant="system" className="min-h-[80vh]">
                        {/* Main Tabs */}
                        <div className="flex border-b border-neutral-300 dark:border-neutral-600 mb-6">
                            <button
                                onClick={() => { setActiveTab('gilang'); setSelectedCategory(null); }}
                                className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'gilang'
                                    ? 'border-blue-500'
                                    : 'border-transparent hover:border-neutral-400'
                                    }`}
                                style={{ color: activeTab === 'gilang' ? '#60a5fa' : '#ffffff' }}
                            >
                                👤 Career Photos
                                <span
                                    className="px-2 py-0.5 text-xs font-bold rounded-full"
                                    style={{ backgroundColor: '#1e3a5f', color: '#93c5fd' }}
                                >
                                    {allGilangPhotos.length}
                                </span>
                            </button>
                            <button
                                onClick={() => { setActiveTab('wfc'); setSelectedCategory(null); }}
                                className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'wfc'
                                    ? 'border-blue-500'
                                    : 'border-transparent hover:border-neutral-400'
                                    }`}
                                style={{ color: activeTab === 'wfc' ? '#60a5fa' : '#ffffff' }}
                            >
                                ☕ Remote Engineering
                                <span
                                    className="px-2 py-0.5 text-xs font-bold rounded-full"
                                    style={{ backgroundColor: '#5c3c1b', color: '#fcd34d' }}
                                >
                                    {wfcCategory.photos.length}
                                </span>
                            </button>
                        </div>

                        {activeTab === 'gilang' ? (
                            <>
                                {/* Category Pills */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedCategory(null)}
                                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === null
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-white dark:bg-neutral-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 border-2 border-gray-300 dark:border-neutral-500 shadow-sm'
                                                }`}
                                            style={{ color: selectedCategory === null ? 'white' : undefined }}
                                        >
                                            📷 All Photos ({allGilangPhotos.length})
                                        </button>
                                        {gilangCategories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === category.id
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'bg-white dark:bg-neutral-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 border-2 border-gray-300 dark:border-neutral-500 shadow-sm'
                                                    }`}
                                                style={{ color: selectedCategory === category.id ? 'white' : undefined }}
                                            >
                                                {category.icon} {category.name} ({category.photos.length})
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Selected Category Header */}
                                {selectedCategory && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-slate-800 rounded-xl border border-slate-600"
                                    >
                                        <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                                            {gilangCategories.find(c => c.id === selectedCategory)?.icon}
                                            {gilangCategories.find(c => c.id === selectedCategory)?.name}
                                        </h2>
                                        <p className="text-sm mt-1 text-slate-300">
                                            {gilangCategories.find(c => c.id === selectedCategory)?.description}
                                        </p>
                                    </motion.div>
                                )}

                                {/* Photo Grid */}
                                {selectedCategory ? (
                                    renderPhotoGrid(
                                        gilangCategories.find(c => c.id === selectedCategory)?.photos || [],
                                        'Gilang_Photos'
                                    )
                                ) : (
                                    // Show all categories as sections
                                    <div className="space-y-10">
                                        {gilangCategories.map((category) => (
                                            <div key={category.id}>
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3
                                                        className="text-lg font-bold flex items-center gap-2"
                                                        style={{ color: '#ffffff' }}
                                                    >
                                                        <span>{category.icon}</span>
                                                        {category.name}
                                                        <span
                                                            className="text-sm font-normal"
                                                            style={{ color: '#aaaaaa' }}
                                                        >
                                                            ({category.photos.length} photos)
                                                        </span>
                                                    </h3>
                                                    <button
                                                        onClick={() => setSelectedCategory(category.id)}
                                                        className="text-sm font-semibold"
                                                        style={{ color: '#60a5fa' }}
                                                    >
                                                        View all →
                                                    </button>
                                                </div>
                                                <p
                                                    className="text-sm mb-4"
                                                    style={{ color: '#bbbbbb' }}
                                                >
                                                    {category.description}
                                                </p>
                                                {renderPhotoGrid(category.photos.slice(0, 4), 'Gilang_Photos')}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            // Remote engineering tab
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-amber-900 rounded-xl border border-amber-700"
                                >
                                    <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                                        ☕ Remote Engineering
                                    </h2>
                                    <p className="text-sm mt-1 text-amber-200">
                                        Remote work and focused engineering moments
                                    </p>
                                </motion.div>

                                {wfcCategory.photos.length > 0 ? (
                                    renderPhotoGrid(wfcCategory.photos, 'WFC')
                                ) : (
                                    <div className="flex flex-col items-center justify-center p-20 text-center opacity-60">
                                        <span className="text-5xl mb-4">☕</span>
                                        <p className="text-xl font-medium">No remote-work photos found</p>
                                        <p className="text-sm mt-2">Add JPEG/PNG images to public/WFC to see them here.</p>
                                    </div>
                                )}
                            </>
                        )}

                        {allGilangPhotos.length === 0 && activeTab === 'gilang' && (
                            <div className="flex flex-col items-center justify-center p-20 text-center opacity-60">
                                <span className="text-5xl mb-4">📷</span>
                                <p className="text-xl font-medium">No photos found</p>
                                <p className="text-sm mt-2">Add images to public/Gilang_Photos to see them here.</p>
                            </div>
                        )}
                    </MacOSWindow>
                </div>
            </main>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-50 focus:outline-none"
                            onClick={closeLightbox}
                        >
                            <IoClose />
                        </button>

                        {/* Image counter */}
                        <div className="absolute top-6 left-6 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                            {currentIndex + 1} / {currentPhotos.length}
                        </div>

                        {/* Previous button */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors p-3 bg-black/30 rounded-full hover:bg-black/50"
                            onClick={prevImage}
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Image container */}
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
                                    src={`/${currentFolder}/${selectedImage}`}
                                    alt="Full Details"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Next button */}
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors p-3 bg-black/30 rounded-full hover:bg-black/50"
                            onClick={nextImage}
                        >
                            <FaChevronRight />
                        </button>

                        {/* Thumbnail strip */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] p-2 bg-black/50 rounded-lg">
                            {currentPhotos.slice(0, 10).map((photo, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(idx);
                                        setSelectedImage(photo);
                                    }}
                                    className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden transition-all ${idx === currentIndex ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <Image
                                        src={`/${currentFolder}/${photo}`}
                                        alt={`Thumbnail ${idx + 1}`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                            {currentPhotos.length > 10 && (
                                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-white/20 flex items-center justify-center text-white text-xs">
                                    +{currentPhotos.length - 10}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AppleDock />
        </div>
    );
};

export default GalleryClient;
