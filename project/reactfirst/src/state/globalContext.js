import UserContext from "./userContext";
import { useState } from "react";
const GlobalContext = (props) => {
    const [token, setToken] = useState({});

    const addToken = (newToken) => {
        setToken(newToken);
    }
    return (
        <UserContext.Provider value ={{
            user: token,
            addToken: addToken
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default GlobalContext;