"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = (props) => {
  const router = useRouter();
  const { width, height } = props;
  return (
    <div
      className="flex items-center mt-1 md:mt-0 h-full rounded-md 
                 transition delay-75 hover:ring-2 ring-green-600"
    >
      <Image
        className="cursor-pointer rounded-md"
        onClick={() => {
          router.push("/");
        }}
        alt="Complete Mobile Health logo"
        src={`/cmh_logo_white.jpg`}
        width={width ? width : 150}
        height={height ? height : 40}
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
      />
    </div>
  );
};

export default Logo;
