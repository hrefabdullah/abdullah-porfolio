import React from 'react'
import { WiMoonAltNew } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";

const Navigation = ({ mode, darkMode }) => {
  return (
    <div className={`p-5 top-12 gap-1 text-sm flex flex-col fixed z-100 ${darkMode ? 'text-[#101010]' : 'text-white'}`}>
        <a href="#Landing">HOME</a>
        <a href="#Work">WORK</a>
        <a href="#About">ABOUT</a>
        <button onClick={mode} className='pt-3 z-10'>
          {darkMode ? <WiMoonAltNew className='text-2xl' /> : <FaMoon className='text-white text-xl' />}
      </button>
    </div>
  )
}

export default Navigation