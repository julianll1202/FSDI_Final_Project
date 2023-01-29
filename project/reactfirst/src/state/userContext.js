import { createContext } from "react";

let UserContext = createContext({
    user: {},
    addToken:() => {}
});

export default UserContext;