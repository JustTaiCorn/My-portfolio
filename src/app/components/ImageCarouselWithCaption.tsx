"use client";
import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Image as ImageData } from "@/assets/assets";
export function ImageCarouselWithCaption() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mx-auto  space-y-3">
      <div className="relative w-full">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {ImageData.map((item, i) => (
              <CarouselItem key={i}>
                <div className="flex items-center justify-center">
                  {item.src && (
                    <Image
                      src={item.src}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-64 sm:h-95 object-cover rounded-xl shadow-md"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      {/* Caption thay đổi theo slide */}
      <div className="text-center">
        <p className="text-base font-medium">{ImageData[current]?.caption}</p>
      </div>
    </div>
  );
}
