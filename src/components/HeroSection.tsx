import Link from 'next/link'
import React from 'react'
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";


function HeroSection() {
  return (
    <div 
    className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="blue"
        />
        <HeroHighlight>
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-950  dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 "
           >
            <Highlight className="text-black dark:text-white">
            Get Your Work Done
            </Highlight>
            </h1>
            {/* <Highlight className="text-black dark:text-white mt-20 md:mt-0 text-4xl md:text-7xl  ">
                Get Your Work Done
            </Highlight> */}
            <p className="mt-4 font-normal text-base md:text-lg dark:text-neutral-300 text-neutral-900 max-w-lg mx-auto"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et illum cupiditate quo quidem, aliquid corrupti, in expedita odio architecto exercitationem autem culpa ipsum molestiae rem quis omnis! Incidunt, quo.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                          borderRadius="1.75rem"
                          className="bg-red-500 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"                  
                    >
                    Explore Services
                    </Button>
                </Link>
            </div>
        </div>
        
        </HeroHighlight>
    </div>
  )
}

export default HeroSection