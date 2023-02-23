import "./checkout.css";
import UserContext from "../state/userContext";
import { useContext } from "react";
import ProductInCart from "../components/productInCart";

function Checkout() {
    const order = useContext(UserContext).protoOrder;
    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkout">
                <div>
                    
                    <h3>Products</h3>
                    {order.items.map( prod => <ProductInCart key={prod.id} data={prod} />)}
                </div>
                <div className="order-details">
                    <h3>Order details</h3>
                    <p>Delivery address: {order.delivery_address}</p>
                    <p>Delivery time: {order.delivery_time}</p>
                    <p>Total: {order.order_total}</p>
                    <button className="btn btn-success">PAY</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;