"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession,signOut } from "next-auth/react";
import { delay } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const {theme,setTheme} = useTheme()
  const toggleTheme =()=>{
    if(theme==="dark"){
        console.log(theme);
        setTheme("light")
    }else{
      setTheme("dark")
    }
  }

  const {data : session} = useSession()
  const router = useRouter()

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
    
            {
                session ? 
                (
                    <Link href={'#'} onClick={()=>{
                        toast.info("Logged Out Successfully")
                        delay(()=>{
                            signOut({
                                callbackUrl:'/signup',
                            })}
                        ,4000) 
                    }}>
                        <MenuItem setActive={setActive} active={active} item="Logout">
                        </MenuItem>
                    </Link>
                    
                )
                :(
                    <Link href={"/signup"}>
                        <MenuItem setActive={setActive} active={active} item="Register">
                        </MenuItem>
                    </Link>
                )
            }
            <label className="swap swap-rotate dark:text-black text-white">
        
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={toggleTheme}/>
                
                {/* moon icon */}
                <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
                {/* sun icon */}
                <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
            </label>
            {/* <Link href={"/login"}>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Login
                    </span>
                </button>
            </Link> */}
        </Menu>    
    </div>
  )
}

export default Navbar