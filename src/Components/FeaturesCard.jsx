import React from 'react'
import { motion } from 'framer-motion'

const FeaturesCard = (props) => {
    const { img, price, stroke, title, badge} = props.data ;
  return (
    <div className='relative'>
      
        <motion.div className="paper min-h-[22rem] min-w-[22rem] p-12 hover:scale-110 ease-in duration-200">
        {badge === 1 && <div className='text-red-500 absolute text-xs bg-white top-[58px] p-1'><h2>-25%</h2></div>}
            <img src={img} alt="" className='w-full h-full pointer-events-none object-cover'/>
            <h3 className='text-sm'>{title}</h3>
            <div className="price flex gap-3">
              <h3 className='text-sm font-bold'><strike>{stroke}</strike></h3>
              <h3 className='text-red-500 text-sm font-bold'>{price}</h3>
            </div>


        </motion.div>
      
    </div>
  )
}

export default FeaturesCard
