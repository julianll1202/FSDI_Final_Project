import { Link } from "react-router-dom";

function PromoView() {
    return (
        <div className="promo-view">
            <h1 className="title">Join FastFoodie</h1>
            <p>Connect with local restaurants and discover new and creative cuisines from the commodity of your home. Sign up now</p>
            <Link aria-current="page" to="/signup" className='redirect-link fill-btn'>Sign Up</Link>
            <div className="promo-photos">
                <img src="img/eiliv-aceron-9cSEkbjBaxA-unsplash.jpg" alt=""></img>
                <img src="img/pranjall-kumar-sejqj6Eaqe8-unsplash.jpg" alt=""></img>
                <img src="img/ting-tian-al9eh9QkdPA-unsplash.jpg" alt=""></img>
            </div>
        </div>
    );
}
export default PromoView;