import { DirectionedImage } from '@/components/DirectionedImage';
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from 'react'

function page() {

  const image= "/images/worker-boss-2.png";
  const name ="Jhon Doe"
  return (
    <HeroHighlight className="w-full h-screen">
          
      
        <div className="hero-content p-0 m-0 flex-col lg:flex-row w-full h-screen justify-evenly">
            <DirectionedImage image={image} name={name}  />
            <div>
                <h1 className="text-5xl font-bold">
                    <Highlight className="text-black dark:text-white text-lg md:text-7xl text-center font-sans font-bold mb-8">
                        {name}
                    </Highlight>    
                </h1>
                <ul className='text-black dark:bg-transparent dark:text-white list-disc bg-white w-fit  list-inside p-0 m-8 '>
                    <li>Electircian</li>
                    <li>Plumber</li>
                    <li>Plumber</li>
                    <li>Plumber</li>
                </ul>
                {/* <ul className="w-48 my-8 text-sm font-medium text-gray-900 bg-white  border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Electircian</li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Plumber</li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Plumber</li>
                    <li className="w-full px-4 py-2 rounded-b-lg">Plumber</li>
                </ul>    */}
                <button
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                    Contact<i className="arrow right"></i> →
                </button>
            </div>
        </div>
      
      </HeroHighlight>

    )
}

export default page