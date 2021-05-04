import React, { useState } from 'react';

export default function Products({ cart, setCart }) {
  const [products] = useState([
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

    {
      name:'PS5 Console',
      cost: '$400.00',
      image: 'https://cdn.mos.cms.futurecdn.net/BxJcTtM8TXkpbTejFxNiKa.jpg'
    },

    {
      name:'XBOX Series X Console',
      cost: '$350.00',
      image: 'https://cdn.vox-cdn.com/thumbor/vTO-LV2ZiA_8zew9GzYEYJqRqnk=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22012237/vpavic_201103_4275_0163.jpg'
    },

    {
      name:'Nintendo Switch',
      cost: '$200.00',
      image: 'https://tecnoblog.net/wp-content/uploads/2020/11/nintendo-switch-produto.png'
    },

  ]);


  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
    console.log("teste")
  }


  return (
    <>
      <h1>Products</h1>
      <div className='products'>
        {products.map((product, index) => (
          <div className='product' key={index}>
            <h3> {product.name} </h3>
            <h4> {product.cost} </h4>
            <img src={product.image} alt={product.name} />
            <br />
            <button onClick={() => addToCart(product)}>
              Add to Cart
              </button>
          </div>
        ))}
      </div>
    </>
  );
}
