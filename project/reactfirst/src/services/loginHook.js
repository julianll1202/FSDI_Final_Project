import UserContext from "../state/userContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

function useLoginHook() {
    const user = useContext(UserContext).user;
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.loggedIn) {
            console.log("NOt logged in");
            navigate("/login");
        }
    },[])
}

export default useLoginHook;