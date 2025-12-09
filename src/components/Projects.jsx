import React, { useState } from 'react'
import ProjectCard from '../utils/ProjectCard'

const Projects = () => {

  const projectData = [
    {id: "01", projectType: "Web", title: "SEO For Blinkit Websites", techUsed: "HTML, CSS, JavaScript, Gsap, Swiper, Js and Figma"},
    {id: "02", projectType: "Web", title: "SEO For Portfolio Websites", techUsed: "HTML, CSS, JavaScript, Gsap, Swiper, Js and Figma"},
    {id: "03", projectType: "Web", title: "SEO For Warranty Vault Websites", techUsed: "HTML, CSS, JavaScript, Gsap, Swiper, Js and Figma"},
    {id: "04", projectType: "Web", title: "SEO For DTC Travel  Websites", techUsed: "HTML, CSS, JavaScript, Gsap, Swiper, Js and Figma"},
    {id: "04", projectType: "Web", title: "SEO For DTC Travel  Websites", techUsed: "HTML, CSS, JavaScript, Gsap, Swiper, Js and Figma"},
    {id: "04", projectType: "Web", title: "SEO For DTC Travel  Websites", techUsed: "HTML, CSS, JavaScript, Gsap, Swiper, Js and Figma"},
  ]

  const [data, setData] = useState(projectData)
  return (
    <div id='projects' className='w-full h-screen flex items-center justify-end gap-20 flex-col'>
        <div className="top text-center w-full h-[20vh}">
          <h3 className='text-5xl text-zinc-50 font-bold'>I Make Incredible</h3>
          <h3 className='text-5xl text-[#836CD6] font-bold'>Projects</h3>
        </div>
        <div className="bottom w-full h-[60vh] mb-8 flex shrink-0 flex-wrap overflow-y-auto gap-20 items-center justify-center">
          {data.map((elem,index)=>(
            <ProjectCard value={elem} key={index}/>
          ))}
        </div>
    </div>
  )
} 

export default Projects