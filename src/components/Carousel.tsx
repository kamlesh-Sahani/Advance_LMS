import * as React from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { bal } from "@/src/constants/data";
export function CarouselDemo() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Carousel className="max-w-[280px]">
        <CarouselPrevious />
        <CarouselContent>
          {bal.map((items,i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <Card className="shadow-md rounded-full w-[270px] h-[270px] flex justify-center items-center flex-col border-none dark:shadow-white/50 dark:bg-black">
                  <CardContent className="flex flex-col items-center justify-center ">
                    <div className="flex flex-col items-center p-5 max-[400px]:my-8 my-12 justify-center">
                      <p className=" font-bold text-lg">{items.leaveType}</p>
                      <h1 className=" mt-2  text-lg  text-gray-600 font-bold">
                        {items.used} /{" "}
                        <span className="font-semibold text-lg ">
                          {items.total}
                        </span>{" "}
                        <span>days</span>
                      </h1>
                      <p className="text-gray-500 text-sm">{items.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <Card className="mt-12 border-none  shadow-md dark:shadow-white/20 dark:bg-black w-full">
        <CardContent className="flex flex-col items-center justify-center ">
          <p className="font-bold text-xl  md:text-2xl ">Total Balance</p>
          <h1 className="md:text-2xl text-xl text-gray-600 font-bold">
            45 <span>days</span>
          </h1>
          <p className="text-gray-500 text-xs">forward to next year</p>
        </CardContent>
      </Card>
    </div>
  );
}
