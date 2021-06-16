import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from'../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
  const first10=fakeData.slice(0,10);
  const [products , setproducts]=useState(first10);
  const [cart , setCart]=useState([]);
  const handleAdded=(product)=>{
    //  console.log('product added',product);
       const newCart=[...cart,product];
       setCart(newCart);
       const sameProduct=newCart.filter(pd=>pd.key===product.key);
       const count=sameProduct.length;
       addToDatabaseCart(product.key,count);
  }
    return (
        <div className="shop-container">
            <div className="product-container">                
                    {
                        products.map(pd=><Product ShowButton={true}
                         handleAdded={handleAdded}
                         product={pd} 
                        key={pd.key} ></Product>)
                    }              
            </div>
           <div className="cart-container">

               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;