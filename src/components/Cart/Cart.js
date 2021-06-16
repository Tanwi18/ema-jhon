import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
   const cart=props.cart;
  console.log(props.cart);

// let total=0;
// for(let i=0;i<cart.length;i++){
    //  const item=cart[i];
    //  total=total+item;
// }
  const total=cart.reduce((total,prd)=>total+prd.price,0);
  let shipping=0;
  
   if(total>300){
      shipping=0;
  }
  else if(total>=100)
  {
      shipping=8;
  }
  else if(total>0){
    shipping=14.99;
 }

  let tax=(total*(7/100)).toFixed(2);
  const grandTotal=(total+shipping+parseFloat(tax)).toFixed(2);
    return (
        <div>
            <h3> Order summary</h3>
            <h4>Items orderd :{cart.length}</h4>
            <p>Product price : {total.toFixed(2)}</p>
            <p>Shipping cost : ${shipping}</p>
            <p>Tax + Vat : ${tax}</p>
            <p>Total price : ${grandTotal}</p>
           <Link to="/review">
           <button className="button">Review</button>
           </Link>
        </div>
    );
};

export default Cart;