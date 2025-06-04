"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import React from "react";
import img from "@/public/vegcart.png";
import Link from "next/link";

export function ProjectTwo({
  name,
  content,
  liveDemo,
  githubCode,
}: {
  name: string;
  content: string;
  liveDemo: string;
  githubCode: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-3 md:p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-emerald-800 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-emerald-950 text-sm max-w-sm mt-2 "
        >
          {content}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-6 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Link href={liveDemo}>
            Live Demo Try now →
            </Link>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-6 py-2 rounded-xl bg-black  text-white text-xs font-bold"
          >
           <Link href={githubCode}>
           GitHub Code
           </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
