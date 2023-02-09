
import { useState } from "react";
import './home.css'

import RestaurantCard from "../components/restaurant-card";
import Dataservice from "../services/dataService";
import { useEffect, useState } from "react";
import "./home.css"


function Home() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect (() => {
        loadRestaurants();
    },[])

    const loadRestaurants = async () => {
        let service = new Dataservice();
        let data = await service.loadRestaurants(); 
        setRestaurants(data);
        console.log(restaurants);
    }
    return (

        

        
        <div>
            <h1>Home</h1>
            <div>
                <h1>Restaurants</h1>
                <div className="rest-list">
                    { restaurants.map(r => <RestaurantCard key={r.id} data={r} />)}   
                </div>
            </div>
        </div>

    )
};

export default Home;