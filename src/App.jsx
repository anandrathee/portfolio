import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full h-auto bg-black'>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Projects/>
      
    </div>
  )
}

export default App