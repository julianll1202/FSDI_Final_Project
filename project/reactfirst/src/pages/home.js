import RestaurantCard from "../components/restaurant-card";
import CategoryCard from "../components/category";
import Dataservice from "../services/dataService";
import { useContext, useEffect, useState } from "react";
import "./home.css"
import UserContext from "../state/userContext";
import { useNavigate } from "react-router-dom";
import useLoginHook from "../services/loginHook";

function Home() {
    const [restaurants, setRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);
    useLoginHook();
    
    // todo: move this lines to a custom hook that I can call on private pages
    // const user = useContext(UserContext).user;
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!user.loggedIn) {
    //         console.log("NOt logged in");
    //         navigate("/login");
    //     }
    // },[])

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