import React from 'react'
import Projects from './Projects'


const Work = ({ darkMode }) => {
  return (
    <div id='Work' className='relative w-full h-[100vh] text-white flex flex-col md:flex-row items-center justify-between'>
      {/* <div className={` w-[180px] h-[180px] rounded-full bg-[rgb(255,0,51)] absolute top-[460px] left-[120px] flex flex-col justify-center items-center`}>
        <h1 className={`font-[Poppins] font-bold text-2xl text-white`}>Available</h1>
        <h1 className={`text-2xl mt-[-10px] font-[Poppins] font-bold text-white`}>for work</h1>
      </div> */}
      <div className='w-screen md:w-[30vw] h-0 md:h-full flex justify-end md:justify-start px-8 items-start md:items-end py-8 pt-[100px] md:pt-0'>
        <h1 className='text-5xl md:text-7xl text-[rgb(255,0,51)]'>PROJECTS.</h1>
      </div>
      <div className='md:mt-[100px] w-screen md:w-[70vw] h-full flex items-center'>
        <Projects darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Work