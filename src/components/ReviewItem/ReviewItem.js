import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };
    return (
        <div style={reviewItemStyle}>
            <h1 className="product-name" style={{color:'blue'}}>{name}</h1>
            <h3>Quantity : {quantity}</h3>
            <p><small>${price}</small></p>
            <br />
            <button className="button" 
            onClick={()=>props.removeProduct(key)}>
                Remove
                </button>
        </div>
    );
};

export default ReviewItem;