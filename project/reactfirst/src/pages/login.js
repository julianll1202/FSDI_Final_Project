import './login.css';
import {useEffect, useState} from 'react';
import Dataservice from '../services/dataService';
import { useNavigate } from 'react-router-dom';
import Home from './home';

const Login = () => {
    const [userCred, setUserCred] = useState({});
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
        if (saveUserCred()){
            navigate('/home');
        } else {
            navigate('/login');
        }
    }
    const saveUserCred = async() => {
        let service = new Dataservice;
        let copy = {...userCred};
        console.log(copy['email']);
        let p = await service.validateUserCred(copy);
        console.log(p['email']);
        if (p['email'] == copy['email']){
            console.log('We are going home');
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className='login'>
            <div className='login-card'>
                <h1>Log In</h1>
                <h3>Enter your credentials</h3>
                <form className="mb-3 login-form" onSubmit={handleSubmit}>
                    <input name="email" type="text" className="form-control" placeholder="Email address" onChange={handleUserCredChange} />
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleUserCredChange}/>                                  
                    <button className='btn btn-success' type='submit'>LOG IN</button>                                  
                </form>
            </div>
        </div>
        
    )
};

export default Login;