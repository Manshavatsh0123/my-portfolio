import React from 'react'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className=" py-6 border-t border-blue-800/40">
  <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
    
    {/* Left - Branding */}
    <h1 className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
      Mansha <span className="text-cyan-300">Portfolio</span>
    </h1>

    {/* Right - Socials */}
    <div className="flex space-x-6">
      <a
        href="https://www.linkedin.com/in/mansha-vatsh88/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
      >
        <BiLogoLinkedin size={24} />
      </a>
      <a
        href="https://github.com/Manshavatsh0123"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
      >
        <BiLogoGithub size={24} />
      </a>
    </div>
  </div>

  {/* Bottom Line */}
  <p className="text-center text-gray-500 text-xs md:text-sm mt-5 tracking-wide">
    © {new Date().getFullYear()} Mansha Vatsh · All rights reserved
  </p>
</div>


  )
}

export default Footer