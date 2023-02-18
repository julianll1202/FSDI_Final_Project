import "./cart.css";
import UserContext from "../state/userContext";
import { useContext, useState } from "react";
import ProductInCart from "./productInCart";

const Cart = () => {
    const cart = useContext(UserContext).cart;
    const user = useContext(UserContext).user;
    const [order, setOrder] = useState({});

    const closeCart = () => {
        document.getElementById("cart").style.width = "0";
        document.getElementById("cart").style.visibility="hidden";
    }

    const handleOrder = () => {
        let orderCopy = {
            "user": user,
            "delivery_address": "Not available",
            "items": cart,
        }
        console.log(orderCopy)
    }
    return (
        <div id="cart" className="shopping-cart">
            <button className="close-btn" onClick={closeCart}><i class="bi bi-x-square"></i></button>
            <h2>Restaurant name</h2>
            <h4>Deliver to ...</h4>
            <div className="product-list">
                {cart ? cart.map(prod => <ProductInCart key={prod.food_id} data={prod} />) : console.log("Empty cart")}
            </div>
            <button className="pill-btn" onClick={handleOrder}>Proceed to Checkout</button>
        </div>
    )
};

export default Cart;