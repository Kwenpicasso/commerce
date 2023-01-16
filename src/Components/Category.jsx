import React from 'react'
import CategoryItem from './CategoryItem'
import { Categories } from '../Data'

const Category = () => { 
  return (
    <div className='flex p-4 w-full gap-5 sm:p-6 sm:flex-col md:flex-col pt-[100px]'>
       {Categories.map((card) => (
        <CategoryItem data={card} key={card.id}/>
       ))}
      
    </div>
  )
}

export default Category
