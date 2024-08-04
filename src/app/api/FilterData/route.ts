// pages/api/FilterData.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

interface DataItem {
  name: string;
  status: string;
  ApplyDate: string; // Use string for JSON serialization
}

const data: DataItem[] = [
  {
    name: "Sick Leave",
    status: "approved",
    ApplyDate: new Date().toISOString(),
  },
  {
    name: "Causual Leave",
    status: "pending",
    ApplyDate: new Date().toISOString(),
  },
  {
    name: "Annual Leave",
    status: "approved",
    ApplyDate: "17-06-2024",
  },
  {
    name: "Sick Leave",
    status: "rejected",
    ApplyDate:"15-05-2024",
  },
  {
    name: "Vacation",
    status: "approved",
    ApplyDate:"18-06-2024",
  },
  {
    name: "Marrige Leave",
    status: "rejected",
    ApplyDate:"12-09-2024"
  },
  {
    name: "Annual Leave",
    status: "approved",
    ApplyDate: new Date().toISOString(),
  },
  {
    name: "Sick Leave",
    status: "pending",
    ApplyDate: "06-09-2024"
  },
];
export const GET=async ()=>{
  return NextResponse.json(data);
}