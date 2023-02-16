import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
import RestaurantMenu from "../components/restaurantMenu";
import "./restaurant.css";
import Dataservice from "../services/dataService"

const Restaurant = (props) => {
    const location = useLocation();
    const state = location.state;
    console.log(state);
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        loadRestaurantDetails();
    }, {})
    const loadRestaurantDetails = async () => {
        let service = new Dataservice();
        let info = await service.getRestaurantDetails(state.data.id);
        console.log(info);
        setRestaurant(info);
    }

    return (
        <div className="rest">
            <div className="titles">
                <img src={"/img/"+restaurant.image}></img>
                <div>
                    <h1>{restaurant.name}</h1>
                    <p>
                    <i class="bi bi-pin-map-fill"></i> {restaurant.street +"-"+restaurant.country+" | "}<i class="bi bi-clock"></i> {restaurant.opening_time+" - "+restaurant.closing_time}
                    </p>
                    <p>{restaurant.rating+" "}<i class="bi bi-star-fill"></i></p>
                </div>
                
            </div>
            <RestaurantMenu data={state}/>
        </div>
    )
};

export default Restaurant;