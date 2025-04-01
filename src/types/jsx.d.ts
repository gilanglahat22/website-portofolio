import React from 'react';
import { ImageProps } from 'next/image';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
      select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
      form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
      label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      svg: React.SVGProps<SVGSVGElement>;
      path: React.SVGProps<SVGPathElement>;
      main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
      li: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    }
  }
}

// Extend type for Next.js Image component
declare module 'next/image' {
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }

  interface StaticRequire {
    default: StaticImageData;
  }

  type StaticImport = StaticImageData | StaticRequire;

  interface ImageProps extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt'> {
    src: string | StaticImport;
    alt: string;
    width?: number | string;
    height?: number | string;
    fill?: boolean;
    loader?: (props: { src: string; width: number; quality?: number }) => string;
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
    onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  }

  const Image: React.FC<ImageProps>;
  export default Image;
}

export {}; 