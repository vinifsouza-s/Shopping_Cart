import React, { useState } from 'react';
import './App.css';
import Products from './Assets/Components/Products';
import Cart from './Assets/Components/Cart';


function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');


  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }


  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo('cart')}>
          Go to Cart ({cart.length}) 
            </button>

          <button onClick={() => navigateTo('products')}>
           View Products
              </button>

      </header>
      {page === 'products' && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === 'cart' && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;
