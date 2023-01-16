import React from 'react'

const Discount = () => {
 
  return (
    <div className='w-full h-[200px] discount text-center text-white flex flex-col justify-center mb-16'>
      <h3 className='uppercase text-4xl sm:text-2xl'>end of season</h3>
      <h1 className='text-7xl sm:text-4xl lg:text-6xl md:text-6xl uppercase font-serif font-medium'>70% off all sale !</h1>
      <h4 className='uppercase font-semibold text-sm'>with code: YAY234</h4>
      <p className='capitalize text-xs pt-3'>see website banner for full Ts&Cs</p>
      
    </div>
  )
}

export default Discount
