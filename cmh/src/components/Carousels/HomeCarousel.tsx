import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

export type TCarouselElement = {
  imageSrc: string;
  imageAlt: string;
  description?: string;
};

interface HomeCarouselProps {
  images?: Array<TCarouselElement>;
}

//!CSS je katastrofalan, stoji samo kao primer kako carousel treba da izgleda
const HomeCarousel: React.FC<HomeCarouselProps> = ({ images }) => {
  return (
    <div className="h-screen w-full relative" style={{ padding: 150 }}>
      <Carousel className="h-full grid">
        <CarouselContent className="h-full">
          {images?.map((image, index) => {
            return (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full w-full">
                  <Image
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
