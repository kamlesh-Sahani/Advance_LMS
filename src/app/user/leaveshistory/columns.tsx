"use client"

import { ColumnDef } from "@tanstack/react-table"




export const columns: ColumnDef<{},LeavesHistory>[] = [
  {
    accessorKey: "type",
    header: ()=>(<div className="font-bold text-black dark:text-white">
      Type
    </div>),
  },
  {
    accessorKey: "status",
    header: ()=>(<div className="font-bold text-black dark:text-white">
      Status
    </div>),
    cell:({row})=>(

      <div className={`text-red-500`}>{row.getValue("status")==="pending"?<p className="text-yellow-500 dark:text-yellow-300">{row.getValue("status")}</p>:row.getValue("status")==="approved"?<p className="text-green-500 dark:text-green-400">{row.getValue("status")}</p>:<p className="text-red-500 dark:text-red-400">{row.getValue("status")}</p>}</div>
    ) 
  },
  {
    accessorKey: "startdate",
    header: ()=>(<div className="font-bold text-black dark:text-white">
      Start Date
    </div>),
    
  },
  {
    accessorKey: "enddate",
    header: ()=>(<div className="font-bold text-black dark:text-white">
      End Date
    </div>),
    
  },
  {
    accessorKey: "duration",
    header: ()=>(<div className="font-bold text-black dark:text-white">
      Duration
    </div>),
    cell:({row})=>(
      <div className="">{row.getValue("duration")}</div>
    )
  },

]


