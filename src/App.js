import React, { useState } from 'react';
import './App.css';



function App() {
  const [products] = useState ([
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

  return (
    <div className="App">
     <h1>Products</h1>
     <div className='products'>
       {products.map((product, index) => (
         <div className='product' key={index}>
            <h3> {product.name} </h3>
            <h4> {product.cost} </h4>
            <img src= {product.image} alt={product.name}/>
            <br />
            <button>Just a test</button>
          </div>
       ))}
     </div>
    </div>
  );
}

export default App;
