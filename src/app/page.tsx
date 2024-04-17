import { Brand } from "@/components/Brand";
import FeauturedCard from "@/components/FeauturedCard";
import { GridImages } from "@/components/GridImages";
import { HeroSec } from "@/components/HeroSec";
import HeroSection from "@/components/HeroSection";
import TestinomialCards from "@/components/TestinomialCards";
import UpcomingFeatures from "@/components/UpcomingFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CEOs } from "@/components/CEOs";
import  Footer  from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/95 dark:bg-black antialiased dark:bg-grid-small-white/[0.2] bg-grid-small-black">
      <HeroHighlight>
        <HeroSection/>
        {/* <GridImages/> */}
        {/* <HeroSec/> */}
        <FeauturedCard/>
        <WhyChooseUs/>
        <TestinomialCards/>
        <UpcomingFeatures/>
        {/* <Brand/> */}
        
        <Footer/>
      </HeroHighlight>
    </main>  
  );
}
