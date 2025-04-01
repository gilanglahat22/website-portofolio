import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const galleryPath = path.join(process.cwd(), "public/gallery");
  let imageGallery: { [key: string]: string[] } = {};

  try {
    const years = fs.readdirSync(galleryPath);
    years.forEach((year) => {
      const yearPath = path.join(galleryPath, year);
      const files = fs.readdirSync(yearPath);
      const images = files.filter((file) =>
        /\.(png|jpe?g|webp|gif)$/i.test(file),
      );
      imageGallery[year] = images.map((file) => `/gallery/${year}/${file}`);
    });
  } catch (error) {
    console.error("Error loading gallery:", error);
  }

  return NextResponse.json({ gallery: imageGallery });
}
