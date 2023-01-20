import React from 'react'
import Footer from '../Components/Footer'
import FooterLast from '../Components/FooterLast'
import Product from '../Components/Product'
import MenHeader from '../Components/MenHeader'
import Navbar from '../Components/Navbar'
import { products } from '../Data'
import { useNavigate, useParams } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate()

  const {category} = useParams()
  console.log(category)

  const filteredProducts = products.filter(
    (p) => p.category === category
);
const Products = filteredProducts;
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <MenHeader />
      <div className='flex justify-around flex-wrap w-[100%] px-10 sm:px-0 md:px-0 py-6'>
        {Products.map((item) => (
            <Product onClick={() => navigate(`/productInfo/${item.id}`)} data={item} key={item.id}/>
        ))}
      </div>
      <Footer/>
      <FooterLast/>
    
    </div>
  )
}

export default Category
