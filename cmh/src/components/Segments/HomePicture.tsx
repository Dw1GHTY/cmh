import Image from "next/image";
import React from "react";

const HomePicture: React.FC = () => {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-md shadow-md shadow-green-700">
      <Image
        src="/stock1.png"
        alt="Blood test"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default HomePicture;
