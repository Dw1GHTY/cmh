"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Logo: React.FC = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="h-16 w-32 border-black border-2 rounded-md text-xl hover:cursor-pointer"
    >
      LOGO
    </div>
  );
};

export default Logo;
