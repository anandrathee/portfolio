import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='aboutPage flex items-center justify-evenly w-full text-white gap'>
      <div className="leftContent w-auto h-full flex items-end justify-end">
        <img className='h-[80%]' src="/images/student.png" alt="" />
      </div>
      <div className="rightContent flex flex-col items-left justify-center w-auto h-full gap-8">
        <h3 className='text-5xl font-bold tracking-wide'>Creativity <br /> Is My Passion</h3>
        <p className='text-xl tracking-wider'>I'm a web developer and designer <br />passionate about experimenting with <br />new skills and creativity. Driven by <br />learning and learn new development <br />and design skills.</p>
      <Link className=' border-2 border-[#836CD6] rounded-md w-32 h-12 text-center text-xl flex items-center justify-center'>Resume</Link>
      </div>
    </div>
  )
}

export default AboutUs