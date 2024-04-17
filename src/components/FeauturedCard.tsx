"use client";
import React from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
import Link from 'next/link';
import Image from "next/image";

function FeauturedCard() {
  return (
    <div className='py-12 dark:bg-transperent'>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Workers</h2>
            <p className='mt-2 text-2xl leading-8 font-bold tracking-tight text-black sm:text-3xl'>Get Work From The Best</p>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                <div className="flex justify-center">
                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                              <Image
                                src={'/images/worker-1.jpeg'}
                                alt="person-1"
                                height="200"
                                width="200"
                                className="object-contain rounded-md border-gray-400 border-2"
                                />
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Abc Def</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam soluta? Nam iusto quisquam harum!"</p>
                            </div>        
                    </BackgroundGradient>
                </div>
                <div className="flex justify-center">
                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                              <Image
                                src={'/images/worker-2.jpg'}
                                alt="person-1"
                                height="180"
                                width="180"
                                className="object-contain rounded-md border-gray-400 border-2"
                                />
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Abc Def</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam soluta? Nam iusto quisquam harum!"</p>
                            </div>        
                    </BackgroundGradient>
                </div>
                <div className="flex justify-center">
                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                              <Image
                                src={'/images/worker-3.jpg'}
                                alt="person-1"
                                height="200"
                                width="200"
                                className="object-contain rounded-md border-gray-400 border-2"
                                />
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Abc Def</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam soluta? Nam iusto quisquam harum!"</p>
                            </div>        
                    </BackgroundGradient>
                </div>
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/workers"}>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    View All Workers
                </button>
            </Link>
        </div>
    </div>
  )
}

export default FeauturedCard