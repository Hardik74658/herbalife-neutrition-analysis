"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";



function WhyChooseUs() {
    const content = [
        {
            title: "Why Choose Us?",
            description: ""
        },
        {
            title: "Wide Range of Services",
            description: "From plumbing and electrical work to tutoring and housekeeping, Neighbourly Connect offers a diverse range of services to cater to all your needs."
        },
        {
            title: "Verified and Trusted Professionals",
            description: "We ensure that all service providers on our platform are verified and trusted, so you can have peace of mind knowing you're hiring reliable professionals."
        },
        {
            title: "Transparent Ratings and Reviews",
            description: "Make informed decisions with our transparent rating and review system. See what others have to say about service providers before making a booking."
        },
        {
            title: "Convenient Booking Options",
            description: "Choose between booking services directly through our platform or simply getting in touch with the service provider. We offer flexibility to suit your preferences."
        },
        {
            title: "Community-Centric Approach",
            description: "Neighbourly Connect fosters a sense of community by connecting residents with local service providers. Support your neighbors while getting your tasks done efficiently."
        },
        {
            title: "Continuous Improvement",
            description: "We are committed to constantly improving our platform to better serve you. Expect regular updates and enhancements to enhance your user experience."
        }
    ];
    

    return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs