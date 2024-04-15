"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestinomialCards() {

    const testimonials = [
        {
            quote: "Neighbourly Connect helped me find a reliable electrician in no time! The service provider I hired was efficient and courteous. Definitely recommend!",
            name: "Rajesh Sharma",
            title: "Homeowner"
        },
        {
            quote: "As a tutor, Neighbourly Connect has been a blessing for me. I've been able to connect with students in my area and expand my teaching business.",
            name: "Priya Patel",
            title: "Tutor"
        },
        {
            quote: "I'm impressed by how Neighbourly Connect brings our community together. It's convenient, transparent, and supports local businesses. Truly a remarkable platform!",
            name: "Amit Kumar",
            title: "Local Resident"
        },
        {
            quote: "Neighbourly Connect made it easy for me to find skilled professionals for various household tasks. It's a user-friendly and reliable platform. Highly recommended!",
            name: "Anjali Singh",
            title: "Homeowner"
        },
        {
            quote: "I appreciate Neighbourly Connect's commitment to transparency. The rating system helped me make informed decisions when hiring services. Fantastic platform!",
            name: "Suresh Menon",
            title: "Local Resident"
        },
        {
            quote: "I found a great housekeeper through Neighbourly Connect. The booking process was seamless, and the service exceeded my expectations. Thank you!",
            name: "Pooja Sharma",
            title: "Homeowner"
        },
        {
            quote: "Neighbourly Connect has been invaluable in finding reliable service providers. It's user-friendly and efficient, making it my go-to platform for local services.",
            name: "Manoj Verma",
            title: "Local Resident"
        },
        {
            quote: "I've had a great experience using Neighbourly Connect. It's a game-changer for connecting with local businesses. Kudos to the team behind this amazing platform!",
            name: "Neha Gupta",
            title: "Local Resident"
        }
    ];

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default TestinomialCards