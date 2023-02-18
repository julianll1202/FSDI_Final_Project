import "./productInCart.css";
import QtyPicker from "./qty-picker";
import { useState, useEffect } from "react";

function ProductInCart(props) {
    const [product, setProduct] = useState({});
    

    useEffect(() => {
        setProduct(props.data);
    },[]);

    const handleQtyChange = (quantity) => {
        let prodCopy = {...product};
        prodCopy.quantity = quantity;
        console.log(prodCopy.quantity);
        setProduct(prodCopy);
    
    }

    return (
        <div className="product-cart">
            <div className="product">
                <h5>{props.data.food_name}</h5>
                <p>USD ${props.data.price}</p>
                <div>
                    <p id="prod-qty">{product.quantity}</p>
                    <QtyPicker onChange={handleQtyChange}/>
                </div>
                
            </div>
            <img src={"/img/"+props.data.food_img} alt="" />
            <hr width="200%" size="2"></hr>
        </div>
    )
};

export default ProductInCart;