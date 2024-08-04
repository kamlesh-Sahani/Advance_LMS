"use client";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { LuHome } from "react-icons/lu";
import { redirect, usePathname } from "next/navigation";
import {  BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Weight } from 'lucide-react';
import { ImProfile } from "react-icons/im";
import { Separator } from "../ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { Input } from "../ui/input";
import { Label } from "@/src/components/ui/label"
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";



const Sidebar = () => {
  const routes = useRouter()
  const path = usePathname();
  return (
    <aside
      className={`relative pt-2  sm:flex flex-col border h-screen  md:min-w-[18rem] min-w-[90vw] backdrop:blur  shadow`}
    >
    
      
      {/* Header 
      // <div className="block sm:hidden">
      //   <IoMdClose
      //     size={32}
      //     className="absolute right-1"
      //     onClick={() => setClose(true)}
      //   />
      // </div> */}
 
      <section className="h-[20rem] flex flex-col justify-center gap-2 flex-1 items-center">
        {/* Profile pic and heading */}
        <div className="rounded-full w-[200px] h-[200px] border border-black">
          <Image
            src={"/picprofile.jpg"}
            alt="profile"
            width={200}
            height={200}
            className="rounded-full w-full h-full object-cover   "
          />
        </div>

        <div className="  rounded-3xl  flex justify-center items-center flex-col">
          {/* Edit  */}
          <p className="text-blue-400 dark:text-blue-300  font-medium text-sm cursor-pointer" onClick={()=>routes.push("/user/setting")}>EDIT</p>
          {/* Profile Name */}
          <h1 className="text-3xl md:text-2xl font-semibold">Ritik Kohli</h1>
          <p className="text-gray-600 text-xl md:text-base font-medium">
            ID 123-456-789
          </p>
        </div>
      </section>
      <Separator />

      {/* Nav links */}
      <section className=" flex flex-col pt-5 w-full  flex-1  ">
        {/* List of Link */}
        <Link
          href={"/user"}
          className={`${path === "/user" ? "dark:bg-blue-500 bg-blue-600 text-white" : null}`}
        >
          <LuHome size={24} />
          Dashboard
        </Link>
        <Link
          href={"/user/profile"}
          className={`${
            path === "/user/profile" ? "text-white bg-blue-600 dark:bg-blue-500" : null
          }`}
        >
          <ImProfile size={24} />
          Profile
        </Link>
        <Link
          href={"/user/leavesrequest"}
          className={`${
            path === "/user/leavesrequest" ? "text-white bg-blue-600 dark:bg-blue-500" : null
          }`}
        >
          <Plus size={24} />
          Leave Request
        </Link>
        <Link
          href={"/user/leavebalance"}
          className={`${path === "/user/leavebalance" ? "text-white bg-blue-600 dark:bg-blue-500" : null
            }`}
        >
          <Weight size={24} />
          Leave Balance
        </Link>
        <Link
          href={"/user/leaveshistory"}
          className={`${
            path === "/user/leaveshistory" ? "dark:bg-blue-500 bg-blue-600 text-white" : null
          } `}
        >
          <FaHistory size={24} />
          Leave History
        </Link>
        
        <Link
          href={"/user/setting"}
          className={` ${
            path === "/user/setting" ? "dark:bg-blue-500 bg-blue-600 text-white" : null
          }  `}
        >
          <IoSettingsOutline size={24} />
          Setting
        </Link>
        <Link href={"/login"} className={`   `}>
          <BiLogOut size={24} />
          Logout
        </Link>
      </section>
    </aside>
  
  );
};

export default Sidebar;

