import React from "react";
import ImageInfoCard from "../Cards/ImageInfoCard";
import { TInfoCard } from "@/types/TInfoCard";

interface HomeInfoSegmentProps {
  infoCards: Array<TInfoCard>;
}

const HomeInfoSegment: React.FC<HomeInfoSegmentProps> = ({ infoCards }) => {
  return (
    <div className="flex flex-col py-2">
      <h1 className="flex justify-center items-center mb-2 text-xl md:text-4xl text-white font-semibold">
        Wellness and health programs designed for You!
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-start md:space-x-2">
        {infoCards.map((card, index) => {
          return (
            <ImageInfoCard
              key={index}
              title={card.title}
              content={card.content}
              linkPath={card.linkPath}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeInfoSegment;
