"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { FaCentSign } from "react-icons/fa6";
import { BiDownArrow } from "react-icons/bi";

export const balanceColumns: ColumnDef<Balance>[] = [
  {
    accessorKey: "leaveType",
    header: () => <div className="text-black dark:text-white dark:bg-red font-bold">Leave Type</div>,
  },
  {
    accessorKey: "used",
    header: () => <div className="text-black dark:text-white font-bold">Leaves Used</div>,
    cell: ({ row }) => <div className="px-2">{row.getValue("used")}</div>,
  },
  {
    accessorKey: "total",
    header: () => <div className="text-black dark:text-white font-bold">Total leaves</div>,
    cell: ({ row }) => <div className="px-2">{row.getValue("total")}</div>,
  },
  
];
