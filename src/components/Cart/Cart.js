import React from 'react';

const Cart = ({ random, cart, handleResetBtn, handleRandomBtn }) => {



    return (
        <div>
            <h3 className='mt-4 mb-3 border'>Order Details</h3>
            {
                cart.map(val => <h5> {val.name} </h5>)
            }

            <div>
                <button onClick={() => handleRandomBtn(cart)} className='btn btn-primary mt-5 mb-2'>Choose One</button> <br />

                <h5 className='text-success py-2'>{random}</h5>

                <button onClick={() => handleResetBtn(cart)} className='btn btn-danger mt-3 mb-5 mb-lg-0'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;