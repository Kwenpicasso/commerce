import React from 'react'

const AccessoriesProducts = (props) => {
  const {img, title, price, stroke, badge, fast} = props.data
  return (
    <div className='w-[300px] sm:w-[200px] md:w-[200px] mt-3 relative'>
      {badge === 1 && <div className='text-red-500 absolute text-xs bg-white top-[18px] p-1'><h2>-25%</h2></div>}
      {fast === true && <div className='uppercase text-[13px] rounded-l-lg px-2  bg-gray-700 text-white absolute right-0 top-64 sm:top-[200px] md:top-[200px]'><h4>selling fast</h4></div>}
      <img src={img} alt=""  className=''/>
      <h3 className='text-sm capitalize sm:text-xs md:text-xs'>{title}</h3>
      <div className="price flex gap-2">
              <h3 className='text-sm font-bold sm:text-xs md:text-xs'><strike>{stroke}</strike></h3>
              <h3 className='text-red-500 text-sm font-bold sm:text-xs md:text-xs'>{price}</h3>
      </div>
      
    </div>
  )
}

export default AccessoriesProducts
