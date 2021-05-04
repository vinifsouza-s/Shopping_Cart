import React, { useState } from 'react';
import './App.css';
import Products from './Assets/Components/Products';
import Cart from './Assets/Components/Cart';



function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  /* const [products] = useState ([
     { 
       name: 'PS5 Controller',
       cost: '$40.00',
       image: 'https://www.paraeles.pt/wp-content/uploads/2020/04/ps5.png'
     },
     { 
       name: 'Xbox Controller',
       cost: '$35.00',
       image: 'https://tecnoblog.net/wp-content/uploads/2020/10/xbox-series-x-controle-700x484.jpg'
     },
   ]);
 
   const addToCart = (product) => {
     setCart([...cart, product]);
     //console.log("teste")
   }
 
   const renderProducts = () => (
     <> 
      <h1>Products</h1>
      <div className='products'>
        {products.map((product, index) => (
          <div className='product' key={index}>
             <h3> {product.name} </h3>
             <h4> {product.cost} </h4>
             <img src= {product.image} alt={product.name}/>
             <br />
             <button onClick={() => addToCart(product)}>
               Add to Cart
               </button>
           </div>
        ))}
      </div>
      </>
   );
   */

  /*const renderCart = () => (
    <> 
    <h1>Cart</h1>
    <div className='products'>
      {products.map((product, index) => (
        <div className='product' key={index}>
           <h3> {product.name} </h3>
           <h4> {product.cost} </h4>
           <img src= {product.image} alt={product.name}/>
           <br />
           <button>
             Add to Cart
             </button>
         </div>
      ))}
    </div>
    </>
  );
  */

  return (
    <div className="App">
      <header>
        <button>Go to Cart ({cart.length}) </button>
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
