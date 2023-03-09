import "./cart.css";
import UserContext from "../state/userContext";
import { useContext, useEffect, useState } from "react";
import ProductInCart from "./productInCart";
import { Link, useNavigate } from "react-router-dom";
import Dataservice from "../services/dataService";

const Cart = () => {
    const cart = useContext(UserContext).cart;
    const user = useContext(UserContext).user;
    const addPOrder = useContext(UserContext).addPOrder;
    const [cartShown, setCartShown] = useState(0);
    // const getRestsInCart = useContext(UserContext).getRestsInCart;
    const navigate = useNavigate();
    
    
    const closeCart = () => {
        // getRestaurantsInCart();
        // console.log(restInC);
        document.getElementById("cart").style.width = "0";
        document.getElementById("cart").style.visibility="hidden";
    }
    
    const handleOrder = () => {
        user.delivery_address ? console.log("Everything is all right"): alert("Please enter your delivery address");
        if (user.delivery_time) {
            let orderCopy = {
            "user_id": user.id,
            "delivery_address": user.delivery_address,
            "order_date": new Date().toJSON(),
            "delivery_time": user.delivery_time,
            "items": cart[cartShown],
            "order_total": getTotal().toString()
            }
            addPOrder(orderCopy);
            console.log(orderCopy)
            navigate("/checkout");
        } else {
            alert("Please enter your delivery time")
        }
        
        
    }
    
    const getTotal = () => {
        let total = 0;
        let copy = [...cart[cartShown]]
        for(let i = 0; i < copy.length; i++) {
            let prod = copy[i];
            total += (prod.price*prod.quantity);
        }
        return total.toFixed(2);
    }
    const [restInC, setRestInC] = useState([]);
    
    const getRestaurantsInCart = async() => {
        let service = new Dataservice();
        let res = await service.loadRestaurants();
        let rests = [];
        let copy = [...cart]
        for(let i = 0; i < res.length; i++) {
            for(let j = 0; j < copy.length; j++) {
                if(copy[j][0].rest_id == res[i].id) {
                    rests.push(res[i]);
                    break;
                }
            }
        }
        console.log(rests);
        
        setRestInC(rests);
    }
    return (
        <div>
            
        {cart[0] ? <div id="cart" className="shopping-cart">
                <button className="close-btn" onClick={closeCart}><i class="bi bi-x-square"></i></button>
                <h2>{user.name}'s order on</h2>
                {/* Restaurant cart selector */}
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" onClick={getRestaurantsInCart} aria-expanded="false">
                        Restaurant ...
                    </button>
                    <ul class="dropdown-menu">
                        {restInC.map((r, index) => <li id={r.id}><button onClick={() => setCartShown(index)}>{r.name}</button> </li>)}
                    </ul>
                </div>
                <h4>Deliver to {user.delivery_address} </h4>
                <div className="product-list">
                    {cart ? cart[cartShown].map(prod => <ProductInCart key={prod.food_id} data={prod} />) : console.log("Empty cart")}
                </div>
                <h5>Subtotal: USD ${getTotal()}</h5>
                <button className="pill-btn" onClick={handleOrder}>Proceed to Checkout</button>
            </div> : <div id="cart" className="shopping-cart">
                <button className="close-btn" onClick={closeCart}><i class="bi bi-x-square"></i></button>
                <h2 className="empty-cart">Empty cart</h2>
                <p id="empty"><i  class="bi bi-cart-x-fill"></i></p>
            </div>

        }</div>
        
    )
};

export default Cart;