import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    return (
        <div className="cart">
            <h4>Favourite App List</h4>
            <h5>Selected Apps:{props.cart.length}</h5>
            {/* <h5>Favourite App:{cart}</h5> */}
        </div>

       
    );
};

export default Cart;