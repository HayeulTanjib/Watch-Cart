import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watches from '../Watches/Watches';

const Shop = () => {

    const [watches, setWatch] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatch(data))
    }, []);

    //Add to Cart Button
    const handleCartBtn = (watch) => {
        const newCart = [...cart, watch];
        setCart(newCart);
    }

    //Reset Button
    const handleResetBtn = (cart) => {
        const newCart = [];
        setCart(newCart);
        setRandom(newCart);
    }

    //Randomly Select Button
    const handleRandomBtn = (cart) => {
        const randomVal = Math.floor((Math.random() * cart.length) + 0);
        const randomNameGenarate = (cart[randomVal].name)
        setRandom(randomNameGenarate);
    }


    return (
        <div class="row">
            <div className="col-9">
                <div className="row">
                    {
                        watches.map(watch => <Watches key={watch.id} watch={watch} handleCartBtn={handleCartBtn} />)
                    }
                </div>
            </div>
            <div className="col-3">
                <Cart cart={cart} random={random} handleResetBtn={handleResetBtn} handleRandomBtn={handleRandomBtn} />
            </div>
        </div>
    );
};

export default Shop;