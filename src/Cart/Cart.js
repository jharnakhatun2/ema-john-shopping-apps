import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity; 
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className="cart">
            <h4 className='pt-4'>Order Summery</h4>
            <div className="cart-information text-start ps-4 pt-3">
            <span>Selected Order : {quantity}</span>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Cart;