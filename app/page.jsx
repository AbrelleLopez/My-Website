"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
    const [selectedProject, setSelectedProject] = useState(1);
    const projects = {
        1: {
            title: "Food Order Application",
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
            title: "SLU Shuttle Booking",
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
        <>
        <Navbar />
        <main className="relative pt-24 min-h-screen flex flex-col justify-center px-[80px] md:px-12 lg:px-20">
            <div className="max-w-6xl flex gap-16 items-center">

                <div className="flex-1">
                    <h1 className="mt-[250px] text-[43px] leading-[90px] font-bold">
                        Hi, I'm Abrelle Lopez!
                    </h1>
                    <h1 className="text-[55px] leading-[70px] font-bold mt-4">
                        COMPUTER SCIENCE STUDENT & ASPIRING SOFTWARE DEVELOPER
                    </h1>
                    <p className="mt-[30px] mr-[130px] text-[25px] leading-[30px] text-gray-600 max-w-xl">
                        Specializing in backend development using Java, with hands-on experience designing
                        application logic, working with relational databases, and integrating modern web
                        technologies through academic and personal projects.
                    </p>
                    <button className="mt-[20px] text-[22px] px-[75px] py-[7px] bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
                        ABOUT ME
                    </button>
                    <div className="mt-[100px] flex gap-[15px]">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                        <img src="/icons/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                        <img src="/icons/github.png" alt="GitHub" className="w-12 h-12" />
                        </a>
                        <a href="https://gitlab.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                        <img src="/icons/gitlab.png" alt="GitLab" className="w-12 h-12" />
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                        <img src="/icons/facebook.png" alt="Facebook" className="w-12 h-12" />
                        </a>
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                        <img src="/icons/instagram.png" alt="Instagram" className="w-12 h-12" />
                        </a>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <img src="/images/MeStart.jpg" alt="Abrelle Lopez" className="mt-[120px] w-[460px] h-[720px] object-cover rounded-full"/>
                </div>
            </div>

        <div className="max-w-6xl mt-[200px] mb-[100px]">
            <h1 className="text-[55px] leading-[70px] font-bold mb-[8px]">
                PROJECTS
            </h1>
            <p className="text-[25px] mb-[60px]">
                Some of the college projects I contributed to:
            </p>
            <div className="flex gap-[0px] items-start">

                <div className="flex-shrink-0 -ml-[100px]">
                    <div className="relative">
                        <img src="/images/ComputerImage.png" alt="PC Screen" className="w-[850px] h-auto"/>

                        <div className="absolute left-[130px] top-[60px] flex flex-col gap-[15px]">
                            <button onClick={() => setSelectedProject(1)}
                                className={`hover:scale-110 transition-transform cursor-pointer ${selectedProject === 1 ? 'ring-4 ring-blue-500 rounded-[18px]' : ''}`}
                                >
                                <img src="/images/appPHolder.png" alt="App 1" className="w-[50px] h-auto bg-white rounded-[15px] p-2"
                                />
                            </button>
                            <button onClick={() => setSelectedProject(2)} className={`hover:scale-110 transition-transform cursor-pointer ${selectedProject === 2 ? 'ring-4 ring-blue-500 rounded-[18px]' : ''}`}
                                >
                                <img src="/images/appPHolder.png" alt="App 2" className="w-[50px] h-auto bg-white rounded-[15px] p-2"
                                />
                            </button>
                            <button onClick={() => setSelectedProject(3)} className={`hover:scale-110 transition-transform cursor-pointer ${selectedProject === 3 ? 'ring-4 ring-blue-500 rounded-[18px]' : ''}`}
                                >
                                <img src="/images/appPHolder.png" alt="App 3" className="w-[50px] h-auto bg-white rounded-[15px] p-2"
                                />
                            </button>
                            <button onClick={() => setSelectedProject(4)} className={`hover:scale-110 transition-transform cursor-pointer ${selectedProject === 4 ? 'ring-4 ring-blue-500 rounded-[18px]' : ''}`}
                                >
                                <img src="/images/appPHolder.png" alt="App 4" className="w-[50px] h-auto bg-white rounded-[15px] p-2"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 -ml-[50px] mt-[40px]">
                    <h4 className="text-[25px] font-bold mb-[20px]">
                        {currentProject.title}
                    </h4>
                    <p className="text-[20px] text-gray-700 leading-[20px] mb-[25px]">
                        {currentProject.tools}
                    </p>
                    <p className="text-[20px] text-gray-700 leading-[20px] mb-[25px]">
                        {currentProject.description}
                    </p>
                    <h4 className="text-[20px] font-bold mb-[15px]">My Contributions:</h4>
                    <ul className="list-disc list-inside text-[18px] text-gray-600 mb-[25px] space-y-[5px]">
                        {currentProject.contributions.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <p className="text-[20px] text-gray-700 leading-[28px]">
                        {currentProject.details}
                    </p>
                </div>
            </div>
        </div>

        <div className="max-w-6xl mt-[100px] mb-[100px]">
            <h1 className="text-[55px] leading-[70px] font-bold mb-[8px]">
                SKILLS
            </h1>
            <div className="flex items-center gap-[100px] mb-[150px] mt-[100px] text-center">
                <h2 className="text-[24px] font-semibold w-[200px]">USING <br />NOW</h2>
                <img src="/icons/java.png" alt="Java" className="w-[60px] h-[60px]" />
                <img src="/icons/python.png" alt="Python" className="w-[60px] h-[60px]" />
                <img src="/icons/javascript.png" alt="JavaScript" className="w-[60px] h-[60px]" />
                <img src="/icons/cpp.png" alt="C++" className="w-[60px] h-[60px]" />
                <img src="/icons/sql.png" alt="SQL" className="w-[60px] h-[60px]" />
                <img src="/icons/html.png" alt="HTML" className="w-[60px] h-[60px]" />
            </div>
            <div className="flex items-center gap-[100px] mb-[150px] text-center">
                <h2 className="text-[24px] font-semibold w-[200px]">LEARNING</h2>
                <img src="/icons/react.png" alt="React" className="w-[60px] h-[60px]" />
                <img src="/icons/nodejs.png" alt="Node.js" className="w-[60px] h-[60px]" />
                <img src="/icons/springboot.png" alt="Spring Boot" className="w-[60px] h-[60px]" />
                <img src="/icons/git.png" alt="Git" className="w-[60px] h-[60px]" />
            </div>
            <div className="flex items-center gap-[100px] mb-[150px] text-center">
                <h2 className="text-[24px] font-semibold w-[200px]">OTHER <br />SKILLS</h2>
                <ul className="list-none text-left text-[20px]">
                    <li>Responsive Web Design</li>
                    <li>Wireframing & Prototyping</li>
                    <li>User Flow Design</li>
                </ul>
                <ul className="list-none text-left text-[20px]">
                    <li>Pair Programming</li>
                    <li>Testing & Debugging</li>
                </ul>
                <ul className="list-none text-left text-[20px]">
                    <li>English</li>
                    <li>Tagalog</li>
                </ul>
            </div>
        </div>
        <div className="relative mt-[100px] mb-[100px]">
            <div style={{position: 'absolute', top: '150px', left: '0', width: '1100px', height: '5.5px', backgroundColor: '#9333ea', zIndex: 1 }}></div>

            <div className="flex gap-[75px] items-center">
                <div className="max-w-6xl mt-[100px] mb-[100px] relative z-10">
                    <h1 className="text-[110px] leading-[70px] font-bold mb-[8px] mt-[30px]">
                        ABOUT.
                    </h1>
                    <h3 className="text-[23px] text-gray-700 leading-[28px] font-bold mt-[150px]">
                        I value clear communication just as much as quality work.
                    </h3>
                    <p className="text-[22px] text-gray-700 leading-[28px] mt-[20px]">
                        I'm driven by the idea of building systems that don't just work, but work better for the people who use them.
                        With an interest in both design and development, I enjoy improving how technology functions behind the scenes
                        while making sure the experience feels intuitive on the surface.
                        <br/><br/>
                        I value teamwork and reliability, believing that great solutions come from collaboration and consistency,
                        not just individual skill. As I continue growing in tech, I'm motivated to create tools and systems that
                        support education, serve everyday users, and contribute positively to communities.
                    </p>
                </div>

                <div className="top-0 right-0 flex-shrink-0 w-[700px] h-[900px] -mr-[80px] -mt-[20px]">
                    <img src="/images/MeEnd.png" alt="About" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    </main>
    </>
    );
}