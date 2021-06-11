import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props);
    const {img,price,seller,stock}=props.product;

    return (
        <div className="product">
            <div>
               <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4>{props.product.name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p>Only {stock} left in stock-order soon</p>
                <button className="button" onClick={()=>props.handleAdded(props.product)} > <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>

            </div>
          
        </div>
    );
};

export default Product;