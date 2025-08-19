"use client";
import React from "react";
import {motion} from "framer-motion";

function Contact() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/tai_corn.04/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/Taicorn2004",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-facebook-icon lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/JustTaiCorn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      ),
    },
  ];
  return (
    <section
      id="contact"
      className="py-12 px-6 w-full mx-auto border-t border-glass-border bg-white/10 backdrop-blur-md"
    >
      <footer className="max-w-6xl mx-auto">
        <motion.div  initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{duration:0.5, ease: "easeInOut"}} viewport={{once:true}}
                     className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3>
              <span className="text-xl font-bold text-gray-800">
                Contact Me
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              My goal is to learn something new each day to ensure a comfortable
              future with my Darling
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3>
              <span className="text-xl font-bold text-gray-800">
                Quick Links
              </span>
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.href}
                  target="_blank"
                  className="p-3 bg-glass rounded-full group border hover:shadow-glow hover:border-primary/50 border-glass-border transition-all duration-300"
                >
                  {socialLink.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3>
              <span className="text-xl font-bold text-gray-800">
                Built With
              </span>
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-3 py-2 text-center leading-relaxed bg-gray-300/20 text-gray-800  rounded-full text-xs font-medium">
                Next.js
              </span>
              <span className="px-3 py-2 bg-gray-300/20  leading-relaxed text-gray-800 rounded-full text-xs font-medium">
                React
              </span>
              <span className="px-3 py-2 bg-gray-300/20  leading-relaxed text-gray-800  rounded-full text-xs font-medium">
                TypeScript
              </span>
              <span className="px-3 py-2 bg-gray-300/20  leading-relaxed text-gray-800  rounded-full text-xs font-medium">
                Tailwind
              </span>
              <span className="px-3 py-2 bg-gray-300/20  leading-relaxed text-gray-800  rounded-full text-xs font-medium">
                Shadcn UI
              </span>
              <span className="px-3 py-2 bg-gray-300/20  leading-relaxed text-gray-800  rounded-full text-xs font-medium">
                Framer Motion
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div  initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{duration:0.5, delay:0.2}} viewport={{once:true}}
                     className="mt-8 pt-8 border-t border-glass text-center">
          <p className="text-gray-500 text-lg">
            © 2025 TaiCorn. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </section>
  );
}

export default Contact;
