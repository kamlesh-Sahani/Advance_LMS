"use client";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

import React, { useState } from "react";
export const profile = {
  // Personal Information
  personal: {
    title: "Personal Information",
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    dob: "1990-05-15T00:00:00.000Z",
    gender: "male",
    contact: {
      phone: "1667760696",
      email: "kamlesh@gmail.com",
    },
    address: "1234 Main St, Anytown, USA",
  },

  // Professional Information
  professional: {
    title: "Professional Information",
    departmentId: "60b8d295f1",
    designation: "Software Engineer",
    joinedAt: "2020-06-01T00:00:00.000Z",
    employmentType: "FULL_TIME",
  },

  // Experience Information
  experience: [
    {
      title: "Experience Information",
      company: "Tech Corp",
      jobTitle: "Junior Developer",
      duration: {
        startDate: "2018-01-01T00:00:00.000Z",
        endDate: "2020-05-31T00:00:00.000Z",
      },
      responsibilities:
        "Developed web applications and collaborated with cross-functional teams.",
    },
  ],

  // Education Information
  education: {
    title: "Education Information",
    highestQualification: "Bachelors",
    university: "ABC University",
    yearOfPassing: "2017-05-15T00:00:00.000Z",
    specialization: "Computer Science",
  },

  // Profile Status
  isActive: true,
  role: "REGULAR",
};
const dateFormat = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};
const ProfileAI = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="max-h-[92vh]  overflow-scroll no-scrollbar">
        <div>
          <div className="mb-3 border shadow-md dark:shadow-white sm:p-4 sm:pl-8 p-2 rounded-lg ">
            <h2 className="text-2xl font-bold max-md:text-xl mb-2  dark:text-blue-100">
              Department Information
            </h2>
            <div className="flex mb-2">
              <span className="sm:w-1/3 w-3/4 text-gray-600 dark:text-gray-200/70 text-lg max-md:text-sm">
                Department:
              </span>
              <span className="sm:w-2/3 dark:text-gray-200/70 text-lg max-md:text-sm w-full">
                CSE
              </span>
            </div>
            <div className="flex mb-2">
              <span className="sm:w-1/3 w-3/4 text-gray-600 dark:text-gray-200/70 text-lg max-md:text-sm">
                Department ID:
              </span>
              <span className="sm:w-2/3 text-lg  dark:text-gray-200/70 max-md:text-sm w-full">
                {profile.professional.departmentId}
              </span>
            </div>
            <div className="flex mb-2">
              <span className="sm:w-1/3 w-3/4 text-gray-600 dark:text-gray-200/70 text-lg max-md:text-sm">
                Designation:
              </span>
              <span className="sm:w-2/3 text-lg  dark:text-gray-200/70 max-md:text-sm w-full">
                {profile.professional.designation}
              </span>
            </div>
          </div>
        </div>
        {/* Accordians  */}

        <div className="mb-3 border sm:p-2 sm:pl-8 p-2 shadow-md dark:shadow-white  rounded-lg">
          <h2
            className="text-2xl font-bold max-md:text-xl  mb-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            Personal Information
          </h2>
          <div className={` mb-2 flex`}>
            <span className="sm:w-1/3 w-3/4 text-lg max-md:text-sm text-gray-600 dark:text-gray-200/70">
              Name:
            </span>
            <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
              {profile.personal.name.firstName} {profile.personal.name.lastName}
            </span>
          </div>
          <div
            className={`transition-all duration-150 ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="flex mb-2">
              <span className="sm:w-1/3 w-3/4 text-lg max-md:text-sm  text-gray-600 dark:text-gray-200/70">
                Date of Birth:
              </span>
              <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
                {dateFormat(profile.personal.dob)}
              </span>
            </div>

            <div className="flex mb-2">
              <span className="sm:w-1/3  w-3/4 text-lg max-md:text-sm text-gray-600 dark:text-gray-200/70">
                Gender:
              </span>
              <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
                {profile.personal.gender}
              </span>
            </div>
            <div className="flex mb-2">
              <span className="sm:w-1/3 text-lg max-md:text-sm w-3/4 text-gray-600 dark:text-gray-200/70">
                Phone No:
              </span>
              <span className=" sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
                {profile.personal.contact.phone}
              </span>
            </div>
            <div className="flex mb-2">
              <span className="sm:w-1/3 text-lg max-md:text-sm w-3/4 text-gray-600 dark:text-gray-200/70">
                Email:
              </span>
              <span className=" sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
                {profile.personal.contact.email}
              </span>
            </div>

            <div className="flex mb-2">
              <span className="sm:w-1/3 w-3/4 text-lg max-md:text-sm text-gray-600 dark:text-gray-200/70">
                Address:
              </span>
              <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
                {profile.personal.address}
              </span>
            </div>
          </div>
        </div>
        {/* <div className="mb-3 border shadow-md dark:shadow-white sm:p-4 sm:pl-8 p-2 rounded-lg ">
          <h2 className="text-2xl font-bold max-md:text-xl mb-2 text-blue-600">
            Experience Information
          </h2>
          {profile.experience.map((experience, index) => (
            <div key={index} className="mb-4">
              <div className="flex mb-2">
                <span className="sm:w-1/3 text-lg max-md:text-sm w-3/4 text-gray-600 dark:text-gray-200/70">
                  Job Title:
                </span>
                <span className="sm:w-2/3 text-lg max-md:text-sm w-full">
                  {experience.jobTitle}
                </span>
              </div>
              <div className="flex  mb-2">
                <span className="sm:w-1/3 text-lg max-md:text-sm w-3/4 text-gray-600 dark:text-gray-200/70">
                  Job Description:
                </span>
                <span className="sm:w-2/3 text-lg max-md:text-sm w-full">
                  {experience.responsibilities}
                </span>
              </div>
            </div>
          ))}
        </div> */}
     
     <div className="mb-3 border sm:p-2 sm:pl-8 p-2 shadow-md dark:shadow-white  rounded-lg">
          <h2 className="text-2xl max-md:text-xl font-bold   mb-2">
            Education Information
          </h2>
          <div className="flex mb-2">
            <span className="sm:w-1/3 text-lg max-md:text-sm w-2/3 text-gray-600 dark:text-gray-200/70">
              Qualification:
            </span>
            <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
              {profile.education.highestQualification}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 text-lg max-md:text-sm w-2/3 text-gray-600 dark:text-gray-200/70">
              University:
            </span>
            <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
              {profile.education.university}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 text-lg max-md:text-sm w-2/3 text-gray-600 dark:text-gray-200/70">
              Year of Passing:
            </span>
            <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
              {dateFormat(profile.education.yearOfPassing)}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 text-lg max-md:text-sm w-2/3 text-gray-600 dark:text-gray-200/70">
              Specialization:
            </span>
            <span className="sm:w-2/3 text-lg dark:text-gray-200/70 max-md:text-sm w-full">
              {profile.education.specialization}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAI;
