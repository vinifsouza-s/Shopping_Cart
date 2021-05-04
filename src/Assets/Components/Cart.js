import React from 'react';

export default function Cart({ cart }) {

    return (
        <>
            <h1>Cart</h1>
            <div className='products'>
                {cart.map((product, index) => (
                    <div className='product' key={index}>
                        <h3> {product.name} </h3>
                        <h4> {product.cost} </h4>
                        <img src={product.image} alt={product.name} />
                        <br />
                        <button>
                            Remove
                 </button>
                    </div>
                ))}
            </div>
        </>
    );
}

