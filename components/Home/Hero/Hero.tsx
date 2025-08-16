'use client'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground'

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col px-4">
            <ParticlesHero />
            <div className="relative flex flex-col z-10 items-center text-center">

                
                <Image
                    src="/images/Mansha01.jpg"
                    width={160}
                    height={160}
                    alt="heroimage"
                    className="rounded-full border-4 border-[#0c0c48aa] shadow-lg"
                />

               
                <h1 className="mt-6 font-bold tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Turning ideas into{" "}
                    <span className="text-cyan-200">digital reality.</span>
                </h1>

                
                <h2 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium flex items-center justify-center">
                    Hi, I'm <span className="text-cyan-200 font-bold pl-1">Mansha</span> —
                    I craft modern
                    <span className="text-cyan-200 font-bold pl-2">
                        <Typewriter
                            options={{
                                strings: [
                                    'Frontend Developer',
                                    'Backend Developer',
                                    'Full-Stack Solutions',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 40,
                                wrapperClassName: 'pl-2',
                            }}
                        />
                    </span>
                </h2>

                
                <button className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-sm sm:text-base md:text-lg font-medium flex items-center gap-2">
                    <span>See my work</span>
                    <BsArrowRight className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}

export default Hero
