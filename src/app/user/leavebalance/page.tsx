import { Separator } from "@/src/components/ui/separator";
import { bal } from "@/src/constants/data";
import React from "react";
import { DataTable } from "./data-table";
import { balanceColumns } from "./columns";
import { CarouselDemo } from "@/src/components/Carousel";
import { randomFillSync } from "crypto";
const LeaveBalance = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full flex-col justify-center items-center">
        <h1 className="text-4xl font-black mt-2 ml-5">Leaves Balance</h1>
        <p className="text-base text-gray-500 mt-1 ml-5">
          Here your's balances of leaves
        </p>
      </div>
      <Separator className="my-2" />
      <div>
        {/* Balanced here*/}
        {/* <div className="relative flex flex-wrap items-center  justify-around  gap-5 w-full pb-2  pr-7 no-scrollbar ">
          {bal.map((itmes) => (
            <div className="relative min-w-[10rem]  flex flex-col  justify-center  p-4 transition-all duration-150  border rounded-xl cursor-pointer hover:shadow-lg hover:border-black">
              <p className=" font-medium ">{itmes.leaveType}</p>
              <h1 className="text-2xl font-bold">
                {itmes.used} /{" "}
                <span className="font-semibold">{itmes.total}</span>{" "}
                <span>days</span>
              </h1>
              <p className="text-gray-500 text-xs">{itmes.text}</p>
            </div>
          ))}
        </div> */}
        <div className="flex mb-12 flex-wrap items-center max-md:ml-4 justify-evenly gap-5 w-full max-sm:hidden pb-2 pr-7  ">
          {bal.map((itmes,idx) => (
            <div className=" max-[920px]:w-[18rem] max-[920px]:h-[18rem] max-[770px]:h-[16rem] max-[640px]:h-[12rem] max-[433px]:h-[18rem] max-[433px]:w-[18rem] max-[640px]:w-[12rem] max-[770px]:w-[16rem]  w-[12rem] h-[12rem]  flex flex-col  justify-center items-center  p-4 transition-all duration-150  shadow-md dark:shadow-white rounded-full cursor-pointer hover:shadow hover:border-black dark:hover:border-white dark:hover:shadow-white" key={itmes.id}>
              <p className=" font-bold text-xl ">{itmes.leaveType}</p>
              <h1 className=" mt-2 text-md text-gray-600 font-bold">
                {itmes.used} /{" "}
                <span className="font-semibold">{itmes.total}</span>{" "}
                <span>days</span>
              </h1>
              <p className="text-gray-500 text-xs">{itmes.text}</p>
            </div>
          ))}
        </div>
        <div className="flex mb-12 justify-center items-center  sm:hidden">
          <CarouselDemo />
        </div>
        {/* <div className="w-full mt-2 max-sm:hidden">
        <div className=" flex flex-col justify-center p-2 border items-center rounded-lg">
          <p className="font-bold text-xl  md:text-2xl ">Total Balance</p>
          <h1 className="md:text-2xl text-xl text-gray-600 font-bold">
            45 <span>days</span>
          </h1>
          <p className="text-gray-500 text-xs">forward to next year</p>
        </div>
      </div> */}

      

        <DataTable columns={balanceColumns} data={bal} key={null}/>
      </div>
    </div>
  );
};

export default LeaveBalance;
