import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity}=props.product;
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
            <br />
            <button className="button">Remove</button>
        </div>
    );
};

export default ReviewItem;