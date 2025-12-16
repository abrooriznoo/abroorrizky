"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  children: React.ReactNode;
};

export function ProjectCarousel({ children }: Props) {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
    })
  );

  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[autoplay.current]}
      className="w-full max-w-[900px] mx-auto"
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.reset()}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
