import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4 className='pt-4'>Order Summery</h4>
            <span>Selected Order : {cart.length}</span>
        </div>
    );
};

export default Cart;