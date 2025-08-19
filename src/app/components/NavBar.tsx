"use client";
import Image from "next/image";
import Modal from "react-modal";
import { motion, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import {assets} from "@/assets/assets";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };
    const navItems = [
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" },
    ];
    return (
        <>
            <nav
                className={`w-full flex justify-between items-center top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%]  fixed py-5 z-99 ${
                    isScrolled
                        ? "backdrop-blur-md border-b border-amber-50"
                        : "bg-transparent"
                }`}
            >
                <a  className="flex items-center justify-center gap-2" >
                    <h2 className="text-gray-800 font-bold sm:text-4xl text-2xl uppercase ">Corn</h2>
                    <Image
                        src={assets.corn}
                        alt="Logo"
                        className="w-10 cursor-pointer mr-14"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    />
                </a>
                <MotionConfig>
                    <ul className="hidden md:flex gap-6 px-12 rounded-full py-3 lg:gap-8 border border-gray-400 text-gray-700 ">
                        {navItems.map((item) => (
                            <motion.li
                                key={item.id}
                                whileHover={{ scale: 1.2, color: "black" }}
                                onClick={() => scrollToSection(item.id)}
                            >
                                <motion.a className="font-serif" href={`#${item.id}`}>
                                    {item.label}
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </MotionConfig>
                <div className="flex gap-4 items-center">
                    <button>
                        <Image src={assets.moon_icon} alt="Theme" className="w-6" />
                    </button>
                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-1 border border-gray-400 rounded-full px-12 py-3"
                    >
                        Contact
                        <Image
                            src={assets.arrow_icon}
                            alt="Arrow"
                            className="w-3 cursor-pointer"
                        />
                    </a>
                    <button
                        className="block md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Image src={assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <Modal
                        isOpen={isMobileMenuOpen}
                        onRequestClose={() => setIsMobileMenuOpen(false)}
                        style={{
                            content: {
                                height: "max-content",
                                marginTop: "2rem",
                                paddingTop: 0,
                                borderRadius: "1rem",
                            },
                            overlay: { backgroundColor: "rgba(0, 0, 0, 0.034)" },
                        }}
                    >
                        <motion.div
                            className="md:hidden backdrop-blur-md border rounded-2xl bg-glass border-glass py-4 mt-4"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                bounce: 0.7,
                            }}
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-foreground hover:text-primary  transition-colors duration-300 font-medium py-2 "
                                    >
                                        <motion.span
                                            className="transition-all duration-300"
                                            whileHover={{
                                                scale: 1.1,
                                                textShadow: "0 0 8px rgba(245, 158, 11, 0.6)",
                                            }}
                                        >
                                            {item.label}
                                        </motion.span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </Modal>
                )}
            </nav>
        </>
    );
}
