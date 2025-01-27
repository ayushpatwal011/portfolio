import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Hero = () => {
  const words = [
    { text: "I ", className: "text-black" },
    { text: "build", className: "text-black" },
    { text: "functional", className: "text-black" },
    { text: " Applications", className: "text-green-800" },
  ];
  return (
    <div className="flex h-96 flex-col items-center justify-center ">
      <TypewriterEffect words={words} />
      <p className="md:text-2xl text-emerald-950 font-semibold sm:text-base p-3">
        Hi! I am Ayush Patwal Full Satack Web Developer, 20 years old
      </p>
    </div>
  );
};

export default Hero;
