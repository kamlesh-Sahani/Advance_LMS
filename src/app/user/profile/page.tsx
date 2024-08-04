import ProfileAI from "@/src/components/ProfileAI";
import { Separator } from "@/src/components/ui/separator";
import { profile } from "@/src/constants/data";
import React from "react";

const Profile = () => {
  return (
    <section className=" flex flex-col w-full relative px-2 max-h-screen  no-scrollbar">
      <div className="flex mb-4 w-full flex-col mt-4 justify-center items-center">
        <h1 className="text-4xl font-bold ">Profile</h1>
      </div>
      <Separator className="mb-4" />

      <ProfileAI />
    </section>
  );
};

export default Profile;
