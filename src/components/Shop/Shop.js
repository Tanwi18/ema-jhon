import React, { useEffect, useState } from 'react';
import './Shop.css';
import '../../fakeData';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from'../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
  const first10=fakeData.slice(0,10);
  const [products , setproducts]=useState(first10);
  const [cart , setCart]=useState([])

useEffect(()=>{
    const savedCart=getDatabaseCart();
    const productKeys=Object.keys(savedCart);
    const previousCart=productKeys.map(existingKey=>{
        const product=fakeData.find(pd=>pd.key===existingKey);
        product.quantity=savedCart[existingKey];
        return product;
    })
    setCart(previousCart);
},[])
  const handleAdded=(product)=>{
    let count=1;
      let newCart;
       const sameProduct=cart.find(pd=>pd.key===product.key);
    //    console.log(sameProduct);
    //    const count=sameProduct.length;
      if(sameProduct){
           count=sameProduct.quantity+1;
          sameProduct.quantity=count;
          const others=cart.filter(pd=>pd.key!==product.key);
          newCart =[...others,sameProduct];

      }
      else{
          product.quantity=1;
          newCart=[...cart, product];
      }
      setCart(newCart);
      console.log(newCart);
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

               <Cart cart={cart}>
               <Link to="/review">
                 <button className="button">Review</button>
                </Link>
               </Cart>
           </div>
        </div>
    );
};

export default Shop;