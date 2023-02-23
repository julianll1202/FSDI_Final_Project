import UserContext from "./userContext";
import { useState } from "react";
const GlobalContext = (props) => {
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    const [protoOrder, setPOrder] = useState({});

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

    const removeFromCart = (foodId) => {
        let copy = [...cart];
        for(let i=0; i < copy.length; i++) {
            if (copy[i].food_id == foodId) {
                copy.splice(i,1);
            }
        }
        setCart(copy);
    }

    const addProtoOrder = (newOrder) => {
        setPOrder(newOrder);
        console.log(protoOrder);
    }
    return (
        <UserContext.Provider value ={{
            user: user,
            cart: cart,
            protoOrder: protoOrder,
            addUser: addUserIn,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            addPOrder: addProtoOrder
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default GlobalContext;