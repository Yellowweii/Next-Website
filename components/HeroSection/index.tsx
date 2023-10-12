"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm </span>
            <br />
            <TypeAnimation sequence={["Yellowwei", 1000, "front-end engineer", 1000, "Studied at Nantong University", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          <p className="text-[#adb7be] mb-6 lg:text-xl text-base sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <Image className="absolute" src="/images/hero-image.png" alt="hero image" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
