"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
        className={cn(" fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
            </Link>
             <Link href={"/services"}>   
                <MenuItem setActive={setActive} active={active} item="Service">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/electricians">Electricians</HoveredLink>
                        <HoveredLink href="/electricians">Plumbers</HoveredLink>
                        <HoveredLink href="/electricians">Cleaning</HoveredLink>
                    </div>
                </MenuItem>
            </Link>
            <Link href={"/workers"}>
                <MenuItem setActive={setActive} active={active} item="Workers">
                </MenuItem>
            </Link>    
            <Link href={"/contactus"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
            </Link>    
        </Menu>    
    </div>
  )
}

export default Navbar