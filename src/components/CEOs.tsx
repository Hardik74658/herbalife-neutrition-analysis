"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const teamMembers = [
    {
        id: 1,
        name: "Ishad Shah",
        designation: "Head of Operations",
        image: "https://res.cloudinary.com/duuglsefu/image/upload/v1712860996/ifgzutafpcgtyqhtzpt4.jpg"
    },
    {
        id: 2,
        name: "Akshat Thakkar",
        designation: "Chief Financial Officer",
        image: "https://res.cloudinary.com/duuglsefu/image/upload/v1712860996/jt4d68ak0qijxk1v6xfn.jpg"
    },
    {
        id: 3,
        name: "Hardik Songara",
        designation: "Founder & CEO",
        image: "https://res.cloudinary.com/duuglsefu/image/upload/v1712860997/hjufc06ytnmcx2xemmm9.jpg"
    },
    {
        id: 4,
        name: "Nirbhay Datt",
        designation: "Marketing Manager",
        image: "https://res.cloudinary.com/duuglsefu/image/upload/v1712860996/ifgzutafpcgtyqhtzpt4.jpg"
    },
    {
        id: 5,
        name: "Jay Dave",
        designation: "Customer Support Specialist",
        image: "https://res.cloudinary.com/duuglsefu/image/upload/v1712860996/jt4d68ak0qijxk1v6xfn.jpg"
    }
];

export function CEOs() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={teamMembers} />
    </div>
  );
}
