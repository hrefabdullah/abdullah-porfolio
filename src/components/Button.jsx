import React from 'react'
import { motion } from 'motion/react'
import { FaArrowDownLong } from "react-icons/fa6";
import { BiInfinite } from 'react-icons/bi';
import { easeInOut } from 'motion';

const Button = ({ darkMode, scroll }) => {
  return (
    <div className={`${darkMode ? 'text-black' : 'text-white'} absolute bottom-15 flex flex-col items-center gap-2 text-sm font-[Poppins]  ${darkMode ? 'text-[#101010]' : 'text-[#fff]'}`}>
        <button>Explore more</button>
        <motion.div
         className={``} 
         animate={{
          y: [0,3,0]
         }}
         transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
         }}>
          <FaArrowDownLong />
        </motion.div>
    </div>
  )
}

export default Button