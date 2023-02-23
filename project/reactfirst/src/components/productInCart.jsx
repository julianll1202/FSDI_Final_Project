import "./productInCart.css";
import QtyPicker from "./qty-picker";
import { useState, useEffect, useContext } from "react";
import UserContext from "../state/userContext";

function ProductInCart(props) {
    const [product, setProduct] = useState({});
    const removeProd = useContext(UserContext).removeFromCart;

    useEffect(() => {
        setProduct(props.data);
    },[]);

    const handleQtyChange = (quantity) => {
        let prodCopy = {...product};
        prodCopy.quantity = quantity;
        console.log(prodCopy.quantity);
        setProduct(prodCopy);
    
    }

    const removeProduct = () => {
        removeProd(props.data.food_id)
    }

    return (
        <div className="product-cart">
            <div className="product">
                <h5>{props.data.food_name}</h5>
                <p>USD ${props.data.price}</p>
                <div>
                    <p id="prod-qty">{product.quantity}</p>
                    <QtyPicker onChange={handleQtyChange}/>
                    <button className="del-btn" onClick={removeProduct}><i class="bi bi-trash-fill"></i></button>
                </div>
                
            </div>
            <img src={"/img/"+props.data.food_img} alt="" />
            <hr width="200%" size="2"></hr>
        </div>
    )
};

export default ProductInCart;