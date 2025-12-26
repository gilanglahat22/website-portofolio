import React from 'react';
import fs from 'fs';
import path from 'path';
import Gallery from '@/components/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Gilang Portfolio',
  description: 'A collection of photos and moments.',
};

const GalleryPage = () => {
  const photosDirectory = path.join(process.cwd(), 'public', 'Gilang_Photos');
  
  let images: string[] = [];
  
  try {
    const fileNames = fs.readdirSync(photosDirectory);
    // Filter for image files only to be safe
    images = fileNames.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    // Handle error appropriately, maybe return minimal UI or empty array
  }

  return (
    <div className="min-h-screen">
      <main className="pt-8 px-4 sm:px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <Gallery images={images} />
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
