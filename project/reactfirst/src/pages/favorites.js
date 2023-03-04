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

    const onDelete = (rest) => {
        let copy =favorites.filter(x=>x.rest_id !== rest.rest_id);
        setFavorites(copy);
    }
    return(
        <div >
            <h1 className="title">User favorites</h1>
            <div className="favorites">
                {favorites[0] != null ?
                    favorites.map(fav => <RestaurantCard  key={fav.rest_id} data={fav} onDelete={onDelete} />) :
                    <div>
                        <img  src="/img/fav.png" alt=""></img>
                        <h4>Here you will see all of your favorite restaurants</h4>
                    </div>
                }
            </div>
        </div>
    )
}

export default Favorites;