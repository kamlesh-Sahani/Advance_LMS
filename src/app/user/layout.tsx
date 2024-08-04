"use client";
import Sidebar from "@/src/components/Sidebar";
import { ReactNode, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Ellipsis } from "lucide-react";
import Iconbar from "@/src/components/Iconbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { ThemeProvider } from "@/src/components/theme-provider";
import ThemeToggle from "@/src/components/ThemeToggle";
export default function User({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="max-h-screen ">
        {/* mobile responsive */}
        <div className=" flex md:hidden w-full border  bg-background justify-between items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {show ? (
                  <IoClose
                    className="text-3xl dark:text-white"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <IoMenu
                    className="text-3xl  dark:text-white"
                    onClick={() => setShow(!show)}
                  />
                )}
              </TooltipTrigger>
              <TooltipContent side="bottom" asChild>
              {show ? (
                 <h1>Close</h1>
                ) : (
                  <h1>Menu</h1>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <h1 className="dark:text-white text-black">DBIT</h1>
          <ThemeToggle />
        </div>

        {/* inside md */}
        <div className="flex  overflow-hidden bg-white dark:bg-black dark:text-white">
          {show ? (
            <div className="flex  md:w-fit z-30 absolute md:relative bg-white dark:bg-black ">
              <Sidebar />

              <IoClose
              size={32}
                className="z-30 relative left-[-10%]  cursor-pointer  md:block"
                onClick={() => setShow(!show)}
              />
            </div>
          ) : (
            <div className="md:flex flex-col gap-3 hidden w-[3.5rem] items-center h-screen border rounded-xl py-2 mr-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IoMenu
                      className="text-3xl"
                      onClick={() => setShow(!show)}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <h1>Menu</h1>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Iconbar />
            </div>
          )}
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
}
