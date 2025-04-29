import React, { useEffect, useRef, useState } from 'react'
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'motion/react'
import js from "../assets/js.png"
import html from "../assets/html-5.png"
import css from "../assets/css-3.png"

const Project = ({ top, left ,inx, desc, darkMode, title, video }) => {

  const pWindow = useRef()
  const [descDisp, setDescDisp] = useState(false)

  useEffect(() => {
    pWindow.current.addEventListener('mouseenter', () => {
      setDescDisp(true)
    })

    pWindow.current.addEventListener('mouseleave', () => {
      setDescDisp(false)
    })


  }, [descDisp])
  


  return (
    <div ref={pWindow} className={`relative flex border-b-2 ${darkMode ? 'border-[#101010]' : 'border-white'} w-[85vw] md:w-[55vw] items-center md:px-10 py-6`}>
      {descDisp && <motion.div
      animate={{
       x: [-20,30]
      }}
      transition={{
        ease: 'easeOut'
      }}
      className={`w-[350px] h-[390px] rounded-md ${darkMode ? 'bg-white' : 'bg-[#101010]'} border-2 border-[rgb(255,0,51)] absolute`} 
      style={{top: `${top}px`, left: `${left}px`}}>
        
        <div className='flex flex-col'>
          <div className='w-full h-[160px] '>
            <video src={video} autoPlay loop muted></video>
          </div>
          <div className='px-5 pt-5 flex justify-between items-center'>
            <h1 className={`${darkMode ? 'text-[#101010]' : 'text-white'} text-lg font-[Poppins]`}>Description</h1>
            <div className={`${darkMode ? 'border-[rgb(255,0,51)]' : 'border-white'} flex gap-3 w-max px-3 py-[5px] rounded-full border-2`}>
                <img className='w-4' src={html} alt="" />
                <img className='w-4' src={css} alt="" />
                <img className='w-4' src={js} alt="" />
            </div>
          </div>
          <p className={`${darkMode ? 'text-[#101010]' : 'text-white'} text-sm p-[15px]`}>{desc}</p>
        </div>

        </motion.div>}
      <h1 className={`${darkMode ? 'text-black' : 'text-white'} pb-[3px] mr-[30px] text-lg md:text-xl`}>0{inx}</h1>
      <h1 className='text-[rgb(255,0,51)] text-xl md:text-3xl font-[Poppins]'>{title}</h1>
      <a href="https://anime-weather-app-alpha.vercel.app/">
        <FiExternalLink className={`${darkMode ? 'text-black' : 'text-white'} absolute bottom-[30px] right-0 text-2xl `} />
      </a>
    </div>
  )
}

export default Project;