import Home from "./Pages/Home";
import Category from "./Pages/products";
import ProductInfo from "./Pages/productInfo";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productInfo/:id" element={<ProductInfo />} />
      <Route path="/products/:category" element={<Category />} />
    </Routes>
  );
}

export default App;
