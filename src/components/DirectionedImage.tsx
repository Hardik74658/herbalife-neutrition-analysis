"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionedImage(
    {
        image,
        name
    }
    :{
        image:string;
        name:string;
    }) {
//   const imageUrl = {image};
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover  imageUrl={image}>
        <p className="font-bold text-xl">{name}</p>
      </DirectionAwareHover>
    </div>
  );
}
