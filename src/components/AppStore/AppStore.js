import React, { useEffect, useState } from 'react';
import Apps from '../Apps/Apps';
import Cart from '../Cart/Cart';

import './AppStore.css'

const AppStore = () => {
    const [apps,setApps]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
       fetch('./appsData.JSON')
       .then(res=>res.json())
       .then(data=>setApps(data));
    },[])
    const handleAddToFavourite = app =>{
        const newCart =[...cart,app];
        setCart(newCart); 
    }
    return (
        <div className="container">
            <div className="app-container">
                {
                    apps.map(app=><Apps 
                        app={app}
                        key={app.id}
                        handleAddToFavourite={handleAddToFavourite}></Apps>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default AppStore;