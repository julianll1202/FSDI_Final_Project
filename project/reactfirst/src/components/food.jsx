import './food.css';
import { Link } from 'react-router-dom';


function Food (props) {
    return (
        
        <Link aria-current="page" to="/food-details" className='food-card' state={props}>
            <div className='food-info'>
                <h4>{props.data.name}</h4>
                <p>{props.data.desc}</p>
                
                <div className="info-btn">
                    <p>USD${props.data.price}</p>
                </div>
            </div>
            <img src={"/img/"+props.data.image} alt="" />
        </Link>

    )
};

export default Food;