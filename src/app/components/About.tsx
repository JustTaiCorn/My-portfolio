"use client";
import GradientText from "./GradientText";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageCarouselWithCaption } from "./ImageCarouselWithCaption";
import {infoList} from "@/assets/assets";
export const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center mx-auto w-full"
        >
            <div className="flex items-center w-full gap-4 px-8 max-w-6xl mx-auto">
                <motion.div
                    className="h-[2px] bg-gradient-to-r from-[#111111] to-[#EEEEEE] flex-1"
                    initial={{ width: "100%", opacity: 0, x: -50 }}
                    whileInView={{ width: "100%", opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <GradientText
                        colors={["#111111", "#EEEEEE", "#393E46", "#6283ca"]}
                        animationSpeed={5}
                        showBorder={false}
                        className="h3 uppercase font-semibold text-2xl md:text-5xl lg:text-6xl w-full"
                    >
                        About Me
                    </GradientText>
                </motion.div>

                <motion.div
                    className="h-[2px] bg-gradient-to-r from-[#EEEEEE] to-[#111111] flex-1"
                    initial={{ width: "100%", opacity: 0, x: 50 }}
                    whileInView={{ width: "100%", opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                />
            </div>
            {/** Card and skills**/}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-20 mt-8 mx-auto max-w-6xl mb-8 px-4">
                <div className="w-full sm:w-80 p-4 border border-gray-400 rounded-xl shadow-md space-y-4">
                    {infoList.map((info, index) => (
                        <div
                            key={index}
                            className="py-5 px-6 border border-gray-400 rounded-xl hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] duration-500 cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <Image src={info.icon} alt={info.title} className="w-10 h-10" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">{info.title}</h3>
                                    <p className="text-sm text-gray-600">{info.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full bg-white/20 backdrop-blur-md sm:w-80 lg:w-96 xl:w-[700px] flex flex-col p-5 border border-gray-400 rounded-xl shadow-md space-y-4">
                    <h3
                        className="font-semibold text-xl mb-3 text-left
          "
                    >
                        Portfolio Gallery
                    </h3>
                    <ImageCarouselWithCaption />
                </div>
            </div>
            <div className=" max-w-5xl text-center px-8 text-wrap ">
                <h3 className="font-semibold  sm:text-xl mb-3 text-gray-700">
                    This is my favorite idol, a singer whose music I absolutely love. I’ve
                    really immersed myself in her songs, and every time I listen, I feel
                    inspired and connected. Her voice and passion for music make me admire
                    her even more.
                </h3>
            </div>
        </section>
    );
};
