import './address-selector.css';
import UserContext from '../state/userContext';
import { useContext } from 'react';

function AddressSelector() {
    const user = useContext(UserContext).user;
    const handleDAddress = (e) => {
        const text = e.target.value;
        const name = e.target.name;
        user[name] = text;
        console.log(user);
    }

    const handleDTime = (e) => {
        const text = e.target.value;
        const name = e.target.name;
        console.log(name);
        user[name] = text;
        console.log(user);
    }
    return (
        <div className='address-select'>
            <i class="bi bi-geo-alt-fill"></i>
            <input id='deli-addr' placeholder='Delivery address' name='delivery_address' onChange={handleDAddress}/>
            <input type="time" id='deli-time' name='delivery_time' onChange={handleDTime}/>  
            
            
        </div>
    )
};

export default AddressSelector;