"use client";

import React from "react";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/20/solid";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center mx-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[7px] px-1 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] w-5 h-5" />
          <h1 className="Welcome-text text-[13px]">Web Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            personal projects
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m trying to become a fullstack web developer.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white  rounded-lg max-w-[200px]"
        >
          Scroll to see more!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="h-full w-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icon"
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
