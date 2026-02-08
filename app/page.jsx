"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
    const [selectedProject, setSelectedProject] = useState(1);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const projects = {
        1: {
            title: "Food Order Application (MaryHunger Heights)",
            tools: "Java, Java Swing (GUI), Gradle, XML, JSON",
            description: "Developed a desktop-based food ordering system.",
            contributions: ["Developed all Java-based GUI components", "Performed debugging, refactoring, and bug fixes",
                                "Implemented notification intents", "Added sign-up input validations"]
        },
        2: {
            title: "National Quiz Bee Competition System",
            tools: "WAMP, MySQL, Figma (UI Prototype), UML, ERD & Relational Schema",
            description: "Designed and developed a complete competition management system for handling student participants, schools, quiz categories, and scoring.",
            contributions: ["Created all user interface GUIs", "Designed the SQL database and routines",
                                "Updated and refined system documentation", "Implemented Category, Leaderboard, and Participant MVC (participant side)",
                                "Implemented Schools, Categories, and Scoreboard MVC (admin side)", "Modified server-side database methods",
                                "Organized and cleaned MVC structure", "Added Javadoc comments throughout the codebase", "Performed debugging and fixes"]
        },
        3: {
            title: "SLU Shuttle Booking (LouisianLink)",
            tools: "Node.js, JavaScript, Prisma ORM, SQL, JSX, npm",
            description: "Developed a web-based shuttle booking system for Saint Louis University shuttles to manage user reservations and transportation scheduling.",
            contributions: ["Assisted in leading the project and coordinating development tasks", "Designed and implemented the SQL database schema",
                                "Added user-friendly enhancements to improve usability", "Refactored code for better readability and maintainability"]
        },
        4: {
            title: "Hangman Game",
            tools: "Java, Java Swing (GUI), CORBA, ORB, SQL, Python",
            description: "Developed a multiplayer Hangman game.",
            contributions: ["Developed all GUI components for both player and admin", "Implemented the Leaderboard model and controller",
                                "Built a fully functional game lobby with CRUD operations connected to an SQL", "Debugged and fixed various system features (fixes)"]
        }
    };

    const currentProject = projects[selectedProject];

    return (
        <div style={{ backgroundColor: darkMode ? '#000000' : '#FFFFFF', transition: 'background-color 0.3s ease' }}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="relative pt-[8vw] min-h-screen flex flex-col justify-center px-[5vw]">
                <div className="max-w-6xl flex gap-[3vw] items-center">
                    <div className="flex-1">
                        <h1 className="mt-[5vw] text-[2.5vw] leading-[1.2]" style={{ color: darkMode ? '#FFFFFF' : '#494949' }}>
                            Hi, I'm Abrelle Lopez!
                        </h1>
                        <h1 className="text-[3.5vw] leading-[1.2] mt-[1vw]"
                            style={{ fontFamily: 'Encode Sans Condensed, sans-serif !important', fontWeight: '900' }}>
                            <span style={{ color: darkMode ? '#FFFFFF' : '#494949' }}>COMPUTER SCIENCE STUDENT <br/> & ASPIRING</span>{' '}
                            <span style={{ color: '#9333ea' }}>SOFTWARE DEVELOPER</span>
                        </h1>
                        <p className="mt-[2vw] text-[1.4vw] leading-[1.3] max-w-xl" style={{ color: darkMode ? '#D1D5DB' : '#4B5563' }}>
                            Specializing in backend development using Java, with hands-on experience designing
                            application logic, working with relational databases, and integrating modern web
                            technologies through academic and personal projects.
                        </p>
                        <button className="mt-[1.5vw] text-[1.5vw] px-[5vw] py-[0.6vw] font-semibold rounded-lg transition"
                            style={{
                                backgroundColor: darkMode ? '#FFFFFF' : '#1D1D1D',
                                color: darkMode ? '#000000' : '#FFFFFF',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = darkMode ? '#E5E5E5' : '#404040'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = darkMode ? '#FFFFFF' : '#1D1D1D'}
                            onClick={() => scrollToSection('about')}
                        >
                            ABOUT ME
                        </button>
                        <div className="mt-[6vw] flex gap-[3vw]">
                             <a href="https://linkedin.com/in/abrelle-yin-lopez" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                 <img src="/icons/linkedin.png" alt="LinkedIn" className="w-[2.8vw] h-[2.8vw]" style={{ filter: darkMode ? 'invert(1)' : 'none' }}/>
                             </a>
                             <a href="https://github.com/AbrelleLopez" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                 <img src="/icons/github.png" alt="GitHub" className="w-[2.8vw] h-[2.8vw]" style={{ filter: darkMode ? 'invert(1)' : 'none' }}/>
                             </a>
                             <a href="https://gitlab.com/abrellelopez" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                 <img src="/icons/gitlab.png" alt="GitLab" className="w-[2.8vw] h-[2.8vw]" style={{ filter: darkMode ? 'invert(1)' : 'none' }}/>
                             </a>
                             <a href="https://www.facebook.com/abrelleyin.lopez/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                 <img src="/icons/facebook.png" alt="Facebook" className="w-[2.8vw] h-[2.8vw]" style={{ filter: darkMode ? 'invert(1)' : 'none' }}/>
                             </a>
                             <a href="https://www.instagram.com/abr_ellee/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                 <img src="/icons/instagram.png" alt="Instagram" className="w-[2.8vw] h-[2.8vw]" style={{ filter: darkMode ? 'invert(1)' : 'none' }}/>
                             </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <img src="/images/MeStart.jpg" alt="Abrelle Lopez" className="w-[27vw] h-[43vw] object-cover rounded-full"/>
                    </div>
                </div>

                <div id="projects" className="max-w-6xl mt-[15vw] mb-[8vw]">
                    <h1 className="text-[3.5vw] leading-[1.2] mb-[0.5vw]"
                        style={{ fontFamily: 'Encode Sans Condensed, sans-serif !important', fontWeight: '900', color: '#9333ea' }}>
                        PROJECTS
                    </h1>

                    <p className="text-[1.4vw] mb-[4vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                        Some of the college projects I contributed to:
                    </p>
                    <div className="flex gap-[2vw] items-start">
                        <div className="flex-shrink-0 -ml-[7vw]">
                            <div className="relative">
                                <img src="/images/ComputerImage.png" alt="PC Screen" className="w-[52vw] h-auto"/>

                                <div className="absolute left-[15%] top-[12%] flex flex-col gap-[1vw]">
                                    <button onClick={() => setSelectedProject(1)}
                                        className="hover:scale-110 transition-transform cursor-pointer bg-white overflow-hidden"
                                        style={{ width: '3.3vw', height: '3.3vw', borderRadius: '1vw', border: selectedProject === 1 ? '0.3vw solid #9333ea' : 'none', padding: '0' }}>
                                        <img src="/images/foodorder.png" alt="App 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1vw' }} />
                                    </button>
                                    <button onClick={() => setSelectedProject(2)}
                                        className="hover:scale-110 transition-transform cursor-pointer bg-white overflow-hidden"
                                        style={{ width: '3.3vw', height: '3.3vw', borderRadius: '1vw', border: selectedProject === 2 ? '0.3vw solid #9333ea' : 'none', padding: '0' }}>
                                        <img src="/images/quizbee.png" alt="App 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1vw' }} />
                                    </button>
                                    <button onClick={() => setSelectedProject(3)}
                                        className="hover:scale-110 transition-transform cursor-pointer bg-white overflow-hidden"
                                        style={{ width: '3.3vw', height: '3.3vw', borderRadius: '1vw', border: selectedProject === 3 ? '0.3vw solid #9333ea' : 'none', padding: '0' }}>
                                        <img src="/images/louisianlink.png" alt="App 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1vw' }} />
                                    </button>
                                    <button onClick={() => setSelectedProject(4)}
                                        className="hover:scale-110 transition-transform cursor-pointer bg-white overflow-hidden"
                                        style={{ width: '3.3vw', height: '3.3vw', borderRadius: '1vw', border: selectedProject === 4 ? '0.3vw solid #9333ea' : 'none', padding: '0' }}>
                                        <img src="/images/hangman.png" alt="App 4" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1vw' }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 -ml-[3.5vw] mt-[3vw]">
                            <h4 className="text-[1.4vw] font-bold mb-[1.5vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                                {currentProject.title}
                            </h4>
                            <p className="text-[1.2vw] leading-[1.5] mb-[1.8vw]" style={{ color: darkMode ? '#D1D5DB' : '#374151' }}>
                                {currentProject.tools}
                            </p>
                            <p className="text-[1.2vw] leading-[1.5] mb-[1.8vw]" style={{ color: darkMode ? '#D1D5DB' : '#374151' }}>
                                {currentProject.description}
                            </p>
                            <h4 className="text-[1.4vw] font-bold mb-[1vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                                My Contributions:
                            </h4>
                            <ul className="list-disc list-inside text-[1.2vw] mb-[1.8vw] space-y-[0.2vw]" style={{ color: darkMode ? '#D1D5DB' : '#4B5563' }}>
                                {currentProject.contributions.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                            <p className="text-[1.4vw] leading-[1.5]" style={{ color: darkMode ? '#D1D5DB' : '#374151' }}>
                                {currentProject.details}
                            </p>
                        </div>
                    </div>
                </div>

                <div id="skills" className="max-w-6xl mt-[8vw] mb-[8vw]">
                    <h1 className="text-[3.5vw] leading-[1.2] mb-[0.5vw]"
                        style={{ fontFamily: 'Encode Sans Condensed, sans-serif !important', fontWeight: '900', color: darkMode ? '#FFFFFF' : '#494949' }}>
                        SKILLS
                    </h1>

                    <div className="flex flex-wrap items-center justify-left lg:justify-start mb-[10vw] mt-[8vw] text-center gap-[3.5vw]">
                        <h2 className="text-[1.7vw] w-[14vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                            USING <br />NOW
                        </h2>
                            <img src="/icons/html.png" alt="html" style={{ width: 'auto', height: '7vw' }} />
                            <img src="/icons/css.png" alt="css" style={{ width: 'auto', height: '7vw' }} />
                            <img src="/icons/java.png" alt="java" style={{ width: 'auto', height: '8vw' }} />
                            <img src="/icons/mysql.png" alt="mysql" style={{ width: 'auto', height: '7vw' }} />
                            <img src="/icons/figma.png" alt="figma" style={{ width: 'auto', height: '7vw' }} />
                            <img src="/icons/git.png" alt="git" style={{ width: 'auto', height: '7vw' }} />
                            <img src="/icons/wamp.png" alt="wamp" style={{ width: 'auto', height: '5.5vw' }} />
                    </div>
                    <div className="flex flex-wrap items-center justify-left lg:justify-start mb-[10vw] text-center gap-[3.5vw]">
                        <h2 className="text-[1.7vw] w-[14vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                            LEARNING
                        </h2>
                            <img src="/icons/javascript.png" alt="javascript" style={{ width: 'auto', height: '6vw' }} />
                            <img src="/icons/nodejs.png" alt="nodejs" style={{ width: 'auto', height: '6vw' }} />
                            <img src="/icons/nextjs.png" alt="nextjs" style={{ width: 'auto', height: '3.5vw' }} />
                            <img src="/icons/tailwind.png" alt="tailwind" style={{ width: 'auto', height: '6vw' }} />
                    </div>
                    <div className="flex flex-wrap items-center justify-left lg:justify-start gap-[7vw] mb-[10vw] text-center">
                        <h2 className="text-[1.7vw] w-[14vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                            OTHER <br />SKILLS
                        </h2>
                        <ul className="list-none text-left text-[1.4vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                            <li>Responsive Web Design</li>
                            <li>Wireframing & Prototyping</li>
                            <li>User Flow Design</li>
                        </ul>
                        <ul className="list-none text-left text-[1.4vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                            <li>Pair Programming</li>
                            <li>Testing & Debugging</li>
                        </ul>
                        <ul className="list-none text-left text-[1.4vw]" style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
                            <li>English</li>
                            <li>Tagalog</li>
                        </ul>
                    </div>
                </div>

                <div id="about" className="relative mt-[8vw]">
                    <div style={{position: 'absolute', top: '10.5vw', left: '0', width: '77vw', height: '0.4vw', backgroundColor: '#9333ea', zIndex: 1 }}></div>

                    <div className="flex gap-[5vw] items-center">
                        <div className="max-w-6xl mt-[8vw] mb-[8vw] relative z-10">
                            <h1 className="text-[7.7vw] leading-[1.2] font-bold mb-[0.5vw] mt-[2vw]"
                                style={{ fontFamily: 'Encode Sans Condensed, sans-serif !important', fontWeight: '900', color: darkMode ? '#FFFFFF' : '#313131' }}>
                                ABOUT.
                            </h1>
                            <h3 className="text-[1.4vw] leading-[1.5] font-bold mt-[10.5vw]" style={{ color: darkMode ? '#D1D5DB' : '#374151' }}>
                                I value clear communication just as much as quality work.
                            </h3>
                            <p className="text-[1.2vw] leading-[1.5] mt-[1.4vw]" style={{ color: darkMode ? '#D1D5DB' : '#374151' }}>
                                I'm driven by the idea of building systems that don't just work, but work better for the people who use them.
                                With an interest in both design and development, I enjoy improving how technology functions behind the scenes
                                while making sure the experience feels intuitive on the surface.
                                <br/><br/>
                                I value teamwork and reliability, believing that great solutions come from collaboration and consistency,
                                not just individual skill. As I continue growing in tech, I'm motivated to create tools and systems that
                                support education, serve everyday users, and contribute positively to communities.
                            </p>
                        </div>

                        <div className="flex-shrink-0 w-[45vw] h-[55vw] -mr-[5.6vw] mt-[5vw]">
                            <img src="/images/MeEnd.png" alt="About" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>

                <footer style={{ backgroundColor: '#583981', color: 'white', padding: '4.2vw 0', width: '100vw', marginLeft: 'calc(-5vw)', marginRight: 'calc(-5vw)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5.6vw', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <div style={{ flex: '0 0 auto' }}>
                            <img src="/images/AbrelleLogoInvertedT.png" alt="Logo" style={{ width: '14vw', height: 'auto' }} />
                        </div>

                        <div style={{ display: 'flex', gap: '7vw', flex: '1 1 auto', justifyContent: 'flex-end' }}>
                            <div>
                                <h3 style={{ fontSize: '1.4vw', fontWeight: 'bold', marginBottom: '1.4vw' }}>CONTACT</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.8vw', fontSize: '1.1vw' }}>Email: abrellelopez@gmail.com</li>
                                    <li style={{ marginBottom: '0.8vw', fontSize: '1.1vw' }}>Phone: +63 917 136 0401</li>
                                    <li style={{ marginBottom: '0.8vw', fontSize: '1.1vw' }}>Location: Baguio City, PH</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.4vw', fontWeight: 'bold', marginBottom: '1.4vw' }}>CONNECT</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.8vw', fontSize: '1.1vw' }}>
                                        <a href="https://linkedin.com/in/abrelle-yin-lopez" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</a>
                                    </li>
                                    <li style={{ marginBottom: '0.8vw', fontSize: '1.1vw' }}>
                                        <a href="https://github.com/AbrelleLopez" style={{ color: 'white', textDecoration: 'none' }}>GitHub</a>
                                    </li>
                                    <li style={{ marginBottom: '0.8vw', fontSize: '1.1vw' }}>
                                        <a href="https://gitlab.com/abrellelopez" style={{ color: 'white', textDecoration: 'none' }}>GitLab</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                <div style={{ backgroundColor: '#262626', color: '#D1D5DB', padding: '1.4vw 0', width: '100vw', marginLeft: 'calc(-5vw)',
                    marginRight: 'calc(-5vw)', textAlign: 'center', fontSize: '1vw' }}>
                    © 2026 Abrelle Yin Lopez. All rights reserved.
                </div>
            </main>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-[2.1vw] right-[2.1vw] w-[3.5vw] h-[3.5vw] border-none rounded-full text-[2.1vw] cursor-pointer z-[1000] transition-colors"
                style={{ backgroundColor: '#9333ea', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', color: '#FFFFFF'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#7c3aed'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#9333ea'}
            >
                ↑
            </button>
        </div>
    );
}