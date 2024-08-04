"use client";

import React, { SetStateAction } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { IoMenu } from "react-icons/io5";
import { Dispatch } from "@reduxjs/toolkit";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { LuHistory, LuHome } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "./ui/separator";
import { profile } from "./ProfileAI";
import { Plus, Weight } from "lucide-react";
import { ImProfile } from "react-icons/im";
import ThemeToggle from "./ThemeToggle";

const Iconbar = () => {
  const route = useRouter();
  const path = usePathname();
  return (
    <div className="flex flex-col items-center  ">
      {/* avtar */}

      <Separator className="my-2" />
      {/* Icons for links */}
      <div className="w-full flex flex-col gap-3 items-center h-[74vh]">
        <TooltipProvider>
          {/* Dashboard */}
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => route.push("/user")}
                className={`${
                  path === "/user" ? "bg-blue-500 text-white" : ""
                } p-2 rounded-xl border shadow`}
              >
                <LuHome size={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>Dashboard</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          {/* Profile */}
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => route.push("/user/profile")}
                className={`${
                  path === "/user/profile" ? "bg-blue-500 text-white" : ""
                } p-2 rounded-xl border shadow`}
              >
                <ImProfile size={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>Profile</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          {/* Leave Request */}
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => route.push("/user/leavesrequest")}
                className={`${
                  path === "/user/leavesrequest" ? "bg-blue-500 text-white" : ""
                } p-2 rounded-xl border shadow`}
              >
                <Plus size={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>Leave Request</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          {/* Leave Balance */}
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => route.push("/user/leavebalance")}
                className={`${
                  path === "/user/leavebalance" ? "bg-blue-500 text-white" : ""
                } p-2 rounded-xl border shadow`}
              >
                <Weight size={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>Leave Balance</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          {/* History */}
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => route.push("/user/leaveshistory")}
                className={`${
                  path === "/user/leaveshistory" ? "bg-blue-500 text-white" : ""
                } p-2 rounded-xl border shadow`}
              >
                <LuHistory size={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>Leave History</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          {/* Setting */}
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => route.push("/user/setting")}
                className={`${
                  path === "/user/setting" ? "bg-blue-500 text-white" : ""
                } p-2 rounded-xl border shadow`}
              >
                <IoSettingsOutline size={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>Settings</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col gap-2">
        {/* Avtar  */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Avatar>
                <AvatarImage src="/image_profile.jpg" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>{profile.personal.name.firstName}</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Theme Toggle icon */}
        {path!=="/user/setting"&&(<ThemeToggle />)}
        {/* <ThemeToggle /> */}
        {/* Logout icon  */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => route.push("/login")}
                className={` p-2 rounded-xl border shadow`}
              >
                <BiLogOut size={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <h1>Log-out</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Iconbar;
