import "./checkout.css";
import UserContext from "../state/userContext";
import { useContext } from "react";
import ProductInCart from "../components/productInCart";
import Dataservice from "../services/dataService";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const order = useContext(UserContext).protoOrder;
    const navigate = useNavigate();

    const sendOrder = async() => {
        console.log(order);
        let service =  new Dataservice();
        let res = await service.saveOrder(order);
        console.log(res);
        navigate("/payment");
    }

    return (
        <div>
            <h1 className="title">Checkout</h1>
            <div className="checkout">
                <div className="prod-list">
                    <h3>Products</h3>
                    {order.items.map( prod => <ProductInCart key={prod.id} data={prod} />)}
                </div>
                <div className="order-details">
                    <h3 className="title">Order details</h3>
                    <p>Delivery address: {order.delivery_address}</p>
                    <p>Delivery time: {order.delivery_time}</p>
                    <p>Total: {order.order_total}</p>
                    <button className="btn btn-success" onClick={sendOrder}>PAY</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;