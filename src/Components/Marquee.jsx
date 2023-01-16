import React from 'react'

const Marquee = () => {
  return (
    <div className=''>
        <div className='pt-[5rem]'></div>
       <marquee behavior="animate" direction="left" bgcolor="#8d7762" height="" width='100%' vspace="50px" >
      <div className="flex justify-center items-center gap-10 py-3 capitalize text-xs text-gray-300">
        
        <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>whats new</div>
        <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>Get up to 70% Off on All t-shirts and accessories!</div>
         <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>Top brands</div>
        <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>50% off vacation and beach wears. Offer available while stock lasts</div>
        <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>dresses</div>
        <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>further reductions! up to 80% off already</div>
        <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>summer activities</div>
        <div className='hover:scale-110 ease-in duration-200 cursor-pointer'>Get up to 70% Off on All t-shirts and accessories!</div>
      </div>
       </marquee>
    </div>
  )
}

export default Marquee
