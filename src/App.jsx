import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import ProductInfo from "./Pages/productInfo"
import NewBalanceBag from "./Pages/NewBalanceBag"
import MartenBlack from "./Pages/MartenBlack"
import SilverWatch from "./Pages/SilverWatch"
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
    <Route path="/newbalancebag/200" element={<NewBalanceBag/>} />
    <Route path="/silverwatch" element={<SilverWatch/>} />
    <Route path="/martenblack" element={<MartenBlack/>} />
   </Routes>
  )
}

export default App
