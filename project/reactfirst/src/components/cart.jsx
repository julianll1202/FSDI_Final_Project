import { render } from "@testing-library/react";
import "./cart.css";
import QtyPicker from "./qty-picker";

function Cart() {
    
    const closeCart = () => {
        document.getElementById("cart").style.width = "0";
        document.getElementById("cart").style.visibility="hidden";
    }
    return (
        <div id="cart" className="shopping-cart">
            <button onClick={closeCart}><i class="bi bi-x-square"></i></button>
            <h2>Restaurant name</h2>
            <h4>Deliver to ...</h4>
            <ul className="product-list">
                <li>
                    <div className="product">
                        <h5>Food name</h5>
                        <p>Price</p>
                        <div>
                            <QtyPicker />
                        </div>
                    </div>
                    <img src="/img/burgers.jpg" alt="" />
                </li>
            </ul>
        </div>
    )
};

export default Cart;