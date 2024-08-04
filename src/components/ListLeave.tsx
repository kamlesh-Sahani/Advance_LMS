"use client";
import { useEffect, useState } from 'react';
import { columns } from '@/src/app/user/leaveshistory/columns';
import { DataTable } from '@/src/app/user/leaveshistory/data-table';
import { getData } from '@/src/constants/leavesdata';
import { cn } from '@/src/lib/utils';
import React from 'react';

const ListLeave = ({ className }:{className:string}) => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const fetchData =  () => {
      const result =  getData();
      setData(result.filter(d => d.id < 8));
    };
    fetchData();
  }, []);

  return (
    <div className={cn("py-5 max-h-screen pb-10", className)}>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ListLeave;
