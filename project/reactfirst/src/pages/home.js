
import RestaurantCard from "../components/restaurant-card";
import CategoryCard from "../components/category";
import Dataservice from "../services/dataService";
import { useEffect, useState } from "react";
import "./home.css"


function Home() {
    const [restaurants, setRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect (() => {
        loadRestaurants();
        loadCategories();
    },[])

    const loadRestaurants = async () => {
        let service = new Dataservice();
        let data = await service.loadRestaurants(); 
        setRestaurants(data);
        console.log(restaurants);
    }

    const loadCategories = async () => {
        let service = new Dataservice();
        let data = await service.loadCategories();
        setCategories(data);
        console.log(categories);
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
            <div>
                <h1>Categories</h1>
                <div className="rest-list">
                      { categories.map( c => <CategoryCard key={c.id} data={c} />)}
                </div>
            </div>
        </div>

    )
};

export default Home;