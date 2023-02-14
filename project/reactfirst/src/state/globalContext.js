import UserContext from "./userContext";
import { useState } from "react";
const GlobalContext = (props) => {
    const [user, setUser] = useState({});

    const addUserIn = (newToken) => {
        let copy = {...newToken};
        copy['loggedIn'] = true;
        setUser(copy);
    }
    return (
        <UserContext.Provider value ={{
            user: user,
            addUser: addUserIn
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default GlobalContext;