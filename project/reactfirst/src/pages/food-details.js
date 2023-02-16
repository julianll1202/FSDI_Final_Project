import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QtyPicker from "../components/qty-picker";
import Dataservice from "../services/dataService";
import "./food-details.css"

function FoodDetails(props) {
    const [food, setFood] = useState({});
    const location = useLocation();
    const state = location.state;

    useEffect(() => {
        loadFoodInfo();
    },{});

    const loadFoodInfo = async () => {
        let service = new Dataservice();
        console.log(state);
        let info = await service.getFoodDetails(state.data.id);
        console.log(info);
        setFood(info);
    }
    return (
        <div className="food-details">
            <img src={"/img/"+food.image}></img>
            <div className="details">
                <h3>{food.name}</h3>
                <p className="price">USD${food.price}</p>
                <p>{food.description}</p>
                <label className="form-label">Sidenotes</label>
                <textarea className="form-control"></textarea>
                <div className="detail-btns">
                    <QtyPicker></QtyPicker>
                    <button>Add to cart</button>
                </div>
                
            </div>
        </div>
    )
};

export default FoodDetails;