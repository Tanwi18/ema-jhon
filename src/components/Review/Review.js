import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';


const Review = () => {
    const [cart,setCart]=useState([]);
    const [ordered,setOrdered]=useState(false);

    const removeProduct=(productKey)=>{
        const newcart=cart.filter(pd=>pd.key!==productKey);
        setCart(newcart);
        removeFromDatabaseCart(productKey);
    }

    const orderPlaced=()=>{
        setCart([]);
        setOrdered(true);
        processOrder();
    }

    useEffect(()=>{
      const savedCart= getDatabaseCart();
      const productKey=Object.keys(savedCart);
      const productItems=productKey.map(key=>{
         const product=fakeData.find(pd=>pd.key===key);
          product.quantity=savedCart[key];
         return product;
      });
     setCart(productItems);
    },[])

    let thankYou;
    if(ordered){
        thankYou=<img src={happyImage}></img>
    }


    return (
        <div className="shop-container">
           <div className="product-container">
              {/* <h1>Cart Items:{cart.length}</h1> */}
            {
                cart.map(pd=><ReviewItem 
                    removeProduct={removeProduct}
                    product={pd}
                     key={pd.key}>

                     </ReviewItem>)
            }
            {
                thankYou
            }
           </div>
           <div className="cart-container" >
            <Cart cart={cart}>
                <button onClick={orderPlaced} className="button">Place Order</button>
            </Cart>
           </div>
        </div>
    );
};

export default Review;
