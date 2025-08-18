import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/services'
import Resume from './Resume/Resume'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Hero />
            <Services />
            <Resume />
            <Project />
            <Skills />
            <Contact />
        </div>
    )
}

export default Home