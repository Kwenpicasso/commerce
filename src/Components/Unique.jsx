import React from 'react'
import { Explore } from '../Data'
import UniCard from './UniCard'

const Unique = () => {
  return (
    <div className='w-full px-6 py-4'>
        <h1 className='uppercase text-center text-4xl font-poppins font-semibold mb-5'>explore unique styles</h1>
        <h2 className='uppercase text-center font-semibold mb-16 text-nav'>style made with love in nigeria</h2>
        <div className='flex justify-around items-center sm:flex-col md:flex-col sm:gap-10'>
            {Explore.map((item) => (
                <UniCard data={item} key={item.id}/>
            ))}
        </div>

      
    </div>
  )
}

export default Unique
