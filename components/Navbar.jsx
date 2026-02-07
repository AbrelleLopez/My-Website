"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            setLastScrollY(currentScrollY);
        };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

return (
    <nav
    className={`fixed top-0 left-0 w-full z-[100] bg-white shadow-navbar transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    style={{ backgroundColor: '#ffffff' }}
    >
    <div className="px-[68px] md:px-12 lg:px-20 py-[10px] flex justify-between items-center">
        <img src="/images/AbrelleLogoT.png" alt="Logo" className="h-[70px]" />

        <ul className="flex gap-[35px] items-center list-none text-[22px]">
            <li className="hover:text-gray-700 transition cursor-pointer">Home</li>
            <li className="hover:text-gray-700 transition cursor-pointer">About</li>
            <li className="hover:text-gray-700 transition cursor-pointer">Projects</li>
            <li className="hover:text-gray-700 transition cursor-pointer">Skills</li>
            <li className="hover:text-gray-700 transition cursor-pointer">Contact</li>

            <li>
                <button className="px-[7px] py-[3px] text-[20px] bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
                    Download CV
                </button>
            </li>

            <li>
                <button className="hover:opacity-70 transition">
                    <img src="/icons/moon.png" alt="0" className="w-10 h-10 py-[7px] px-[5px]"/>
                </button>
            </li>
        </ul>
    </div>
    </nav>
    );
}