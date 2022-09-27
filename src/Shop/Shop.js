import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch( `products.json`)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleAddToCart =(product)=>{
        // console.log(product);
        //cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        
            <div className="shop-container">
                <div className="product-container py-5">
                    {
                        products.map(product => <Product
                                         key = {product.id}
                                         product = {product}
                                         handleAddToCart = {handleAddToCart} 
                                         />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}/>
                </div>
            </div>
    );
};

export default Shop;