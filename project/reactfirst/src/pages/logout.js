import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import Dataservice from '../services/dataService';

const Logout = () => {
    useEffect(() => {
        logOut();
    }, []);

    const logOut = async() => {
        let service = new Dataservice();
        let res = await service.logOutUser();
        console.log(res)
    }
    return (
        <div>
            <h1>Log out</h1>
            <p>You have logged out from your account, <Link aria-current="page" to="/login">Click here to log in.</Link></p>
        </div>
    )
}

export default Logout;