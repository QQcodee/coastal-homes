import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CloudDrizzle,
  Construction,
  HandCoins,
  PencilRuler,
  ShieldCheck,
  UserRoundCog,
  UsersRound,
  Zap,
} from "lucide-react";

export function CarouselFeatures() {
  return (
    <Carousel opts={{ loop: true }} className="w-full max-w-7xl">
      <CarouselContent className="-ml-1">
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <CloudDrizzle className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">Weather Resistance</span>
                  <p>
                    Modular homes are built indoors in controlled environments,
                    shielding construction from rain, wind, and other elements.
                    This ensures structural integrity and durability, making
                    modular homes highly resilient in extreme weather
                    conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <HandCoins className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">Cost Efficiency </span>
                  <p>
                    Modular construction minimizes waste and labor costs through
                    efficient factory production. This streamlined approach
                    reduces expenses and often results in more predictable
                    budgeting compared to traditional builds.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <ShieldCheck className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">Quality Control </span>
                  <p>
                    With standardized manufacturing processes, modular homes are
                    built to strict quality standards. Inspections at each stage
                    in the factory ensure high-quality materials, precise
                    assembly, and consistent performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <PencilRuler className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">
                    Customization & Options{" "}
                  </span>
                  <p>
                    Modular construction offers flexibility with design,
                    allowing buyers to personalize layouts, finishes, and
                    features. Buyers can choose from various styles and
                    configurations to create a home tailored to their needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <UsersRound className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">Community Impact </span>
                  <p>
                    Building modular homes reduces noise, pollution, and
                    disruption in communities, as most of the construction
                    occurs off-site. This method also often uses fewer
                    resources, benefiting the environment and supporting
                    sustainable building practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <Construction className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">Fast Construction </span>
                  <p>
                    Factory-built modular homes can be completed much faster
                    than traditional homes. Indoor construction reduces delays
                    due to weather, and streamlined assembly cuts overall build
                    time, allowing owners to move in sooner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <UserRoundCog className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">
                    Precision Engineering{" "}
                  </span>
                  <p>
                    Modular homes are constructed with precision engineering,
                    meaning that each component is designed and manufactured
                    with high accuracy. This results in tightly built homes with
                    excellent energy efficiency and reduced maintenance needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-start justify-s p-6 bg-slate-100 rounded-xl hover:bg-slate-200">
                <div className="flex flex-col gap-5 ">
                  <Zap className="h-[100px] w-[100px]" />
                  <span className="text-2xl font-bold">Zero Energy </span>
                  <p>
                    Many modular homes are designed with energy efficiency in
                    mind, often integrating solar panels, energy-efficient
                    appliances, and insulation to achieve zero-energy goals.
                    This makes them highly sustainable, with minimal
                    environmental impact and reduced utility costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden 2xl:block" />
      <CarouselNext className="hidden 2xl:block" />
    </Carousel>
  );
}
