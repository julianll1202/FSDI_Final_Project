import "./qty-picker.css";

import { useState } from "react";
function QtyPicker() {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        let copy = quantity + 1;
        setQuantity(copy);
        console.log(copy);
    }

    const decrease = () => {
        let copy = quantity - 1;
        
        if(copy > 0) {
            setQuantity(copy);
        } else {

        }
    }

    return (
        <div className="qty-picker">
            <button onClick={decrease}><i class="bi bi-dash-lg"></i></button>
            <label>{quantity}</label>
            <button onClick={increase} ><i class="bi bi-plus-lg"></i></button>
        </div>
    )
};

export default QtyPicker;