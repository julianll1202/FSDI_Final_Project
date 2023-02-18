import UserContext from "./userContext";
import { useState } from "react";
const GlobalContext = (props) => {
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);

    const addUserIn = (newToken) => {
        let copy = {...newToken};
        copy['loggedIn'] = true;
        setUser(copy);
    }

    const addToCart = (newItem) => {
        let copy = [...cart];

        let found = false
        for(let i=0; i < copy.length; i++) {
            if(copy[i].food_id == newItem.food_id) {
                copy[i].quantity += newItem.quantity;
                found = true;
            }
        }

        if (!found) { 
            copy.push(newItem);
            
        }
        setCart(copy);
        console.log(cart);
    }
    return (
        <UserContext.Provider value ={{
            user: user,
            cart: cart,
            addUser: addUserIn,
            addToCart: addToCart,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default GlobalContext;