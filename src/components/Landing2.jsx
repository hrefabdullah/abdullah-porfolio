import React from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { BiMath } from "react-icons/bi";
import { TbMathFunction } from "react-icons/tb";
import { TbMathIntegral } from "react-icons/tb";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { GiVintageRobot } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdDesignServices } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineBgColors } from "react-icons/ai";
import Button from './Button';

const Landing2 = ({ scroll ,darkMode }) => {

  


  return (
    <div id='Landing' className='relative w-full h-screen flex flex-col items-center justify-center md:w-full'>

      <h1 className='text-start border-b-2 pb-[1vw] text-[5vw] md:text-[2vw] text-[rgb(255,0,51)] tracking-widest'>PORTFOLIO</h1>

      <motion.div 
      animate={{
        y: [0, 15, 0], 
        x: [0, -10, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={`absolute top-[30vh] left-[15vw] ${darkMode ? 'text-[#101010]' : 'text-white'} font-[Poppins]`}>
        <motion.h1
        animate={{
          y: [0, -5, 0], 
          x: [0, 0, 0],
          textShadow: [
            '0 0 50px rgb(255, 0, 51)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        >Mathematics</motion.h1>
        <TbMathIntegral className='text-[rgb(255,0,51)] relative top-[-50px] right-[30px]' />
        <TbMathFunction className='text-[rgb(255,0,51)] relative top-[-90px] right-[-80px]' />
        <BiMath className='text-[rgb(255,0,51)] relative top-[-10px] left-[50px]' />
      </motion.div>

      <motion.div
       animate={{
        y: [0, -5, 0], 
        x: [0, 6, 0],
        textShadow: [
          '0 0 50px rgb(255, 0, 51)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={`absolute top-[70vh] right-[12vw] ${darkMode ? 'text-[#101010]' : 'text-white'} font-[Poppins]`}>
      <motion.h1
        animate={{
          y: [0, -5, 0], 
          x: [0, 0, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }} 
        >Electronics</motion.h1>
        <MdOutlineElectricalServices className='text-[rgb(255,0,51)] relative top-[-20px] right-[50px]' />
        <MdElectricBolt className='text-[rgb(255,0,51)] relative top-[-80px] right-[-20px]' />
        <GiVintageRobot className='text-[rgb(255,0,51)] relative top-[-10px] left-[90px]' />
      </motion.div>

      <motion.div
       animate={{
        y: [0, 15, 0], 
        x: [0, -10, 0],
        textShadow: [
          '0 0 50px rgb(255, 0, 51)'
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={`absolute top-[74vh] left-[13vw] ${darkMode ? 'text-[#101010]' : 'text-white'} font-[Poppins]`}>
       <motion.h1
        animate={{
          y: [0, -5, 0], 
          x: [0, 0, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        >Programming</motion.h1>
        <FaLaptopCode className=' text-red-500 relative top-[-60px] right-[10px]' />
        <FaCodeBranch className='text-[rgb(255,0,51)] relative top-[-0px] right-[-80px]' />
        <VscVscode className='text-[rgb(255,0,51)] relative top-[-100px] left-[110px]' />
      </motion.div>

      <motion.div
       animate={{
        y: [0, 15, 0], 
        x: [0, -10, 0],
        textShadow: [
          '0 0 50px rgb(255, 0, 51)'
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={`absolute top-40 right-[12vw] ${darkMode ? 'text-[#101010]' : 'text-white'} font-[Poppins]`}>
       <motion.h1
        animate={{
          y: [0, -5, 0], 
          x: [0, 0, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        >Designing</motion.h1>
        <MdDesignServices className=' text-red-500 relative top-[20px] right-[30px]' />
        <AiFillEdit className='text-[rgb(255,0,51)] relative top-[-90px] right-[-60px]' />
        <AiOutlineBgColors className='text-[rgb(255,0,51)] relative top-[-10px] left-[90px]' />
      </motion.div>

      <h1 className={`${darkMode ? 'text-[#101010]' : 'text-white'} font-semibold text-[11vw] md:text-[8vw]`}>ALI ABDULLAH</h1>

      <div className='shadow-[0px_0px_81px_0px_rgba(255,0,51,0.5)] absolute top-[55vh] md:top-[60vh] right-[23vw] rotate-[-2deg] bg-[rgb(255,0,51)] w-max px-3 py-1 md:px-4 md:py-2'>
        <h1 className='text-[4vw] md:text-[1.5vw] text-white'>Front End Devleoper</h1>
      </div>

      <Button className='' darkMode={darkMode
        
      } scroll={scroll} />

    </div>
  )
}

export default Landing2
