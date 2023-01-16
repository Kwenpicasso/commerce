import React from 'react'
import { Foot } from '../Data'
import FootList from './FootList'

const Footer = () => {
  return (
    <div className='w-full h-[260px] bg-gray-300 pt-9 sm:hidden md:hidden'>
    <div className='flex justify-around'>
      {Foot.map((item) => (
        <FootList data ={item} key={item.id}/>
      ))}
    </div>
    
    </div>
    
  )
}

export default Footer
