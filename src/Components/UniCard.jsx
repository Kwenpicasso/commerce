import React from 'react'

const UniCard = (props) => {
    const {img, title, btn} = props.data
  return (

    <div>
        <img src={img} alt="" className='rounded-[100%] w-[300px] h-[300px] lg:w-[230px] lg:h-[230px] object-cover' />
        <h1 className='uppercase text-center font-semibold mt-6 mb-4'>{title}</h1>
       <div className='text-center uppercase'>
       <a href="" class="btn">{btn}</a>
       </div>
      
    </div>
  )
}

export default UniCard
