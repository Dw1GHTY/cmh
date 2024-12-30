"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center h-full rounded-md hover:shadow-lg hover:shadow-green-900">
      <Image
        className="cursor-pointer rounded-md"
        onClick={() => {
          router.push("/");
        }}
        alt="Complete Mobile Health logo"
        src={`/cmh_logo_2.jpg`}
        width={150}
        height={40}
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
      />
    </div>
  );
};

export default Logo;
