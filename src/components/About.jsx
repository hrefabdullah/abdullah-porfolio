import React from 'react'
import pfp from "../assets/pfp1.jpg"
import html from "../assets/html-5.png"
import css from "../assets/css-3.png"
import js from "../assets/js.png"
import reactjs from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import git from "../assets/git.png"
import bootstrap from "../assets/bootstrap.png"
import motion from "../assets/motion.png"
import tailwind from "../assets/tailwind.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import resume from "../assets/resume.png"

const About = ({ darkMode }) => {

  const techStack = [html, css, js, reactjs, nodejs, express, mongodb, git, bootstrap, motion, tailwind]

  return (
    <div id='About' className={`pt-[150px] relative flex justify-center md:items-center items-end h-[100vh] md:h-[115vh] ${darkMode ? 'bg-white' : 'bg-[#101010]'}`}>

      <div className='w-[80vw] md:w-[60vw] h-[80vh] md:h-[85vh] rounded-2xl grid-rows-8 grid-cols-8 grid md:grid-cols-3 md:grid-rows-4 gap-4 p-3'>

        <h1 className='absolute text-[rgb(255,0,51)] text-5xl text-end md:text-center p-5 md:p-0 md:text-7xl md:rotate-270 md:top-[590px] md:left-[35px] top-[10vw] font-bold'>MEET THE MAN</h1>

        <div className='col-span-6 row-span-2 md:col-span-1 md:row-span-5 rounded-xl overflow-hidden flex items-end'>
          <img className='object-cover w-full h-full object-[0%_30%] md:object-[60%_60%]' src={pfp} alt="" />
        </div>

        <div className='border-2 md:pt-7 px-3 md:pb-3 border-[rgb(255,0,51)] col-span-8 md:col-span-2 md:row-span-1 row-span-1 rounded-xl ] flex flex-col items-center justify-center md:justify-between'>
          <h1 className='font-[Poppins] text-[rgb(255,0,51)] font-semibold hidden md:inline text-2xl'>TECH STACK IN ARSENAL</h1>
          <div className='scrollbar-hide flex pl-[130px] md:pl-[60px] gap-2 md:gap-4 md:p-5 w-full justify-center md:rounded-xl overflow-x-scroll md:overflow-x-scroll whitespace-nowrap'>
            {techStack.map((elem, idx) => (
              <img key={idx} className={`snap-start w-[25px] h-[25px] md:w-[40px] md:h-[40px] object-contain`} src={elem} alt="" />
            ))}
          </div>
        </div>

        <div className='border-2 border-[rgb(255,0,51)] col-span-8 row-span-4 md:col-span-2 md:row-span-4 rounded-xl p-4 md:p-7 text-[rgb(255,0,51)] font-[Poppins] font-bold text-2xl md:text-3xl flex flex-col items-center'>
          <h1 className='pt-1 md:pt-0'>AUTHOR</h1>
          <p className={` ${darkMode ? 'text-black' : 'text-white'} flex flex-col gap-3 text-[3vw] lg:text-lg font-normal pb-3 md:pb-0 pt-3 md:pt-4`}><span>I'm a Frontend Developer and a BCA student, driven by the unique balance that web development offers: the fusion of logic and design. It's the perfect space where structure and precision meet creativity and expression. With HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and Framer Motion, I create experiences that aren't just functional, but also visually engaging. I thrive in the challenge of building interfaces that are not only clean and efficient but that feel right and make an impact.</span>

         <span className='hidden lg:inline'>For me, web development is a blend of curiosity, design, and problem-solving—constantly learning and improving. Electronics and Mathematics catch my interest. Books are a great friend of mine. If you're looking to collaborate or chat about creating meaningful digital experiences, feel free to check out my work on GitHub or reach out on LinkedIn.</span>
         </p>
        </div>
      </div>
      <h1 className='absolute bottom-0  text-zinc-500 flex gap-2 text-sm p-4 '>Copyright © 2025 | <span><img className={`w-5 opacity-45 ${darkMode ? '' : 'invert'}`} src={github} alt="" /></span> <span><img className={`w-5 opacity-45 ${darkMode ? '' : 'invert'}`} src={linkedin} alt="" /></span></h1>
    </div>
  )
}

export default About