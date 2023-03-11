import { Link } from "react-router-dom";
const Payment = () => {
    
    return (
        <div className="payment">
            <h1 className="title">Order created</h1>
            <p>You have made a new order, wait for the driver to pick it up and deliver it to you.</p>
            <Link className="inline-btn" aria-current="page" to="/home">Go back home</Link>
        </div>
    )
}

export default Payment;