'use client';
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingFeatures() {
    const upcomingFeatures = [
        {
            title: "Enhanced Booking System",
            description: "Enjoy a seamless booking experience with our enhanced booking system. Book services directly through our platform with ease.",
            link: "#"
        },
        {
            title: "Improved User Profiles",
            description: "Get to know service providers better with improved user profiles. Access detailed information and ratings before making a decision.",
            link: "#"
        },
        {
            title: "Expanded Service Categories",
            description: "Explore a wider range of service categories to meet all your needs. From pet grooming to event planning, we've got you covered.",
            link: "#"
        },
        {
            title: "Mobile App Launch",
            description: "Stay connected on-the-go with our upcoming mobile app. Enjoy all the features of Neighbourly Connect right at your fingertips.",
            link: "#"
        },
        {
            title: "Integrated Payment System",
            description: "Experience hassle-free payments with our integrated payment system. Pay for services securely and conveniently within the app.",
            link: "#"
        },
        {
            title: "Community Forums",
            description: "Engage with your neighbors and share recommendations on our community forums. Stay connected and informed within your community.",
            link: "#"
        }
    ];
    
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl text-teal-600 font-semibold tracking-wide uppercase">Upcoming Features</h2>
        </div>
        </div>
        <div className="mt-10">
          <HoverEffect items={upcomingFeatures}/>
        </div>
    </div>
  )
}

export default UpcomingFeatures