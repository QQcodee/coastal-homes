import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export function GalleryCarousel() {
  const [urlImgs] = useState([
    "https://affinitymodular.com/hs-fs/hubfs/gallery/s%23483-211-s-anglers.jpg?width=600&height=453&name=s%23483-211-s-anglers.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/Coastal-Premium-Navarre-ABS-2215-P2-s%23675.jpg?width=600&height=399&name=Coastal-Premium-Navarre-ABS-2215-P2-s%23675.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/whitson2.jpg?width=600&height=800&name=whitson2.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/Screenshot-2024-08-13-114545.jpg?width=600&height=338&name=Screenshot-2024-08-13-114545.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/1exterior-front-PS.jpg?width=600&height=830&name=1exterior-front-PS.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/VANTEM-PANELS-10-18-23-51.jpg?width=600&height=400&name=VANTEM-PANELS-10-18-23-51.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/10-24-23-PHOTOS-21-1.jpg?width=600&height=400&name=10-24-23-PHOTOS-21-1.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/VANTEM-PANELS-10-12-23-40.jpg?width=600&height=400&name=VANTEM-PANELS-10-12-23-40.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/DSC_6273.jpg?width=600&height=902&name=DSC_6273.jpg",
    "https://affinitymodular.com/hs-fs/hubfs/gallery/cedar-ridge.jpg?width=600&height=400&name=cedar-ridge.jpg",
  ]);

  return (
    <Carousel opts={{ loop: true }} className="w-full max-w-7xl">
      <CarouselContent className="-ml-1">
        {urlImgs.map((url, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-start justify-s p-0 overflow-hidden bg-slate-100 rounded-xl hover:bg-slate-200">
                  <img className="h-full w-full object-cover" src={url} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
