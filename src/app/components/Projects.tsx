"use client";
import React from 'react';
import {motion} from "framer-motion";
import GradientText from "@/app/components/GradientText";
import TypewriterText from "@/app/components/Typewriter-text";

function Projects() {

    return (
        <section id="projects" className="min-h-screen py-20 px-6 w-full flex flex-col justify-start items-center">
                <div className="flex w-full items-center  gap-4 px-8 max-w-6xl mx-auto">
                <motion.div
                    className="h-[2px] bg-gradient-to-r from-[#111111] to-[#EEEEEE] flex-1"
                    initial={{ width: "100%", opacity: 0, x: -50 }}
                    whileInView={{ width: "100%", opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <GradientText
                        colors={["#111111", "#EEEEEE", "#393E46", "#6283ca"]}
                        animationSpeed={5}
                        showBorder={false}
                        className="h3 uppercase font-semibold text-2xl md:text-5xl lg:text-6xl w-full"
                    >
                        Feature Projects
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

            <motion.div initial={{opacity: 0 }} whileInView={{opacity:1}} viewport={{once:true}}
                        transition={{duration:0.5,delay:0.2}} className=" max-w-5xl text-center px-8 text-wrap my-8">
                <TypewriterText text="This is a showcase of my applications, reflecting my passion for learning and expanding my experience in the future."
                                speed={10}         className="font-semibold  sm:text-2xl mb-3 text-gray-700"/>
            </motion.div>
        </section>
    );
}

export default Projects;