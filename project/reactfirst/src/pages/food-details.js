import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QtyPicker from "../components/qty-picker";
import Dataservice from "../services/dataService";
import "./food-details.css";
import UserContext from "../state/userContext";

function FoodDetails(props) {
    const [food, setFood] = useState({});
    const [qty, setQty] = useState(1);
    const location = useLocation();
    const state = location.state;
    const addItemToCart = useContext(UserContext).addToCart;

    useEffect(() => {
        loadFoodInfo();
    },{});

    const loadFoodInfo = async () => {
        let service = new Dataservice();
        console.log(state);
        let info = await service.getFoodDetails(state.data.id);
        // console.log(info);
        setFood(info);
    }

    const handleQtyChange = (quantity) => {
        setQty(quantity);
        console.log(qty);
    }
    const addItem = () => {
        let cartItem = {
            "food_id":food.id,
            "food_img":food.image,
            "food_name": food.name,
            "price": food.price,
            "rest_id": food.restaurant_id,
            "rest_name": food.restaurant_name,
            "quantity": qty,
            "side_notes": document.getElementById("sidenotes").value
        };
        console.log(cartItem);
        addItemToCart(cartItem);
    }
    return (
        <div className="food-details">
            <img src={"/img/"+food.image}></img>
            <div className="details">
                <h3>{food.name}</h3>
                <p className="price">USD${food.price}</p>
                <p>{food.description}</p>
                <label className="form-label">Sidenotes</label>
                <textarea id="sidenotes" className="form-control"></textarea>
                <div className="detail-btns">
                    <QtyPicker onChange={handleQtyChange}></QtyPicker>
                    <button onClick={addItem}>Add to cart</button>
                </div>
                
            </div>
        </div>
    )
};

export default FoodDetails;