import React, { useEffect, useRef, useState } from 'react'
import Landing2 from './components/Landing2.jsx'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Navigation from './components/Navigation'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest)
  })

  const [darkBtn, setDarkBtn] = useState(false)

  const changeMode = () => {
    setDarkBtn(!darkBtn)

  }


  return (
    <div className={` h-max ${darkBtn ? 'bg-white' : 'bg-[#101010]'} `}>

      <Navigation mode={changeMode} darkMode={darkBtn} />
      <Landing2 darkMode={darkBtn} />
      <Work darkMode={darkBtn} />
      <About darkMode={darkBtn} />

    </div>
  )
}

export default App