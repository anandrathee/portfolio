import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <div className='w-full h-auto bg-zinc-900'>
      <Navbar/>
      <Home/>
      <AboutUs/>
      
    </div>
  )
}

export default App