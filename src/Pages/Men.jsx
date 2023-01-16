import React from 'react'
import Footer from '../Components/Footer'
import FooterLast from '../Components/FooterLast'
import MaleProducts from '../Components/MaleProducts'
import MenHeader from '../Components/MenHeader'
import Navbar from '../Components/Navbar'
import { Male } from '../Data'

const Men = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <MenHeader/>
      <div className='flex justify-around flex-wrap w-[100%] px-10 sm:px-0 md:px-0 py-6'>
        {Male.map((item) => (
            <MaleProducts data={item} key={item.id}/>
        ))}
      </div>
      <Footer/>
      <FooterLast/>
    
    </div>
  )
}

export default Men
