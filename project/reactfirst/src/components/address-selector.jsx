import './address-selector.css';

function AddressSelector() {
    return (
        <div className='address-select'>
            <i class="bi bi-geo-alt-fill"></i>
            <input id='deli-addr' placeholder='Delivery address'/>
            <input type="time" id='deli-time'/>  
            
            
        </div>
    )
};

export default AddressSelector;