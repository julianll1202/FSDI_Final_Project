import { useState } from "react";
import { Link } from "react-router-dom";
import "./restaurant-card.css";

const RestaurantCard = (props) => {
    const [fav, setFav] = useState(false);

    const addFavorite = () => {
        setFav(true);
    }

    const removeFavorite = () => {
        setFav(false);
    }
    return (
        <div className="restaurant-card">
            <img src= {"/img/"+props.data.image} alt=""/>
            {!fav ? <button onClick={addFavorite}><i class="bi bi-heart"></i></button>: <button onClick={removeFavorite}><i class="bi bi-heart-fill"></i></button>}
            <Link aria-current="page" to="/restaurant" state={props}>
                <div className="restaurant-info">
                    <h4>{props.data.name}</h4>
                    <h5>Delivery fee | Wait time</h5>
                    <div className="star-rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </div> 
                </div>
            </Link>
        </div>
    )
};

export default RestaurantCard;