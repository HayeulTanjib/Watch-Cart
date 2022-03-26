import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Watches = ({watch, handleCartBtn}) => {

    const {name,img,price} = watch;

    return (
        <div className='col-sm-4 col-lg-none g-4 '>
            <div style={{height: '450px'}} class="card ">
                <img src= {img} class="img-fluid w-75 h-50 mx-auto" alt="..." />
                <div class="card-body">
                    <h3 class="card-title">{name}</h3>
                    <h6 class="card-text">Price : {price}$</h6>
                </div>
                <div class="card-footer">
                    <button onClick={() => handleCartBtn(watch)} className='border-0 w-100 bg-warning p-2 rounded fw-bold'>Add to Cart <FontAwesomeIcon className='mx-2' icon={faShoppingBag}/> </button>
                </div>
            </div>
        </div>
        
        
    
    );
};

export default Watches;