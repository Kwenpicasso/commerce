import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-full px-20 sm:px-10 py-20 flex sm:flex-col md:flex-col sm:gap-10 md:gap-10 justify-around'>
        
    
    <div className="image w-[40%] sm:w-[100%] md:w-[100%] relative">
      <img src="guy.webp" alt="" className='rounded-xl' />
      <div className=' girl absolute top-[-39px] right-[-18px]'>
        <img src="ee.jpg" alt=""/>
        
      </div>
     </div>

     <div className='uppercase '>
      <h1 className=' text-7xl font-bold mb-5 sm:text-5xl lg:text-5xl text-dark animate-pulse text-center'>
        the 2023 <br /> collection
      </h1>

      <h2 className='font-semibold text-2xl mb-2 text-center'>
        find <br /> your style
      </h2>
      <p className='text-sm capitalize text-center'>find a fresh and perfect style <br /> for you</p>


   
<div className='mt-5 text-center '>
<a class="btn" href="#">SHOP NOW</a>

</div>
     

     </div>
     

    </div>

      
    
  )
}

export default Hero
