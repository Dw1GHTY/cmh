import React from "react";
import ImageInfoCard from "../Cards/ImageInfoCard";

export type TInfoCard = {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  linkPath: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
};

interface HomeInfoSegmentProps {
  infoCards: Array<TInfoCard>;
}

const HomeInfoSegment: React.FC<HomeInfoSegmentProps> = ({ infoCards }) => {
  return (
    <div className="flex flex-col w-full py-2">
      <h2 className="flex justify-center items-center text-center mb-2 text-xl md:text-4xl text-white font-semibold">
        Wellness and health programs designed for You!
      </h2>
      <div className="flex flex-col justify-center items-center flex-wrap md:flex-row md:justify-center md:items-start md:space-x-3">
        {infoCards.map((card, index) => {
          return (
            <ImageInfoCard
              key={index}
              title={card.title}
              content={card.content}
              linkPath={card.linkPath}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              buttonText={card.buttonText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeInfoSegment;
