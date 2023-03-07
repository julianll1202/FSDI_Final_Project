import "./cart.css";
import UserContext from "../state/userContext";
import { useContext, useEffect, useState } from "react";
import ProductInCart from "./productInCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useContext(UserContext).cart;
    const user = useContext(UserContext).user;
    const addPOrder = useContext(UserContext).addPOrder;
    const restsInCart = useContext(UserContext).restsInCart;
    const [cartShown, setCartShown] = useState(0);
    const getRestsInCart = useContext(UserContext).getRestsInCart;

    useEffect(() => {
        getRestsInCart();
    },[]);

    
    const closeCart = () => {
        document.getElementById("cart").style.width = "0";
        document.getElementById("cart").style.visibility="hidden";
    }

    const handleOrder = () => {
        user.delivery_address ? console.log("Everything is all right"): alert("Please enter your delivery address")
        user.delivery_time ? console.log("Everything is all right") : alert("Please enter your delivery time")
        let orderCopy = {
            "user_id": user.id,
            "delivery_address": user.delivery_address,
            "order_date": new Date().toJSON(),
            "delivery_time": user.delivery_time,
            "items": cart,
            "order_total": getTotal().toFixed(2).toString()
        }
        addPOrder(orderCopy);
        // console.log(orderCopy);
    }

    const getTotal = () => {
        let total = 0;
        for(let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += (prod.price*prod.quantity);
        }
        return total;
    }
    return (
        <div>
        {cart[0] ? <div id="cart" className="shopping-cart">
                <button className="close-btn" onClick={closeCart}><i class="bi bi-x-square"></i></button>
                <h2>{user.name}'s order on</h2>
                {/* Restaurant cart selector */}
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Restaurant ...
                    </button>
                    <ul class="dropdown-menu">
                        {/* Array of restaurant names in the order of the cart,  */}
                        {restsInCart.map((r, index) => <li id={r.id}><button onClick={setCartShown(index)}>{r.name}</button> </li>)}
                    </ul>
                </div>
                <h4>Deliver to {user.delivery_address} </h4>
                <div className="product-list">
                    {cart ? cart[cartShown].map(prod => <ProductInCart key={prod.food_id} data={prod} />) : console.log("Empty cart")}
                </div>
                <h5>Subtotal: USD ${getTotal()}</h5>
                <Link  aria-current="page" to="/checkout" ><button className="pill-btn" onClick={handleOrder}>Proceed to Checkout</button></Link>
            </div> : <div id="cart" className="shopping-cart">
                <button className="close-btn" onClick={closeCart}><i class="bi bi-x-square"></i></button>
                <h2 className="empty-cart">Empty cart</h2>
                <p id="empty"><i  class="bi bi-cart-x-fill"></i></p>
            </div>

        }</div>
        
    )
};

export default Cart;