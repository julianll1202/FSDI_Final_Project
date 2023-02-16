
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
            <h1 className="title">Home</h1>
            <div className="home-section">
                <h1 className="subtitles">Featured Restaurants</h1>
                <div className="rest-list">
                    { restaurants.map(r => <RestaurantCard key={r.id} data={r}></RestaurantCard>)}   
                </div>
            </div>
            <div className="home-section">
                <h1 className="subtitles">Popular Categories</h1>
                <div className="rest-list">
                      { categories.map( c => <CategoryCard key={c.id} data={c} />)}
                </div>
            </div>
        </div>

    )
};

export default Home;