import React from 'react'

const CategoryItem = (props) => {
    const {id, img, title, btn } = props.data;
  return (
    <div className='flex-1 m-1 h-[600px] relative p-6'>
      
    <img src={img} alt=""  className='w-full h-full object-cover'/>
    <div className="info absolute top-0 left-0  w-full h-full flex items-center justify-center flex-col">
        <h2 className='uppercase mb-1 text-white text-2xl text-center '>{title}</h2>
        <button className='px-6 py-3 bg-white text-sm hover:bg-black hover:text-white'>
        {btn}
    </button>
    </div>
   
      
    </div>
  )
}

export default CategoryItem
