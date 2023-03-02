import { createContext } from "react";

let UserContext = createContext({
    user: {},   
    cart: [],
    protoOrder: {},
    addUser:() => {},
    logUserOut:() => {},
    addToCart: () => {},
    removeFromCart: () => {},
    addPOrder: () => {}
});

export default UserContext;