import React from 'react'

const FootList = (props) => {
    const {head, one, two, three, four, five} = props.data;
  return (
    <div>
        <h1 className='uppercase text-sm font-semibold text-nav'>{head}</h1>
      <div className='text-xs flex flex-col gap-3 mt-4'>
      <p className='capitalize'>{one}</p>
        <p className='capitalize'>{two}</p>
        <p className='capitalize'>{three}</p>
        <p className='capitalize'>{four}</p>
        <p className='capitalize'>{five}</p>
      
      </div>
      
    </div>
    
  )
}

export default FootList
