"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface InfoCardProps {
  title?: string;
  content?: string;
  linkPath: string;
  imageSrc: string;
  imageAlt: string;
}

const ImageInfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  linkPath,
  imageSrc,
  imageAlt,
}) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        router.push(`${linkPath}`);
      }}
      className="w-[300px] max-w-full bg-slate-100 rounded-md text-black my-2
     shadow-white shadow-sm 
     hover:shadow-white hover:shadow-lg transition delay-75 cursor-pointer"
    >
      <div className="relative overflow-hidden group">
        <Image
          src={imageSrc}
          alt={imageAlt || "Card Image"}
          width={300}
          height={200}
          className="object-cover transition-all duration-300 group-hover:brightness-75 group-hover:bg-lightgreen"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="flex justify-center items-center w-fit p-1 text-lg font-semibold">
          <h2 className="text-center">{title}</h2>
        </CardTitle>
      </CardHeader>
      {/* <div>
        <Separator className="bg-green-600 opacity-60 h-0.5 w-full" />
      </div> */}
      <CardContent className="text-sm break-words">{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={`${linkPath}`}
          className="px-4 py-2 bg-green-600 text-white hover:bg-green-400 cursor-pointer rounded-md transition delay-75"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ImageInfoCard;
