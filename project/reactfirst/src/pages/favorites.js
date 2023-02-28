import Dataservice from "../services/dataService";
import "./favorites.css";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/restaurant-card";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        loadFavorites();
    },[]);

    const loadFavorites = async () => {
        let service = new Dataservice();
        let list = await service.getFavorites(1)
        setFavorites(list);
        console.log(list);
    }
    return(
        <div>
            <h1 className="title">User favorites</h1>
            {favorites.map(fav => <RestaurantCard key={fav.fav_id} data={fav} />)}
        </div>
    )
}

export default Favorites;