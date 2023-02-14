import { createContext } from "react";

let UserContext = createContext({
    user: {},   
    addUser:() => {}
});

export default UserContext;