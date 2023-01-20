import React from "react";
import Footer from "../Components/Footer";
import FooterLast from "../Components/FooterLast";
import Product from "../Components/Product";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { products, Categories } from "../Data";
import { useNavigate, useParams } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const { category } = useParams();
  console.log(category);

  const filteredProducts = products.filter((p) => p.category === category);

  const filteredCategory = Categories.filter((c) => c.id === category);

  const pCategory = filteredCategory[0];

  const Products = filteredProducts;
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Header category={pCategory.title} />
      <div className="flex justify-around flex-wrap w-[100%] px-10 sm:px-0 md:px-0 py-6">
        {Products.map((item) => (
          <Product
            onClick={() => navigate(`/productInfo/${item.id}`)}
            data={item}
            key={item.id}
          />
        ))}
      </div>
      <Footer />
      <FooterLast />
    </div>
  );
};

export default Category;
