
import React from 'react'
import Category from '../Components/Category'
import Discount from '../Components/Discount'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import FooterLast from '../Components/FooterLast'
import Hero from '../Components/Hero'
import Marquee from '../Components/Marquee'
import Navbar from '../Components/Navbar'
import Trend from '../Components/Trend'
import Unique from '../Components/Unique'





const Home = () => {
  return (
    <div className=''>
      
      <Navbar/>
      <Marquee/>
      <Hero/>
      <Discount/>
      <Unique/>
      <Features/>
      <Category/>
      
      <Trend/>
     
      
      <Footer/>
      <FooterLast/>
      
      
      
      
      
      
      
    </div>
  )
}

export default Home
