import React from 'react'
import Project from './project'
import animeWA from '../assets/AnimeWeatherApp.mp4'

const Projects = ({ darkMode }) => {


  return (
    <div className='flex-col flex items-center justify-center md:items-end gap-[40px] h-[85vh] w-[100vw] md:w-[60vw] md:py-[50px] '>
       <Project video={animeWA} top={150} left={-550} inx={1} darkMode={darkMode} title='ANIME WEATHER APP' desc='An app which shows you weather in anime styled nature. It has feature to display night themed nature and day theme according to Time. All this took 3-4 hours to compelete'  />

       <Project top={25} left={-550} inx={2} darkMode={darkMode} title='MUZAFFAR AND SONS - ECOMMERCE' desc='Coming soon'  />

       <Project top={-100} left={-550} inx={3} darkMode={darkMode} title='AL QURAN INSITUTE' desc='Coming soon'  />

       <Project top={-225} left={-550} inx={4} darkMode={darkMode} title='PHYSIO2CARE' desc='Coming soon'  />

       <Project top={-350} left={-550} inx={5} darkMode={darkMode} title='HORIZON VISION ACADEMY' desc='Coming soon'/>
    </div>
  )
}

export default Projects