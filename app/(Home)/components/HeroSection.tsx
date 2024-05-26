import React from 'react'
import { GiCardJackSpades } from "react-icons/gi";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">Hi, I am Pranay 🫰🏼 <br/>
        <span className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 underline underline-offset-8 decoration-cyan-500">A Product Manager</span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300"> 
          {
            "Based in Singapore 🇸🇬, building secure, scalable cloud-native products that drive industry transformation"
          }
        </p>
        {/* <Link className=" inline-block" href={"mailto:pranaysinghdev@gmail.com"}>
          <div><h1> Contact ME</h1></div>
        </Link> */}
        <a className="inline-block" href="/PranayResume.pdf" download>
          <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
          Download Resume
        </button>
        </a>
      </div>
      <div className="flex justify-center -rotate-3 animate-float-rotate">
        <GiCardJackSpades style={{ width: '20rem', height: '20rem' }}/>
      </div>
    </div>
  )
}

