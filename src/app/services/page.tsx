"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";



const servicesData = [
    {
        id:1,
        name: "Plumbing",
        description: "Need a plumber? Find reliable plumbing services for all your installation and repair needs.",
        img: "https://example.com/images/plumbing.jpg"
    },
    {
        id:2,
        name: "Electrical",
        description: "From wiring to lighting installation, connect with trusted electricians for all your electrical needs.",
        img: "https://example.com/images/electrical.jpg"
    },
    {
        id:3,
        name: "Tutoring",
        description: "Get personalized tutoring for academic subjects or skill development from experienced tutors.",
        img: "https://example.com/images/tutoring.jpg"
    },
    {
        id:4,
        name: "Cleaning",
        description: "Need help keeping your home or office clean? Hire professional cleaning services for a spotless space.",
        img: "https://example.com/images/cleaning.jpg"
    },
    {
        id:5,
        name: "Gardening",
        description: "Transform your outdoor space with expert gardening services. From landscaping to maintenance, we've got you covered.",
        img: "https://example.com/images/gardening.jpg"
    }
  ];
  

function page() {
  return (
    
      
    //   <div className="min-h-screen bg-black py-12 pt-36">
        <HeroHighlight className="h-full" containerClassName="h-full py-12 pt-36 ">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 ">
                <Highlight className="text-black px-8 dark:text-white text-lg md:text-7xl text-center font-sans font-bold mb-8">
                    Services 
                </Highlight>
            </h1>  
            
            <div className="flex flex-wrap justify-center gap-8">
                {servicesData.map((services)=>(
                    <CardContainer key={services.id} className="inter-var m-4">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                            {services.name}
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            {services.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src="/images/Wallpaper-HUGE IF TRUE-Cleo.jpg"
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
                                className="px-4 py-2 rounded-xl text-xs font-normal text-black dark:text-white"
                            >
                                <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800"> 5 Workers </p>
                                
                            </CardItem>
                            <Link href={"/workers"}>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                See Workers ->
                            </CardItem>
                            </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
                
            </div>
        </HeroHighlight>
        // </div>
  )
}

export default page