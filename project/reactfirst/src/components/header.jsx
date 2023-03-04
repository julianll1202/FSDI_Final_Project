import "./header.css";
import "./acc-security.css"
import {Link} from 'react-router-dom';
import AddressSelector from "./address-selector";
import Cart from "./cart";
import { useContext } from "react";
import UserContext from "../state/userContext";

function Header(){
    
    const toggleCart = () => {
        document.getElementById("cart").style.width = "350px";
        document.getElementById("cart").style.visibility = "visible";
    }

    const u = useContext(UserContext);

    return (
        <div className="header">
            <Link aria-current="page" to="/home" className="home-link">FastFoodie</Link>
            
            
            
            {u.user.loggedIn ? 
                <div className="logged">
                    <AddressSelector />
                    <div className="logged-users-opt">
                        <button id="cart-btn" onClick={toggleCart} className="round-fill-btn" ><i class="bi bi-cart2"></i> Cart</button> 
                        <div className="dropdown">
                            <button className="round-fill-btn dropdown-toggle" data-bs-toggle="dropdown">Hi, {u.user.name}</button>
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
                    </div> </div> : 
                    <div className="logged-users-opt">
                        <Link className="inline-btn" aria-current="page" to="/signup">Sign Up</Link>
                        <Link className="fill-btn" aria-current="page" to="/login">Log In</Link>
                    </div>
                
            }
            
            
            
        </div>
    );
}

export default Header;