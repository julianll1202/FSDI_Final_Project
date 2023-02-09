import { useLocation } from "react-router-dom";
import RestaurantMenu from "../components/restaurantMenu";
import "./restaurant.css";

const Restaurant = (props) => {
    const location = useLocation();
    const state = location.state;
    // console.log(state);
    return (
        <div>
            <h1>Restaurants</h1>
                <RestaurantMenu data={state}/>
        </div>
    )
};

export default Restaurant;