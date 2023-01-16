import React from 'react'

const Trend = () => {
  return (
    <div className='mt-20 p-20'>
      
    <div className='uppercase text-center text-nav text-4xl font-semibold heading'>
        <h1>trending brands</h1>
        
    </div>
   <div className='flex man  justify-around items-center pt-11 gap-4 sm:flex-col'>
   <div>
      <img src="Adidas.jpg" alt="" className='w-[200px] h-[100px] object-contain hover:scale-110 ease-in duration-200' />
      </div>
      <div>
      <img src="collus.webp" alt="" className='hover:scale-110 ease-in duration-200' />
      </div>
      <div>
      <img src="hm.png" alt="" className='hover:scale-110 ease-in duration-200' />
      </div>
      <div>
      <img src="monk.webp" alt="" className='hover:scale-110 ease-in duration-200'/>
      </div>
      <div>
      <img src="nike.png" alt="" className='w-[200px] object-contain hover:scale-110 ease-in duration-200' />
      </div>
      <div>
      <img src="tommy.webp" alt="" className='hover:scale-110 ease-in duration-200'/>
      </div>
      <div>
      <img src="week.webp" alt="" className='hover:scale-110 ease-in duration-200'/>
      </div>
   </div>

    </div>
  )
}

export default Trend
