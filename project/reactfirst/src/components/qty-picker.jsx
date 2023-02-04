import "./qty-picker.css";
import { useState } from "react";
function QtyPicker() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <button><i class="bi bi-plus-lg"></i></button>
            <label>{quantity}</label>
            <button><i class="bi bi-dash-lg"></i></button>
        </div>
    )
};

export default QtyPicker;