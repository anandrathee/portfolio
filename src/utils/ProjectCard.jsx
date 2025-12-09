import React from 'react'

const ProjectCard = () => {
  return (
    <div className='w-96 h-[60vh] flex flex-col justify-center overflow-hidden p-6 bg-[#120e12] rounded-4xl text-white relative'>
      <div className="top flex items-center justify-between">
        <div className="topLeft">
          <h2 className='text-5xl font-bold'>01</h2>
        </div>
        <div className="topRight">
          <h2 className='text-2xl font-semibold'>Design</h2>
        </div>
      </div>
      <div className="bottom w-full h-full flex flex-col justify-center gap-2 z-50 ">
        <h2 className='text-3xl font-bold'>Interface Design <br /> For Ice Creame Shop</h2>
        <p className='text-2xl font-semibold text-zinc-400'>Technologies used</p>
        <p className=' font-semibold text-zinc-500'>HTML, CSS, JavaScript, Gsap, Swiper Js and Figma</p>
        <div className="img w-full h-40 overflow-hidden  rounded-2xl">
          <img className='w-full h-full' src="https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg" alt="" />
        </div>
      </div>
      <div className="centerShadow w-80 h-80 rounded-full bg-[#714ED8] absolute ml-26 blur-2xl opacity-70 mt-70" />
    </div>
  )
}

export default ProjectCard