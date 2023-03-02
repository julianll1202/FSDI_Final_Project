import { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Dataservice from '../services/dataService';
import UserContext from '../state/userContext';
const Logout = () => {
    const removeUser = useContext(UserContext).logUserOut;
    useEffect(() => {
        logOut();
    }, []);

    const logOut = async() => {
        let service = new Dataservice();
        let res = await service.logOutUser();
        console.log(res)
        removeUser();
    }
    return (
        <div>
            <h1>Log out</h1>
            <p>You have logged out from your account, <Link aria-current="page" to="/login">Click here to log in.</Link></p>
        </div>
    )
}

export default Logout;