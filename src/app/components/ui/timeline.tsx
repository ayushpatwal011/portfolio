"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import mainImage from "@/public/main.png";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans " ref={containerRef}>
      <div className="max-w-7xl mx-auto py-4 px-4 md:py-10 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-4xl mb-4 text-emerald-900  max-w-4xl font-semibold">
          Who I am ?
        </h2>
        <div className="w-full flex-col  gap-3 justify-center ">
          <div className="flex justify-center">
            <div className="w-24 h-24 md:w-40 md:h-40">
              <Image
                src={mainImage}
                alt="img "
                width={1000}
                height={100}
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="flex justify-center">
          <p className=  "text-gray-700  text-normal md:text-2xl max-w-3xl p-4 ">
            I&apos;am Ayush MERN Stack Developer with a strong foundation in
            building dynamic, responsive, and user-focused web applications.
            Currently pursuing a Bachelor&apos;s degree in Computer Applications
            (BCA), I specialize in technologies like NextJS, JaavaScript,
            MongoDB, Express.js, React.js, and Node.js.
          </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-black border  p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-emerald-900 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-white via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
