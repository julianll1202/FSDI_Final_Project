import './login.css';
import {useContext, useEffect, useState} from 'react';
import Dataservice from '../services/dataService';
import { Link, useNavigate } from 'react-router-dom';
import Home from './home';
import UserContext from '../state/userContext';


const Login =()=> {
    const [userCred, setUserCred] = useState({});
    const addNewUser = useContext(UserContext).addUser;
    const navigate = useNavigate();
    const handleUserCredChange = (e) => {
        e.preventDefault();
        const text = e.target.value;
        const name = e.target.name;

        let copy = {...userCred};
        copy[name] = text;
        setUserCred(copy);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveUserCred();
    }
    const saveUserCred = async() => {
        let service = new Dataservice();
        let copy = {...userCred};
        console.log(copy['email']);
        let p = await service.validateUserCred(copy);
        console.log(p);
        addNewUser(p);
        navigate("/home");
    }

    return (
        <div className='login'>
            <div className='login-card'>
                <h1>Log In</h1>
                <h3>Enter your credentials</h3>
                <form className="mb-3 login-form" onSubmit={handleSubmit}>
                    <input name="email" type="text" className="form-control" placeholder="Email address" onChange={handleUserCredChange} />
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleUserCredChange}/>  
                    <Link aria-current="page" to="/signup" className='redirect-link'>Don't have an account? Click here to sign up</Link>                                
                    <button className='btn btn-success' type='submit'>LOG IN</button>                                  
                </form>
            </div>
        </div>
        
    )
};

export default Login;
