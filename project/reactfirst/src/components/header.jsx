import "./header.css";
import {Link} from 'react-router-dom';
function Header(){

    return (
        <div className="header">
            <h1>FastFoodie</h1>
            <Link aria-current="page" to="/signup">Sign Up</Link>
        </div>
    );
}

export default Header;