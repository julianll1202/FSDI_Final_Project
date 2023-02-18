import { createContext } from "react";

let UserContext = createContext({
    user: {},   
    cart: [],
    addUser:() => {},
    addToCart: () => {}
});

export default UserContext;