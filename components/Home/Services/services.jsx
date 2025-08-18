import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="800" className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Collaborating with brands <br /> and agencies to build <br /> impactful digital solutions
            </h1>

            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">

                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <ServiceCard
                        icon="/images/s1.png"
                        name="UI & UX Design"
                        description="Crafting intuitive and user-centered designs that blend creativity with functionality, ensuring seamless digital experiences."
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <ServiceCard
                        icon="/images/s2.png"
                        name="Web & Mobile Apps"
                        description="Building responsive, scalable, and high-performance applications tailored to modern user needs across platforms."
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <ServiceCard
                        icon="/images/s3.png"
                        name="Creative Design"
                        description="Designing engaging visuals, branding elements, and digital content that communicate ideas with clarity and impact."
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <ServiceCard
                        icon="/images/s4.png"
                        name="Development"
                        description="Delivering full-stack solutions with clean, efficient code — turning ideas into robust, real-world digital products."
                    />
                </div>

            </div>
        </div>
    )
}

export default Services
