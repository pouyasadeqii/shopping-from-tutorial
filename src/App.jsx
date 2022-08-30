import React from 'react';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import { Routes ,Route , Navigate} from "react-router-dom"
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;