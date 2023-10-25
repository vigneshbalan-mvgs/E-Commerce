import React from 'react';

import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Prodcut';
import Cart from './Pages/Cart';
import LoginSignup  from './Pages/LoginSignup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/mens' element={<ShopCategory category="mens"/>}></Route>
        <Route path='/womens' element={<ShopCategory category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kid"/>}></Route>
        <Route path='/produt' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup />}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
