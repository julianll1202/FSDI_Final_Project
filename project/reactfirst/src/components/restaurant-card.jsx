import { useEffect, useState, useContext } from "react";
import { Link} from "react-router-dom";
import "./restaurant-card.css";
import Dataservice from "../services/dataService";
import UserContext from "../state/userContext";
import Favorites from "../pages/favorites";

const RestaurantCard = (props) => {
    const [favorites, setFavorites] = useState([]);
    const user = useContext(UserContext).user;
    const [fav, setFav] = useState();
    useEffect(() => {
        loadFavorites();

    },[]);

    useEffect(() => {
        isFavorite();
    })

    const isFavorite = () => {
        for(let i = 0; i < favorites.length; i++) {
            if(props.data.id === favorites[i].rest_id || props.data.rest_id === favorites[i].rest_id) {
                console.log("its a fav");
                setFav(true)

            }
        }

    }
    
    const addFavorite = async () => {
        setFav(true);
        let service = new Dataservice();
        console.log(props.data);
        let res = await service.addFavorite(user.id, props.data.rest_id ? props.data.rest_id: props.data.id);
        console.log(res);
        
    }
    const removeFavorite = async () => {
        setFav(false);
        let service = new Dataservice();
        console.log(props.data);
        let res = await service.removeFavorite(user.id,props.data.rest_id ? props.data.rest_id: props.data.id );
        console.log(res);
        let copy =favorites.filter(x=>x.rest_id !== props.data.rest_id ? props.data.rest_id: props.data.id);
        setFavorites(copy);
        props.onDelete(props.data);
    }

    const loadFavorites = async () => {
        let service = new Dataservice();
        let list = await service.getFavorites(user.id)
        setFavorites(list);
        console.log(list);
 
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