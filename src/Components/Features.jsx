import React from 'react'
import { Feature } from '../Data'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import FeaturesCard from './FeaturesCard'

const Features = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();  
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    }, []);
  return (
    <div className='my-[3%] mx-[2%] pt-10 '>
        <h1 className='uppercase text-center text-nav text-4xl font-semibold heading'>Feature product</h1>
        <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden">
            <motion.div drag='x' dragConstraints={{right:0, left: -width}} className="inner-carousel flex ">
                
                {Feature.map((item) => (
                    <FeaturesCard data={item} key={item.id}/>
                ))}

            </motion.div>

        </motion.div>
      
    </div>
  ) 
}

export default Features
