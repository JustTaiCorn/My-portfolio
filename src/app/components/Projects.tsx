"use client";
import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/app/components/GradientText";
import TypewriterText from "@/app/components/Typewriter-text";
import { projects } from "@/assets/assets";
import Image from "next/image";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 sm:px-2 w-full flex flex-col justify-start items-center"
    >
      <div className="flex w-full items-center  gap-4 px-2 max-w-6xl mx-auto mb-5">
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
          transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=" max-w-5xl text-center px-8 text-wrap my-8"
      >
        <TypewriterText
          text="This is a showcase of my applications, reflecting my passion for learning and expanding my experience in the future."
          speed={10}
          className="font-semibold  sm:text-2xl mb-3 text-gray-700"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto  mt-8 ">
        {/* Project Cards */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 space-y-4 border border-glass hover:border-gray-600 rounded-xl shadow-lg bg-white/20 backdrop-blur-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
            }} /* Changed from y: 10 to y: -10 to make it move up */
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover border-glass border rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-gray-700 my-4 ">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-300/20 text-gray-800 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-start gap-4">
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white  rounded-md transition-colors duration-300 flex items-center w-fit gap-2 py-2 px-3 bg-black hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_10px_rgba(0,0,0,0.35)] text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github-icon lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black border text-nowrap border-gray-400 rounded-md transition-all duration-300 flex items-center w-fit gap-1.5 py-2 px-3 hover:shadow-[0_10px_10px_rgba(0,0,0,0.25)] hover:transform hover:scale-105 hover:-translate-y-1 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-telescope-icon lucide-telescope"
                  >
                    <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
                    <path d="m13.56 11.747 4.332-.924" />
                    <path d="m16 21-3.105-6.21" />
                    <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
                    <path d="m6.158 8.633 1.114 4.456" />
                    <path d="m8 21 3.105-6.21" />
                    <circle cx="12" cy="13" r="2" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
