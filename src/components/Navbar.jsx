import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navBar h-18 w-full flex items-center justify-between px-40 text-white'>
    
      <h1 className='text-3xl font-semibold'>Anand.</h1>
      <div className="navLinks flex items-center justify-center gap-16">
        {
          ["home", "aboutUs", "projects", "contact"].map((elem,index)=>(
            <Link className='font-semibold capitalize hover:text-[#836CD6] transition-all duration-200' to={elem === 'home' ? '/' : `/${elem}`}>{elem}</Link>
          ))
        }
      </div>
      <div className="circle w-50 h-50 rounded-full bg-[#836CD6] -top-35 -left-35 absolute blur-3xl "></div>
      {/* <div className="auth flex items-center justify-center gap-6 font-semibold">
        <Link>Login</Link>
        <Link>Sign Up</Link>
      </div> */}
    </nav>
        </>
  )
}

export default Navbar