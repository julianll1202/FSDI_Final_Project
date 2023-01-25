import './login.css';
import {useEffect, useState} from 'react';

const Login = () => {
    const [userCred, setUserCred] = useState({});

    const handleUserCredChange = (e) => {
        e.preventDefault();
        const text = e.target.value;
        const name = e.target.name;

        let copy = {...userCred};
        copy[name] = text;
        setUserCred(copy);
        
    }

    const saveUserCred = (e) => {
        e.preventDefault();
        console.log(userCred);
    }

    return (
        <div className='login'>
            <div className='login-card'>
                <h1>Log In</h1>
                <h3>Enter your credentials</h3>
                <form className="mb-3 login-form" onSubmit={saveUserCred}>
                    <input name="email" type="text" className="form-control" placeholder="Email address" onChange={handleUserCredChange} />
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleUserCredChange}/>                                  
                    <button className='btn btn-success' type='submit'>LOG IN</button>                                  
                </form>
            </div>
        </div>
        
    )
};

export default Login;