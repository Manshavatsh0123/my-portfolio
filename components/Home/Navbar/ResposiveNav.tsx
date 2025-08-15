'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const ResposiveNav = () => {
  const [showNav, setShowNav] = useState(false)

  const openNavhandler = () =>{
    setShowNav(true);
  }

  const closeNavhandler = () =>{
    setShowNav(false);
  }

  return (
    <div>
      <Navbar openNav={openNavhandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavhandler}/>
    </div>
  )
}

export default ResposiveNav