import React from 'react'
import Footer from '../Components/Footer'
import FooterLast from '../Components/FooterLast'
import Navbar from '../Components/Navbar'
import WomenHeader from '../Components/WomenHeader'
import Products from '../Components/Products'
import { Female } from '../Data'
import { useNavigate } from 'react-router-dom'
const Women = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <WomenHeader/>
      <div className='flex justify-around  flex-wrap w-[100%] px-10 sm:px-0 md:px-0 py-6'>
        {Female.map((item) => (
            <Products onClick={() => navigate(`/productInfo/${item.id}`)} data={item} key={item.id}/>
        ))}
      </div>
      <Footer/>
      <FooterLast/>
    
    </div>
  )
}

export default Women
