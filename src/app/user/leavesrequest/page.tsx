"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { Textarea } from "@/src/components/ui/textarea";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { DataTable } from "../leavebalance/data-table";
import { balanceColumns } from "../leavebalance/columns";
import { bal, courses, leaveType, faculty } from "@/src/constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { MdDelete } from "react-icons/md";

interface FormData {
  leaveType: string;
  startDate: string;
  endDate: string;
  alternatePhoneNumber: string;
  leaveReason: string;
  startTime: string;
  endTime: string;
  document: File | null;
  faculty: string;
}
const LeaveRequest: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    leaveType: "",
    startDate: "",
    endDate: "",
    alternatePhoneNumber: "",
    leaveReason: "",
    startTime: "",
    endTime: "",
    document: null,
    faculty: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0], // Set the first file
      }));
    }
  };
  const handleLeaveTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      leaveType: event.target.value,
    }));
  };

  const [faculties, setFaculties] = useState([{ faculty: "" }]);
  const handleFacultyChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFaculties = [...faculties];
    newFaculties[index].faculty = event.target.value;
    setFaculties(newFaculties);
  };

  const addFaculty = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFaculties([...faculties, { faculty: "" }]);
    console.log(faculties);
  };
  const deleteFaculty = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setFaculties(faculties.filter((_, i) => i !== index));
    console.log(faculties);
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-scroll pb-2 no-scrollbar">
      <div className="flex w-full flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Leaves Application</h1>
        <p className="text-base text-gray-500">Here apply for leaves</p>
      </div>
      <Separator className="mb-1" />
      <div className="flex w-full h-full px-3 justify-around">
        <div className="w-full max-w-2xl flex-1 sm:max-w-3xl lg:max-w-3xl rounded border-gray-300 dark:border-input">
          <form className="">
            <div className="mb-3">
              <label
                htmlFor="leaveType"
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Leave Types
              </label>
              <select
                className="w-full rounded-md border border-input bg-background py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                name="leaveType"
                id="leaveType"
                value={formData.leaveType}
                onChange={handleLeaveTypeChange}
              >
                <option value={""}>Select the leave type</option>
                {leaveType.map((i) => (
                  <option value={i.value}>{i.leaveType}</option>
                ))}
              </select>

              {/* I want to integrate with shadcn but not work here if you find out */}
              {/* <Select onValueChange={handleLeaveTypeChange} defaultValue={formData.leaveType}>
        <SelectTrigger >
          <SelectValue placeholder="Select Leave Type" />
        </SelectTrigger>
        <SelectContent> 
        
          {bal.map((i)=>(
            <SelectItem value={i.value}>{i.leaveType}</SelectItem>
          ))}
        </SelectContent>
      </Select> */}
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="startDate"
                    className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                  >
                    Start Date
                  </label>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="endDate"
                    className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                  >
                    End Date
                  </label>
                  <Input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {formData.leaveType === "short" && (
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="startTime"
                      className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                    >
                      Start Time
                    </label>
                    <Input
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="endTime"
                      className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                    >
                      End Time
                    </label>
                    <Input
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mb-5">
              <label
                htmlFor="alternatePhoneNumber"
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Alternate Phone Number (optional)
              </label>
              <Input
                placeholder="Enter your phone number"
                type="tel"
                name="alternatePhoneNumber" // Fixed name
                id="alternatePhoneNumber"
                value={formData.alternatePhoneNumber}
                onChange={handleChange}
              />
            </div>
            {formData.leaveType === "medical" && (
              <div className="mb-2">
                <label
                  htmlFor="document"
                  className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                >
                  Upload Documents (if any)
                </label>
                <Input
                  id="document"
                  type="file"
                  name="document"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
            )}
            <div className="mb-2 pt-3">
              <label className="mb-2 block text-base text-[#07074D] dark:text-white sm:text-xl">
                Reason for Leave
              </label>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-full">
                  <Textarea
                    placeholder="Type reason here..."
                    name="leaveReason"
                    value={formData.leaveReason}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="my-2 py-2 flex flex-col gap-3  ">
              <label>Class Arrangement</label>

              <div className="flex flex-col gap-4">
                {faculties.map((data, index) => (
                  <div className="flex gap-2">
                    <ClassArrang
                      key={index}
                      fa={data.faculty}
                      handle={(event) => handleFacultyChange(index, event)}
                    />
                    <Button
                      variant={"destructive"}
                      onClick={(e) => deleteFaculty(index, e)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                ))}
                <button
                  onClick={addFaculty}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Add Faculty
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap md:justify-between  flex-col gap-5 ">
              <Button variant="destructive" type="reset">
                Cancel Request
              </Button>
              <Button
                className="bg-blue-500 hover:bg-blue-600 dark:text-white"
                type="submit"
              >
                Submit Request
              </Button>
              <Button variant="outline" type="button">
                Save as Draft
              </Button>
            </div>
          </form>
        </div>
        <div className="rounded-md w-fit hidden lg:flex h-fit">
          {/* <Image
            src={"/request.svg"}
            alt="img"
            width={0}
            height={0}
            className="object-cover w-fit h-fit "
          /> */}
          <DataTable columns={balanceColumns} data={bal} />
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;

type ClassProps = {
  fa: string;
  handle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const ClassArrang = ({ fa, handle }: ClassProps) => (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
    <div>
      {/* shadcn select here */}

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Faculty" />
        </SelectTrigger>
        <SelectContent>
          {/* <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem> */}
          {faculty.map((i) => (
            <SelectItem value={i.name}>{i.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Course" />
      </SelectTrigger>
      <SelectContent>
        {/* <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem> */}
        {courses.map((i) => (
          <SelectItem value={i.name}>{i.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    {/* <Input type="text" placeholder="Course" /> */}
    <Input type="text" placeholder="Subject Code" />
    <Input type="text" placeholder="Subject Name" />
    <Input type="time" />
    {/* <Button onClick={() => deleteFaculty(index)}>Delete</Button> */}
  </div>
);
