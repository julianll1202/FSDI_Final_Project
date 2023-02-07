import "./restaurant-card.css";

const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            <img src= {"/img/"+props.data.image} alt=""/>
            <div className="restaurant-info">
                <h4>{props.data.name}</h4>
                <h5>Delivery fee | Wait time</h5>
                <div className="star-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;