import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watches from '../Watches/Watches';

const Shop = () => {

    const [watches, setWatch] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatch(data))
    }, []);

    const handleCartBtn = (watch) => {
         const newCart = [...cart, watch];
         setCart(newCart);
    }

    const handleResetBtn = (cart) => {
        const newCart = [];
        setCart(newCart);
    }

    const handleRandomBtn = (cart) => {
        //const val = Math.floor((Math.random() * cart.length) + 1);
        
        const newArr = [...cart, cart]
        const numArr  = [...cart, (newArr[0].id)]
        console.log(numArr);

        //console.log(newArr[0].id);
            
 
     }



    return (
        
            <div class="row">
                <div className="col-9">
                    <div className="row">
                    {
                        watches.map(watch => <Watches key={watch.id} watch={watch} handleCartBtn = {handleCartBtn} />)
                    }
                    </div>
                </div>
                    <div className="col-3">
                        <Cart cart = {cart} handleResetBtn = {handleResetBtn} handleRandomBtn = {handleRandomBtn}/>
                    </div>
                
            </div>


        
    );
};

export default Shop;