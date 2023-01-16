import React from 'react'

const FooterLast = () => {
  return (
    <div className='w-full h-[7%] bg-back flex text-white justify-between items-center text-xs capitalize px-16 sm:px-2 md:px-2 sm:text-[11px]'>
     <h1>&copy;2023 BLURB</h1>
     <div className='flex gap-4 sm:gap-3'>
        <h2 className='sm:hidden md:hidden'>accessibility</h2>
        <h2>privacy & cookies</h2>
        <h2>terms & conditions</h2>

     </div>

    </div>
  )
}

export default FooterLast
