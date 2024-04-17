"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";


const workersData = [
    {
        id:1,
        name: "Ravi Kumar",
        img: "https://example.com/images/ravi_kumar.jpg",
        rating: 4.8,
        reviews: 35
    },
    {
        id:2,
        name: "Priya Singh",
        img: "https://example.com/images/priya_singh.jpg",
        rating: 4.5,
        reviews: 28
    },
    {
        id:3,
        name: "Amit Patel",
        img: "https://example.com/images/amit_patel.jpg",
        rating: 4.9,
        reviews: 42
    },
    {
        id:4,
        name: "Sneha Sharma",
        img: "https://example.com/images/sneha_sharma.jpg",
        rating: 4.7,
        reviews: 31
    },
    {
        id:5,
        name: "Rajesh Gupta",
        img: "https://example.com/images/rajesh_gupta.jpg",
        rating: 4.6,
        reviews: 39,
    }
];


function page() {
    return (
        //   <div className="min-h-screen bg-black py-12 pt-36 ">
        <HeroHighlight className="h-full" containerClassName="h-full py-12 pt-36 ">
            
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    <Highlight className="text-black px-8 dark:text-white text-lg md:text-7xl text-center font-sans font-bold mb-8">
                         Workers 
                    </Highlight>
                </h1>  
                <div className="flex flex-wrap justify-center gap-8">
                    {workersData.map((worker)=>(
                        <CardContainer key={worker.id} className="inter-var m-4">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                {worker.name}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/images/worker-boss-3.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    <div className="flex items-center mb-5">
                                            <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">{worker.rating}</p>
                                            <p className="ms-2 font-medium text-gray-900 dark:text-white">Exellent</p>
                                            <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{worker.reviews} reviews</p>
                                            {/* <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a> */}
                                        </div>
                                    
                                </CardItem>
                                <Link href={"/workers/profile"}>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Hire →
                                </CardItem>
                                </Link>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            
          {/* </div> */}
        </HeroHighlight>
         
    )
  }
  
  export default page