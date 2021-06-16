import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
     console.log(props.product);
    const {img,price,seller,stock,key,name}=props.product;

    return (
        <div className="product">
            <div>
               <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4><Link to={"/product/"+key}>{name}</Link> </h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p>Only {stock} left in stock-order soon</p>
                {props.ShowButton===true && <button className="button" onClick={()=>props.handleAdded(props.product)} > <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}

            </div>
          
        </div>
    );
};

export default Product;