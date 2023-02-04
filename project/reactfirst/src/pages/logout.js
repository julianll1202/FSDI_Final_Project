import {Link} from 'react-router-dom';

const Logout = () => {
    return (
        <div>
            <h1>Log out</h1>
            <p>You have logged out from your account, <Link aria-current="page" to="/login">Click here to log in.</Link></p>
        </div>
    )
}

export default Logout;