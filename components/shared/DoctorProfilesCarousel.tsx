"use client";

import * as React from "react";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type DoctorProfilesCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  desktopClassName?: string;
  mobileClassName?: string;
};

export function DoctorProfilesCarousel<T>({
  items,
  renderItem,
  desktopClassName = "space-y-8",
  mobileClassName,
}: DoctorProfilesCarouselProps<T>) {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <>
      <div className={`hidden sm:block ${desktopClassName}`}>
        {items.map((item, index) => (
          <React.Fragment key={index}>{renderItem(item, index)}</React.Fragment>
        ))}
      </div>

      <div className={`sm:hidden ${mobileClassName ?? ""}`}>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: items.length > 1,
          }}
          className="w-full"
        >
          {items.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous doctor profile"
                onClick={() => api?.scrollPrev()}
                className="absolute left-3 top-[39%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f3d9cf] bg-white/95 text-[#f05623] shadow-[0_12px_26px_rgba(15,23,42,0.12)] transition hover:bg-[#80c141] hover:text-white"
              >
                <span aria-hidden="true" className="text-2xl font-semibold leading-none">
                  &lt;
                </span>
              </button>

              <button
                type="button"
                aria-label="Next doctor profile"
                onClick={() => api?.scrollNext()}
                className="absolute right-3 top-[39%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f3d9cf] bg-white/95 text-[#f05623] shadow-[0_12px_26px_rgba(15,23,42,0.12)] transition hover:bg-[#80c141] hover:text-white"
              >
                <span aria-hidden="true" className="text-2xl font-semibold leading-none">
                  &gt;
                </span>
              </button>
            </>
          ) : null}

          <CarouselContent className="-ml-0">
            {items.map((item, index) => (
              <CarouselItem key={index} className="pl-0">
                {renderItem(item, index)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
