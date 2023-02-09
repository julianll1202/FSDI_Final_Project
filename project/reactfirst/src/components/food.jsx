import './food.css';

function Food (props) {
    return (
        <div className='food-card'>
            <div className='food-info'>
                <h4>{props.data.name}</h4>
                <p>{props.data.desc}</p>
                <p>{props.data.price}</p>
            </div>
            <img src={"/img/"+props.data.image} alt="" />
        </div>
    )
};

export default Food;