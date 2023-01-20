import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import ProductInfo from "./Pages/productInfo"
import Accessories from "./Pages/Accessories"



import { Route, Routes } from "react-router-dom"



function App() {
  

  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/men" element={<Men/>} />
    <Route path="/women" element={<Women/>} />
    <Route path="/accessories" element={<Accessories/>} />
    <Route path="/productInfo/:id" element={<ProductInfo/>} />
    <Route path="/product/:category" element={<ProductInfo/>} />
    
    
   </Routes>
  )
}

export default App
