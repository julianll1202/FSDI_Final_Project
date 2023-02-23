import { createContext } from "react";

let UserContext = createContext({
    user: {},   
    cart: [],
    protoOrder: {},
    addUser:() => {},
    addToCart: () => {},
    removeFromCart: () => {},
    addPOrder: () => {}
});

export default UserContext;