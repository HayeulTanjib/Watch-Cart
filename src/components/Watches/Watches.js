import React from 'react';

const Watches = ({watch}) => {
    return (
        
        <div className='col-4 g-4'>
            <div style={{height: '450px'}} class="card ">
                <img src= {watch.img} class="img-fluid w-75 h-50 mx-auto" alt="..." />
                <div class="card-body">
                    <h3 class="card-title">{watch.name}</h3>
                    <h6 class="card-text">Price : {watch.price}$</h6>
                </div>
                <div class="card-footer">
                    <button className='border-0 w-100'>Add to Cart</button>
                </div>
            </div>
        </div>
        
        
    
    );
};

export default Watches;