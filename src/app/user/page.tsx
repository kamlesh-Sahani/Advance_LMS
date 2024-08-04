"use client";
import ChartDemo from "@/src/components/ChartDemo";
import ListLeave from "@/src/components/ListLeave";
import { Separator } from "@/src/components/ui/separator";
import { bal } from "@/src/constants/data";
import { useRouter } from "next/navigation";
import React from "react";
import { CarouselDemo } from "@/src/components/Carousel";
const Users = () => {
  const routes = useRouter();
  return (
    <section className=" flex flex-col w-full pt-2 h-screen overflow-x-hidden no-scrollbar">
      <div className="flex max-md:flex-col max-md:gap-4 max-md:justify-center max-md:items-center">
        <div className="flex w-full flex-col md:ml-48 justify-center items-center">
          <h1 className="sm:text-4xl mt-2 text-3xl font-bold ">Dashboard</h1>
        </div>
        <div className="w-64 flex justify-center items-center">
          <p
            onClick={() => routes.push("/user/leavesrequest")}
            className="text-sm border p-2 cursor-pointer rounded-lg  bg-blue-500 text-white w-fit"
          >
            Apply for leaves
          </p>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex flex-wrap items-center max-md:ml-4 justify-evenly gap-5 w-full max-sm:hidden pb-2 pr-7  ">
        {bal.map((itmes,i) => (
          <div className=" max-[920px]:w-[18rem] max-[920px]:h-[18rem] max-[770px]:h-[16rem] max-[640px]:h-[12rem] max-[433px]:h-[18rem] max-[433px]:w-[18rem] max-[640px]:w-[12rem] max-[770px]:w-[16rem]  w-[12rem] h-[12rem]  flex flex-col  justify-center items-center  p-4 transition-all duration-150  shadow-md dark:shadow-white rounded-full cursor-pointer hover:shadow hover:border-black dark:hover:border-white dark:hover:shadow-white" key={i}>
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
      <div className="flex justify-center items-center sm:hidden">
        <CarouselDemo />
      </div>
      <div className="w-full mt-2 max-sm:hidden">
        <div className=" flex flex-col justify-center p-2 border items-center rounded-lg">
          <p className="font-bold text-xl  md:text-2xl ">Total Balance</p>
          <h1 className="md:text-2xl text-xl text-gray-600 font-bold">
            45 <span>days</span>
          </h1>
          <p className="text-gray-500 text-xs">forward to next year</p>
        </div>
      </div>

      <div className="flex  pt-2  max-lg:flex-col w-full h-[100vw] scrorr">
        <div className="lg:w-1/3 w-full flex gap-5 justify-center items-center flex-col px-4  py-4">
          <div className="w-full flex justify-center items-center flex-col relative">
            <h1 className="md:text-4xl text-2xl font-bold ">
              Status of Leaves
            </h1>
            <p className="md:text-lg text-sm">
              This is the status of last 50 days
            </p>
          </div>
          <ChartDemo className="mt-5 md:w-[30rem] w-[20rem] h-[20rem] flex items-center justify-center text-center md:h-[25rem] " />
        </div>
        <div className="w-full flex gap-5 justify-center items-center flex-col px-4  py-4">
          <div className="w-full flex justify-center items-center flex-col relative">
            <h1 className="sm:text-4xl text-2xl font-bold ">Recent Applied </h1>
            <p className="md:text-lg text-sm">
              This is the list of recent applied with in 10 days
            </p>
          </div>
          <ListLeave className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Users;
