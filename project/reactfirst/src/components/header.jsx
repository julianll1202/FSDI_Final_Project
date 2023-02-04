import "./header.css";
import "./acc-security.css"
import {Link} from 'react-router-dom';
import AddressSelector from "./address-selector";
import Cart from "./cart";
import { useState } from "react";

function Header(){
    
    const toggleCart = () => {
        document.getElementById("cart").style.width = "250px";
        document.getElementById("cart").style.visibility = "visible";
    }

    return (
        <div className="header">
            <Link aria-current="page" to="/home">FastFoodie</Link>
            <AddressSelector />
            
            <Link className="inline-btn" aria-current="page" to="/signup">Sign Up</Link>
            <Link className="fill-btn" aria-current="page" to="/login">Log In</Link>
            <button id="cart-btn" onClick={toggleCart} className="round-fill-btn" ><i class="bi bi-cart2"></i> Cart</button>
            <div className="dropdown">
                <button className="round-fill-btn dropdown-toggle" data-bs-toggle="dropdown">Hi, user</button>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/user-profile"><i class="bi bi-person-circle"></i> User Profile</Link>       
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/logout"><i class="bi bi-box-arrow-right"></i> Log Out</Link>
                    </li>
                </ul>
            </div>
            <Cart />
        </div>
    );
}

export default Header;