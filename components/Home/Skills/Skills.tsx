'use client'
import React from 'react'
import { BsFillHandIndexFill } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa';
import { SiBootstrap, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import Tilt from 'react-parallax-tilt';

const skills = [
    {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />
    },
    {
        name: "React.js",
        icon: <SiReact className="text-cyan-400" />
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />
    },
    {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300" />
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400" />
    },
    {
        name: "SQL",
        icon: <SiMysql className="text-blue-500" />
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-500" />
    },
    {
        name: "Java",
        icon: <FaJava className="text-red-500" />
    },
];


const Skills = () => {
    return (
        <div className="pt-16 pb-16">
            {/* Heading */}
            <h1 
                className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                Technical <span className="text-cyan-300">Skills</span>
            </h1>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-10 mt-16">
                {skills.map((skill, index) => (
                    <Tilt 
                        key={skill.name} 
                        scale={1.05} 
                        transitionSpeed={400}
                        data-aos={index % 3 === 0 ? "zoom-in" : index % 3 === 1 ? "flip-up" : "fade-up"} 
                        data-aos-delay={200 + index * 100}
                        data-aos-duration="800"
                    >
                        <div className="bg-[#1a1a2e] w-36 sm:w-40 h-44 sm:h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-500/40 transition-transform duration-300">
                            <div className="text-4xl sm:text-5xl mb-3">{skill.icon}</div>
                            <p className="text-purple-200 font-medium">{skill.name}</p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    )
}

export default Skills