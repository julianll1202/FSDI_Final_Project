import Dataservice from "../services/dataService";
import "./favorites.css";
import { useContext, useEffect, useState } from "react";
import RestaurantCard from "../components/restaurant-card";
import UserContext from "../state/userContext";
import useLoginHook from "../services/loginHook";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const user = useContext(UserContext).user;
    useLoginHook();
    useEffect(() => {
        loadFavorites();
    },[]);

    const loadFavorites = async () => {
        let service = new Dataservice();
        let list = await service.getFavorites(user.id)
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