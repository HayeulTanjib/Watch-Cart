import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watches from '../Watches/Watches';

const Shop = () => {

    const [watches, setWatch] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatch(data))
    }, []);

    return (
        
            <div class="row">
                <div className="col-9">
                    <div className="row">
                    {
                        watches.map(watch => <Watches key={watch.id} watch={watch} />)
                    }
                    </div>
                </div>
                    <div className="col-3">
                        <Cart/>
                    </div>
                
            </div>


        
    );
};

export default Shop;