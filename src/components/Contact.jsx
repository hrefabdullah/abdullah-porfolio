import React from 'react'

const Contact = ({ darkMode }) => {
  return (
    <div className='h-[110vh] flex items-end'>
        <div className='h-[100vh] w-[40vw] p-10 flex items-end'>
            <h1 className={`${darkMode ? 'text-black' : 'text-white'} font-semibold text-9xl`}>GET IN <span className='text-[rgb(255,0,51)]'>TOUCH</span></h1>
        </div>
        <div className='h-[100vh] w-[60vw]'>

        </div>
    </div>
  )
}

export default Contact