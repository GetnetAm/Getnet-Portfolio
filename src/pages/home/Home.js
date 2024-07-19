import React from 'react'
import "./home.css"
import Hero from '../hero/Hero'
// import Portfolio from '../portfolio/Portfolio'
import Skills from '../skills/Skills'
import About from '../about/About'
import Certeficate from '../certeficate/Certeficate'
import Contact from '../contacts/Contact'
import Education from '../education/Education'
import Footer from '../footer/Footer'
import TestimonialA from '../testimonials/TestimonialA'
import Portfoilo from '../portfolio/Portfoilo'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Education />
        <Certeficate />
        <Skills />
        <Portfoilo />
        {/* <Portfolio /> */}
        <TestimonialA />
       
        <Contact />
        <Footer />
       
       
      
    </div>
  )
}

export default Home
