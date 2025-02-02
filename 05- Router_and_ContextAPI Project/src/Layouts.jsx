import React from 'react'
import Navbar from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layouts = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layouts
