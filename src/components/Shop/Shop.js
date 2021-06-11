import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from'../Cart/Cart';
const Shop = () => {
  const first10=fakeData.slice(0,10);
  const [products , setproducts]=useState(first10);
  const [cart , setCart]=useState([]);
  const handleAdded=(product)=>{
    //  console.log('product added',product);
       const newCart=[...cart,product];
       setCart(newCart);
  }
    return (
        <div className="shop-container">
            <div className="product-container">                
                    {
                        products.map(pd=><Product
                         handleAdded={handleAdded}
                         product={pd}
                             ></Product>)
                    }              
            </div>
           <div className="cart-container">

               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;