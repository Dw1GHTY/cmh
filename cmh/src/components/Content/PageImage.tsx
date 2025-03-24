import Image from "next/image";
import React from "react";

interface PageImageProps {
  path: string;
  title: string;
  subtitle: string;
  alt: string;
}

const PageImage: React.FC<PageImageProps> = ({
  path,
  title,
  subtitle,
  alt,
}) => {
  return (
    <div
      className="relative w-full max-w-4xl mx-auto h-auto overflow-hidden 
    rounded-md shadow-lg aspect-[16/9] md:aspect-[16/9] mt-24 shadow-green-900"
    >
      <Image
        src={path}
        alt={alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 70vw"
        priority={true}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/20 text-white">
        <h1
          className="
          text-center text-3xl md:text-5xl 
          font-bold mb-4 italic"
        >
          {title}
        </h1>
        <p className="text-sm md:text-lg text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageImage;
