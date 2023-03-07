import UserContext from "./userContext";
import { useState } from "react";
import Dataservice from "../services/dataService";
const GlobalContext = (props) => {
    const [user, setUser] = useState({
        'loggedIn':false
    });
    const [cart, setCart] = useState([]);
    const [protoOrder, setPOrder] = useState({});
    const [restsInCart, setRestsInCart] = useState([]);

    const addUserIn = (newToken) => {
        let copy = {...newToken};
        copy['loggedIn'] = true;
        setUser(copy);
    }

    const logUserOut = () => {
        let copy = {
            "loggedIn": false
        };
        setUser(copy);
    }
    const addToCart = (newItem) => {
        let copy = [...cart];
        for(let i=0; i < copy.length; i++) {
            if (copy[i][0].rest_id === newItem.rest_id) {
                let found = false;
                let j = 0;
                for(j; j < copy[i].length; j++) {
                    if(copy[i][j].food_id === newItem.food_id) {
                        copy[i][j].quantity += newItem.quantity;
                        found = true;
                    }
                }
            
                if (!found) { 
                    copy[i][j] = newItem;
                    
                }
                setCart(copy);
                console.log(cart)
                return;
            }
        }
        let protoCart = [];
        protoCart.push(newItem);
        copy.push(protoCart);
        setCart(copy);
        console.log(cart);
    }

    const removeFromCart = (foodId) => {
        let copy = [...cart];
        for(let i=0; i < copy.length; i++) {
            if (copy[i].food_id === foodId) {
                copy.splice(i,1);
            }
        }
        setCart(copy);
    }

    const getRestaurantsInCart = async() => {
        let service = new Dataservice();
        let res = await service.loadRestaurants();
        let rests = [];

        for(let i = 0; i < res.length; i++) {
            for(let j = 0; j < cart.length; j++) {
                if(cart[j][0].rest_id == res[i].id) {
                    rests.push(res[i]);
                    break;
                }
            }
        }
        setRestsInCart(rests);
        console.log(restsInCart);
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
            restsInCart: restsInCart,
            addUser: addUserIn,
            logUserOut: logUserOut,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            getRestsInCart: getRestaurantsInCart,
            addPOrder: addProtoOrder
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default GlobalContext;