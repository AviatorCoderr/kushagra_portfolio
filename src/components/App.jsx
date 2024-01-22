import React from 'react'
import Navbar from "../components/Navbar"
import Showcase from './Showcase'
import About from './About'
import Skills from './Skills'
function App() {
  return (
    <>
      <div className="bg-[url('/static/images/showcase_bg.jpg')] bg-center bg-cover z-20">
        <Navbar />
        <Showcase />
      </div>
      <div>
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
