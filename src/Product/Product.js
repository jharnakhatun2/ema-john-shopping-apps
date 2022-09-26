import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = ({handleAddToCart,product}) => {
   
    const {img,name,price,seller,ratings} = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-content">
            <h5 className='mt-3 product-name'>{name}</h5>
            <p>Price : ${price}</p>
            <span>Manufacturer : {seller}</span>
            <p>Ratings : {ratings} star</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className="btn-cart">Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} className= "ms-2"/></button>
        </div>
    );
};

export default Product;