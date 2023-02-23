import "./cart.css";
import UserContext from "../state/userContext";
import { useContext, useState } from "react";
import ProductInCart from "./productInCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useContext(UserContext).cart;
    const user = useContext(UserContext).user;
    const addPOrder = useContext(UserContext).addPOrder;
    const [order, setOrder] = useState({});

    const closeCart = () => {
        document.getElementById("cart").style.width = "0";
        document.getElementById("cart").style.visibility="hidden";
    }

    const handleOrder = () => {
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
                <h2>{user.name}'s order</h2>
                <h4>Deliver to {user.delivery_address} </h4>
                <div className="product-list">
                    {cart ? cart.map(prod => <ProductInCart key={prod.food_id} data={prod} />) : console.log("Empty cart")}
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