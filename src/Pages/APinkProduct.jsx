import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FooterLast from '../Components/FooterLast';

const APinkProduct = () => {
    const [pic, setPic] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images =[
        'men1.webp',
        'Men1s.webp',
        'Men1sss.webp'

    ]
  return (

  <div className='w-full h-screen'>
    <Navbar/>
    <div className='pt-[6rem]'></div>
    
     <div className='product flex sm:flex-col md:flex-col gap-10 w-[80%] m-auto py-8'>
     
    <div className="left">
       
       
        <div className="images">
            <img src={images[0]} alt=""onClick={e=>setPic(0)} />
            <img src={images[1]} alt="" onClick={e=>setPic(1)}/>
            <img src={images[2]} alt="" onClick={e=>setPic(2)}/>

        </div>
        <div className="mainimg">
            <img src={images[pic]} alt="" />

        </div>

    </div>
    <div className="right m-auto">
        <h1 className='mb-5 uppercase text-3xl font-semibold text-nav sm:text-center md:text-center'>adidas hoodie in pink</h1>
        <div className='flex gap-3 text-xl font-semibold mb-5 sm:items-center sm:justify-center md:items-center md:justify-center'>
        <h2>$100</h2>
        <h2 className='text-red-300'><strike>$200</strike></h2>

        </div>

        <p className='text-sm mb-5 sm:text-center md:text-center'>
        The Varsity Adidas Hoodie flaunts an embroidery of the official emblem in front, which is referenced in this collection to create a classic appearance and finished with tradition masks at the rear.

        </p>

        <div className='bg-back w-[300px] md:w-full sm:w-full p-3 flex mb-5 shadow-lg text-[13px] justify-center items-center flex-col font-extrabold'>
            <h2 className='uppercase'>
                25% off brands
            </h2>
            <h2  className='capitalize'>
                with code:
                <span className='uppercase'>u838h</span>
            </h2>
        </div>

        <div className='flex gap-3 justify-center items-center mb-5 md:w-full md:justify-around quan w-[120px] py-2  sm:w-full sm:justify-around '>
            
            <button className='w-[30px] h-[30px]  flex justify-center items-center cursor-pointer border-none' onClick={() => setQuantity(prev => prev ===1 ? 1 : prev -1)}>-</button>
            {quantity}

            <button className='w-[30px] h-[30px] flex justify-center items-center cursor-pointer border-none' onClick={() => setQuantity(prev => prev+1)}>+</button>
        </div>

        <button className='btn uppercase sm:w-full md:w-full'>
        <LocalMallIcon /> add to bag
        </button>

    </div>

   </div>
   <FooterLast/>
  </div>
  )
}

export default APinkProduct
