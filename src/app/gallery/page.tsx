import React from 'react';
import fs from 'fs';
import path from 'path';
import GalleryClient from '@/components/GalleryClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Gilang Portfolio',
  description: 'A collection of photos and moments - personal, professional, and sports.',
};

interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  photos: string[];
}

const GalleryPage = () => {
  const gilangPhotosDir = path.join(process.cwd(), 'public', 'Gilang_Photos');
  const wfcDir = path.join(process.cwd(), 'public', 'WFC');

  let gilangImages: string[] = [];
  let wfcImages: string[] = [];

  try {
    const gilangFiles = fs.readdirSync(gilangPhotosDir);
    gilangImages = gilangFiles.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
  } catch (error) {
    console.error("Error reading Gilang_Photos directory:", error);
  }

  try {
    const wfcFiles = fs.readdirSync(wfcDir);
    // Only include web-compatible image formats
    wfcImages = wfcFiles.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
  } catch (error) {
    console.error("Error reading WFC directory:", error);
  }

  // Categorize Gilang photos based on content analysis
  // Categories: Campus/ITB, Work/Professional, Sports, Casual/Lifestyle
  const categorizeGilangPhotos = (images: string[]): PhotoCategory[] => {
    const categories: PhotoCategory[] = [
      {
        id: 'campus',
        name: 'Campus & ITB',
        description: 'Moments at Bandung Institute of Technology',
        icon: '🎓',
        photos: []
      },
      {
        id: 'sports',
        name: 'Sports & Activities',
        description: 'Football, futsal, and sports moments',
        icon: '⚽',
        photos: []
      }
    ];

    // Manual categorization based on photo analysis
    const categoryMap: { [key: string]: string } = {
      // Campus/ITB photos
      'IMG_0017.JPG': 'campus', // ITB landmark photocampus
      'WhatsApp Image 2025-12-26 at 14.25.28.jpeg': 'campus',
      'WhatsApp Image 2025-12-26 at 14.25.40.jpeg': 'campus',
      'WhatsApp Image 2025-12-26 at 14.53.07.jpeg': 'campus',
      'WhatsApp Image 2026-01-16 at 01.10.15 (1).jpeg': 'campus', // ITB formal/graduation

      // Sports
      'FullSizeRender.JPG': 'sports', // Football field
      '165cd958-8913-40bc-a411-54396a22f94d.JPG': 'sports', // Futsal/football
      '4c03aee2-70f1-4396-afdb-6f8f25708bc3.JPG': 'sports', // Sports
      'WhatsApp Image 2026-01-16 at 00.59.31.jpeg': 'sports',
      'WhatsApp Image 2026-01-16 at 00.59.51.jpeg': 'sports',
      'WhatsApp Image 2025-12-26 at 14.24.08 (2).jpeg': 'sports', // Mirror selfie
      'WhatsApp Image 2026-01-16 at 11.51.34.jpeg': 'sports', // Startup hub team
      'WhatsApp Image 2025-12-26 at 14.24.54.jpeg': 'sports', // Formal attire
    };

    images.forEach(image => {
      const category = categoryMap[image] || 'casual'; // Default to casual
      const cat = categories.find(c => c.id === category);
      if (cat) {
        cat.photos.push(image);
      }
    });

    // Filter out empty categories
    return categories.filter(cat => cat.photos.length > 0);
  };

  const gilangCategories = categorizeGilangPhotos(gilangImages);

  // WFC category
  const wfcCategory: PhotoCategory = {
    id: 'wfc',
    name: 'WFC Collection',
    description: 'Work From Cafe and remote work moments',
    icon: '☕',
    photos: wfcImages
  };

  return (
    <GalleryClient
      gilangCategories={gilangCategories}
      wfcCategory={wfcCategory}
      allGilangPhotos={gilangImages}
    />
  );
};

export default GalleryPage;
