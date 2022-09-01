import React from 'react';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import { Routes ,Route , Navigate} from "react-router-dom"
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import NavBar from './components/shared/NavBar';
import ShopCart from './components/ShopCart';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<ShopCart />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;