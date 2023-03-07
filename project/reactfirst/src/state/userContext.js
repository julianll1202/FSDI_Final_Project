import { createContext } from "react";

let UserContext = createContext({
    user: {},   
    cart: [],
    protoOrder: {},
    restsInCart: [],
    addUser:() => {},
    logUserOut:() => {},
    addToCart: () => {},
    removeFromCart: () => {},
    getRestsInCart: () => {},
    addPOrder: () => {}
});

export default UserContext;