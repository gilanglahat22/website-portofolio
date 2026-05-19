import React from 'react';
import fs from 'fs';
import path from 'path';
import GalleryClient from '@/components/GalleryClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Gallery | Gilang Portfolio',
  description: 'A compact gallery of education, professional, and remote-work moments.',
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

  // Categorize Gilang photos into CV-adjacent education and professional moments.
  const categorizeGilangPhotos = (images: string[]): PhotoCategory[] => {
    const categories: PhotoCategory[] = [
      {
        id: 'education',
        name: 'Education & ITB',
        description: 'Moments connected to Bandung Institute of Technology and the Informatics Engineering journey.',
        icon: '🎓',
        photos: []
      },
      {
        id: 'professional',
        name: 'Professional Moments',
        description: 'Photos connected to collaboration, engineering work, and portfolio milestones.',
        icon: '💼',
        photos: []
      }
    ];

    // Manual categorization based on photo analysis
    const categoryMap: { [key: string]: string } = {
      'IMG_0017.JPG': 'education',
      'WhatsApp Image 2025-12-26 at 14.25.28.jpeg': 'education',
      'WhatsApp Image 2025-12-26 at 14.25.40.jpeg': 'education',
      'WhatsApp Image 2025-12-26 at 14.53.07.jpeg': 'education',
      'WhatsApp Image 2026-01-16 at 01.10.15 (1).jpeg': 'education',
      'FullSizeRender.JPG': 'professional',
      '165cd958-8913-40bc-a411-54396a22f94d.JPG': 'professional',
      '4c03aee2-70f1-4396-afdb-6f8f25708bc3.JPG': 'professional',
      'WhatsApp Image 2026-01-16 at 00.59.31.jpeg': 'professional',
      'WhatsApp Image 2026-01-16 at 00.59.51.jpeg': 'professional',
      'WhatsApp Image 2025-12-26 at 14.24.08 (2).jpeg': 'professional',
      'WhatsApp Image 2026-01-16 at 11.51.34.jpeg': 'professional',
      'WhatsApp Image 2025-12-26 at 14.24.54.jpeg': 'professional',
    };

    images.forEach(image => {
      const category = categoryMap[image] || 'professional';
      const cat = categories.find(c => c.id === category);
      if (cat) {
        cat.photos.push(image);
      }
    });

    // Filter out empty categories
    return categories.filter(cat => cat.photos.length > 0);
  };

  const gilangCategories = categorizeGilangPhotos(gilangImages);

  const wfcCategory: PhotoCategory = {
    id: 'wfc',
    name: 'Remote Engineering',
    description: 'Remote work and focused engineering moments.',
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
