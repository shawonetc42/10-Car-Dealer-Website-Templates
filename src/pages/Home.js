import React from 'react'
import Hero from '../components/hero'
import Sections from '../components/Sections'
import PopularMakes from '../components/PopularMakes'
import BoxCar from '../components/BoxCar'
import Customars from '../components/Customars'
import Blog from '../components/Blog'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <Sections/>
      <PopularMakes/>
      <BoxCar/>
      <Customars/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
