import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/Portfolio.css'
import NavigationBar from './NavigationBar'
import Experience from './Experience'
import Skills from './Skills'
import Home from './Home'
import Contact from './Contact'

function Portfolio() {

  return (
      <div className='main'>
        <NavigationBar />
        <Home />
        <Skills />
        <Experience />
        <Contact />
      </div>
    
    
  
  
    
  )
}

export default Portfolio