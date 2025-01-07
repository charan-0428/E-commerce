import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShopCatageory from './Pages/ShopCatageory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'

function App() {
  return (
   <div className='mainbody'> 
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCatageory banner={men_banner} category="men" />} />
        <Route path='/kids' element={<ShopCatageory banner={kid_banner} category="kid" />} />
        <Route path='/womens' element={<ShopCatageory banner={women_banner} category="women" />} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/:id" element={<ProductDisplay />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
      <Footer/>
   </div>

  );
}

export default App;
