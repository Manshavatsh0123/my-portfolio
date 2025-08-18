import Image from 'next/image'
import React from 'react'

const Project = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className="text-center text-2xl sm:text-4xl xl:text-5xl font-bold text-white">
                A showcase of my recent <br />
                <span className="text-cyan-300">full-stack </span> and <span className="text-cyan-300">frontend projects</span>
            </h1>



            <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                {[
                    {
                        img: "/images/Project-1.png",
                        title: "Let Us Nudge",
                        category: "Full-Stack Web Platform | Worked on during internship (Concrete Software Solutions Pvt. Ltd.)"
                    },
                    {
                        img: "/images/Project-2.png",
                        title: "QuickStay Hotel Booking",
                        category: "Hotel Booking Web App | Frontend built with React.js & Vite"
                    },
                    {
                        img: "/images/Project-4.png",
                        title: "Next Rental Property Platform",
                        category: "Property Rental Website | Frontend built with Next.js & Tailwind CSS"
                    },
                    {
                        img: "/images/Project-3.png",
                        title: "WanderNest Stay Booking",
                        category: "Airbnb-like Web App | MERN Stack (Node.js, Express.js, MongoDB, EJS)"
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                        <Image
                            src={project.img}
                            alt="project-img"
                            width={800}
                            height={650}
                            className="rounded-lg shadow-lg group-hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-shadow duration-300 object-cover"
                        />
                        <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {project.title}
                        </h1>
                        <h2 className="pt-2 font-medium text-white/80">{project.category}</h2>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Project