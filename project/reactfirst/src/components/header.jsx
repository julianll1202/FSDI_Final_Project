import "./header.css";
import {Link} from 'react-router-dom';
import AddressSelector from "./address-selector";

function Header(){

    return (
        <div className="header">
            <Link aria-current="page" to="/home">FastFoodie</Link>
            <AddressSelector />
            
            <Link aria-current="page" to="/signup">Sign Up</Link>
            <Link aria-current="page" to="/login">Log In</Link>
            <Link aria-current="page" to="/user-profile">Profile</Link>
        </div>
    );
}

export default Header;