import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Hero = () => {
  const words = [
    { text: "I ", className: "text-black" },
    { text: "Build", className: "text-black" },
    { text: "Functional", className: "text-black" },
    { text: " Applications", className: "text-green-800" },
  ];
  return (
    <div className="flex h-96 flex-col items-center justify-center ">
      <TypewriterEffect words={words} />
      <p className="text-2xl  md:text-4xl text-emerald-950 font-semibold  p-3">
        Hi! I am Ayush Patwal Full Stack Web Developer, 20 years old
      </p>
    </div>
  );
};

export default Hero;
