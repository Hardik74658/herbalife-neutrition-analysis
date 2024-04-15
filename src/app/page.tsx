import { Brand } from "@/components/Brand";
import FeauturedCard from "@/components/FeauturedCard";
import { HeroSec } from "@/components/HeroSec";
import HeroSection from "@/components/HeroSection";
import TestinomialCards from "@/components/TestinomialCards";
import UpcomingFeatures from "@/components/UpcomingFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/95 dark:bg-black antialiased bg-grid-small-white/[0.2]">
      <HeroSection/>
      {/* <HeroSec/> */}
      <FeauturedCard/>
      <WhyChooseUs/>
      <TestinomialCards/>
      <UpcomingFeatures/>
      <Brand/>
      
    </main>  
  );
}
