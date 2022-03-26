import React from 'react';

const Cart = ({ random, cart, handleResetBtn, handleRandomBtn }) => {

  

    return (
        <div>
            <h3>Order Details</h3>
            {
                cart.map(val => <h5> {val.name} </h5>)
            }

            <div>
                <button onClick={() => handleRandomBtn(cart)} className='btn btn-primary mt-5 mb-2'>Choose One</button> <br />
              
              <h5>{random}</h5>

                <button onClick={() => handleResetBtn(cart)} className='btn btn-danger mt-3'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;