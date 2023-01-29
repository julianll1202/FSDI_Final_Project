import "./acc-security.css";
import "./pay-methods.css";

function PaymentMethods() {
    return (
        <div>
            <h1>Payment methods</h1>
            <ul className="pay-list">
                <li className="payment"> <i class="bi bi-credit-card"></i> Credit card ending in 4567</li>
                <li> <i class="bi bi-credit-card"></i> Debit card ending in 4567</li>
                <li> <i class="bi bi-cash-coin"></i> Cash</li>
                <li> <i class="bi bi-paypal"></i> PayPal</li>
            </ul>
            <button className="inline-btn">Add payment method</button>
        </div>
    )

}

export default PaymentMethods;