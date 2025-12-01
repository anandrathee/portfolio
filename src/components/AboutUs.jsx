import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='aboutPage flex items-center justify-evenly w-full text-white'>
      <div className="leftContent w-auto h-full flex items-end justify-end z-50">
        <img className='h-[80%]' src="/images/student.png" alt="" />
      </div>
      <div className="rightContent flex flex-col items-left justify-center w-auto h-full gap-8">
        <h3 className='text-5xl font-bold tracking-wide'>Creativity <br /> Is My Passion</h3>
        <p className='text-2xl tracking-wider'>I'm a web <b className='text-[#836CD6]'>developer and designer</b> <br />passionate about experimenting with <br />new <b className='text-[#836CD6]'>skills and creativity.</b> Driven by <br />learning and learn new development <br />and design skills.</p>
      <Link className='relative border-2 border-[#836CD6] rounded-full w-36 h-14 text-center text-xl font-semibold flex items-center justify-center'>
      Resume
       <span className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: 'inset 0 0 15px 0px #a78bfa' }} />
      </Link>
      </div>
      <div className="circle w-40 h-40 rounded-full bg-[#836CD6] top-[30%] left-[20%] absolute blur-3xl "></div>
      <div className="circle w-40 h-40 rounded-full bg-[#836CD6] top-[60%] left-[33%] absolute blur-3xl "></div>
    </div>
  )
}

export default AboutUs