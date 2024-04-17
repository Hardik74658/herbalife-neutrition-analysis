"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const teamMembers = [
    {
        id: 1,
        name: "Ishad Shah",
        designation: "Head of Operations",
        image: "/images/ishad.jpg"
    },
    {
        id: 2,
        name: "Akshat Thakkar",
        designation: "Chief Financial Officer",
        image: "/images/akshat.jpg"
    },
    {
        id: 3,
        name: "Hardik Songara",
        designation: "Founder & CEO",
        image: "/images/Hardik(2).jpg"
    },
    {
        id: 4,
        name: "Nirbhay Datt",
        designation: "Marketing Manager",
        image: "/images/nirbhay.jpg"
    },
    {
        id: 5,
        name: "Jay Dave",
        designation: "Customer Support Specialist",
        image: "/images/ishad.jpg"
    }
];

export function CEOs() {
  return (
    <div className="flex flex-row items-center border-black justify-center mb-10 w-full">
      <AnimatedTooltip  items={teamMembers} />
    </div>
  );
}
