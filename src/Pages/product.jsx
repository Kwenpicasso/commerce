import React from 'react'
import Footer from '../Components/Footer'
import FooterLast from '../Components/FooterLast'
import MenHeader from '../Components/MenHeader'
import Navbar from '../Components/Navbar'
import { products } from '../Data'
import { useNavigate } from 'react-router-dom'
import Products from '../Components/Products'

const Prod = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <MenHeader/>
      <div className='flex justify-around flex-wrap w-[100%] px-10 sm:px-0 md:px-0 py-6'>
        {products.map((item) => (
            <Products onClick={() => navigate(`/productInfo/${item.id}`)} data={item} key={item.id}/>
        ))}
      </div>
      <Footer/>
      <FooterLast/>
    
    </div>
  )
}

export default Prod
