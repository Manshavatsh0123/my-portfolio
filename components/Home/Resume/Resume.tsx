import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCode, FaCodepen, FaDatabase, FaJava, FaLaptopCode, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">

        <div>
          <h1 data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800" className='text-3xl sm:text-4xl font-bold text-white'>My Work <span className='text-cyan-200'>Experiences</span></h1>
          <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="MERN-Stack Developer (Intern)"
              desciption={`Completed a 6-month internship at Concrete Software Solutions Pvt. Ltd.\n
              • Built responsive interfaces and interactive dashboards for the Let Us Nudge web platform.\n
              • Collaborated with backend developers to integrate APIs and optimize performance.\n
              • Followed accessibility and performance best practices (Lighthouse, Web Vitals).\n
              • Tech Stack: React.js, Next.js, Tailwind CSS, Git.`}
            />
          </div>
        </div>

        <div>
          <h1 data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800" className='text-3xl sm:text-4xl font-bold text-white'>My <span className='text-cyan-200'>Education</span></h1>
          <div data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" className="mt-10">
            <ResumeCard
              Icon={BiBadge}
              role="Gautam Buddha University"
              date="Aug 2022 - May 2026"
              desciption="B.Tech in Electronics and Communication Engineering, Greater Noida, India."
            />

            <ResumeCard
              Icon={FaJava}
              role="Programming in Java - NPTEL"
              date="2023"
              desciption="Learned core Java concepts and object-oriented programming through NPTEL certification."
            />

            <ResumeCard
              Icon={FaLaptopCode}
              role="Full Stack Web Development – Delta 6.0"
              date="2024"
              desciption="Gained hands-on experience with frontend (React.js, Next.js, Tailwind CSS) and backend (Node.js, Express.js, MongoDB) development."
            />

            <ResumeCard
              Icon={FaCode}
              role="Data Structures & Algorithms – Alpha Plus 5.0"
              date="2025"
              desciption="Strengthened problem-solving skills and understanding of algorithms and data structures."
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume