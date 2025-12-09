import React from 'react'
import ProjectCard from '../utils/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='w-full h-screen flex items-center justify-center gap-20 flex-col'>
        <div className="top text-center w-full h-[20vh}">
          <h3 className='text-5xl text-zinc-50 font-bold'>I Make Incredible</h3>
          <h3 className='text-5xl text-[#836CD6] font-bold'>Projects</h3>
        </div>
        <div className="bottom w-full h-[60vh] flex items-center justify-center">
          <ProjectCard/>
        </div>
    </div>
  )
} 

export default Projects