import React from 'react'
import { BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMap, BiPhone } from 'react-icons/bi'

const Contact = () => {
    return (
        <div className="pt-16 pb-16 bg-[#0a0a0a]/60">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center lg:text-left">

                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 leading-snug">
                    Let’s Work Together <br /> Schedule a call with me
                </h1>
                <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
                    I’d love to hear from you. Whether it’s a project, collaboration, or just a chat —
                    reach out today and let’s connect!
                </p>

                
                <div className="mt-7 space-y-4 flex flex-col items-center lg:items-start">
                    <div className="flex items-center space-x-3">
                        <BiPhone className="w-8 h-8 text-cyan-300" />
                        <p className="text-lg sm:text-xl font-medium text-gray-300">+91 9835416248</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <BiEnvelope className="w-8 h-8 text-cyan-300" />
                        <p className="text-lg sm:text-xl font-medium text-gray-300">manshavatsh@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <BiMap className="w-8 h-8 text-cyan-300" />
                        <p className="text-lg sm:text-xl font-medium text-gray-300">Greater Noida, India</p>
                    </div>
                </div>

                
                <div className="flex justify-center lg:justify-start mt-8 space-x-6">
                    <a
                        href="https://www.linkedin.com/in/mansha-vatsh88/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
                    >
                        <BiLogoLinkedin className="text-white w-7 h-7" />
                    </a>
                    <a
                        href="https://github.com/Manshavatsh0123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300"
                    >
                        <BiLogoGithub className="text-white w-7 h-7" />
                    </a>
                </div>

                
                <div className="mt-10">
                    <a
                        href="/images/Mansha_Vatsh.pdf"
                        download
                        className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-md"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>



    )
}

export default Contact