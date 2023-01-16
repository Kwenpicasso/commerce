import React from 'react'
import Footer from '../Components/Footer'
import FooterLast from '../Components/FooterLast'
import AccessoriesProducts from '../Components/AccessoriesProducts'
import AccessoriesHeader from '../Components/AccessoriesHeader'
import Navbar from '../Components/Navbar'
import { Access } from '../Data'
const Accessories = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <AccessoriesHeader/>
      <div className='flex justify-around flex-wrap w-[100%] px-10 sm:px-0 md:px-0 py-6'>
        {Access.map((item) => (
            <AccessoriesProducts data={item} key={item.id}/>
        ))}
      </div>
      <Footer/>
      <FooterLast/>
    
    </div>
  )
}

export default Accessories
