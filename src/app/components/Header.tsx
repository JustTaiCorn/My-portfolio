"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowBigRight } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
import CircularText from "./CircularText";
import { assets } from "@/assets/assets";
export default function Header() {
  const title = "Aspiring Frontend Developer";
  const description =
    "I am passionate about crafting modern, responsive, and user-friendly web interfaces. With a growing foundation in React, Tailwind CSS, and modern JavaScript, I am eager to become a professional frontend developer.";
  return (
    <div className=" relative max-w-4xl text-center mx-auto flex flex-col   items-center justify-center min-h-screen gap-4">
      <div className="relative">
        <Image
          src={assets.MyAvatar}
          alt="Logo"
          className="w-32 h-32 rounded-full"
        />
        <div className="absolute top-[-27%] right-[-29%]">
          <CircularText
            text="REACHING*TO*THE*SKY*"
            onHover="speedUp"
            spinDuration={20}
          />
        </div>
      </div>
      <h3 className="text-xl md:text-2xl mb-2 font-semibold mt-5">
        Hi! I&apos;m Tai Corn
      </h3>
      <div className=" ">
        <div className="flex text-wrap justify-center items-center gap-3 md:gap-5 ">
          {title.split(" ").map((word, index) => (
            <motion.p
              key={index}
              className="text-2xl font-bold uppercase md:text-5xl lg:text-6xl inline-block"
              initial={{ opacity: 0, filter: "blur(15px)", x: "50%" }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.75,
                ease: [0.18, 0.89, 0.82, 1.04],
              }}
            >
              {word === " " ? "\u00A0" : word}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="px-4 py-2 flex flex-wrap justify-center items-center gap-1">
        {description.split(" ").map((word, index) => (
          <motion.p
            key={index}
            className="text-xl md:text-2xl text-gray-700  inline-block"
            initial={{ opacity: 0, filter: "blur(10px)", y: "50%" }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: index * 0.2 + 0.5,
              duration: 0.25,
              ease: [0.18, 0.89, 0.82, 1.04],
            }}
          >
            {word === " " ? "\u00A0" : word}
          </motion.p>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center justify-center">
        <motion.div
          className=" rounded-full bg-black"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <a
            href="#contact"
            className="px-5 py-4 flex gap-2  text-white hover:text-shadow-2xs transition-colors duration-300"
          >
            Contact Me <ArrowBigRight className="w-5" />
          </a>
        </motion.div>
        <motion.div
          className=" rounded-full border-gray-400 border"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/sample-resume.pdf"
            download
            className="px-5 py-4 flex gap-2 "
          >
            My Profile
            <ArrowDownToLine className="w-4" />
          </a>
        </motion.div>
      </div>
        <button onClick={()=> window.scrollTo({top:0, behavior:"smooth"})}
            className=" bottom-4 fixed right-4 sm:right-5 z-99 bg-black text-white rounded-full p-3 sm:p-4 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-arrow-big-up-dash-icon lucide-arrow-big-up-dash">
                <path
                    d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
                <path d="M9 20h6"/>
            </svg>
        </button>
    </div>
  );
}
