"use client";

import { useState, useEffect } from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
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

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv/CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{
                backgroundColor: darkMode ? '#000000' : '#ffffff',
                boxShadow: darkMode ? '0 4px 16px rgba(255, 255, 255, 0.15)' : '0 4px 16px rgba(0, 0, 0, 0.15)'
            }}
        >
            <div className="px-[68px] md:px-12 lg:px-20 py-[10px] flex justify-between items-center">
                <img
                    src={darkMode ? "/images/AbrelleLogoInvertedT.png" : "/images/AbrelleLogoT.png"}
                    alt="Logo"
                    className="h-[70px]"
                />

                <ul className="flex gap-[30px] items-center list-none text-[20px]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                    <li className="hover:text-gray-500 transition cursor-pointer" onClick={scrollToTop}>Home</li>
                    <li className="hover:text-gray-500 transition cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
                    <li className="hover:text-gray-500 transition cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</li>
                    <li className="hover:text-gray-500 transition cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className="hover:text-gray-500 transition cursor-pointer" onClick={scrollToBottom}>Contact</li>

                    <li>
                        <button
                            onClick={handleDownloadCV}
                            style={{ padding: '10px 15px', fontSize: '20px', backgroundColor: '#9544FF', color: '#FFFFFF',
                                fontWeight: '150', borderRadius: '5px', border: 'none', cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#7c3aed'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#9544FF'}
                        >
                            Download CV
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={toggleDarkMode}
                            style={{ backgroundColor: '#9544FF', border: 'none', borderRadius: '5px', padding: '10px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#7c3aed'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#9544FF'}
                        >
                            <img
                                src={darkMode ? "/icons/ClickDay.png" : "/icons/ClickNight.png"}
                                className="w-[25px] h-[25px]"
                                style={{ display: 'block' }}
                                alt="Toggle theme"
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}