import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MainHome from './MainHome'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHome />
      <Footer />
      <Outlet />
    </div>
  )
}

export default Home
