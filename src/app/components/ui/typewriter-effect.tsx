"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text into an array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, transform: "translateY(0px)" },
        {
          duration: 0.2,
          delay: stagger(0.05),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, wordIndex) => (
        <div key={`word-${wordIndex}`} className="inline-block">
          {word.text.map((char, charIndex) => (
            <motion.span
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              key={`char-${charIndex}`}
              className={cn(
                "inline-block text-base sm:text-xl md:text-3xl lg:text-5xl font-bold font-sans",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-green-800",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
