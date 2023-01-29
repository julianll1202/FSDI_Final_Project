import UserInfo from "../components/user-info";
import PaymentMethods from "../components/pay-methods";
import AccountSecurity from "../components/acc-security";
import "./profile.css"
import { useContext, useState } from "react";
import UserContext from "../state/userContext";

const Profile = () => {
    const [accInfo, setAccInfo] = useState()
    const [payMet, setPayMet] = useState()
    const [accSec, setAccSec] = useState()
    const t = useContext(UserContext);

    
    const viewUserInfo = () => {
        document.getElementById("acc-info").style.backgroundColor = "lightgray";
        document.getElementById("acc-info").style.borderLeft = "4px solid #ff4800";
        document.getElementById("pay-meth").style.backgroundColor = "white";
        document.getElementById("pay-meth").style.borderLeft = "none";
        document.getElementById("acc-sec").style.backgroundColor = "white";
        document.getElementById("acc-sec").style.borderLeft = "none";
        setAccInfo(true);
        setAccSec(false);
        setPayMet(false);
        console.log(t.user);
    }

    const viewPayMethods = () => {
        document.getElementById("pay-meth").style.backgroundColor = "lightgray";
        document.getElementById("pay-meth").style.borderLeft = "4px solid #ff4800";
        document.getElementById("acc-info").style.backgroundColor = "white";
        document.getElementById("acc-info").style.borderLeft = "none";
        document.getElementById("acc-sec").style.backgroundColor = "white";
        document.getElementById("acc-sec").style.borderLeft = "none";
        setAccInfo(false);
        setAccSec(false);
        setPayMet(true);
    }

    const viewAccSecurity = () => {
        document.getElementById("acc-sec").style.backgroundColor = "lightgray";
        document.getElementById("acc-sec").style.borderLeft = "4px solid #ff4800";
        document.getElementById("pay-meth").style.backgroundColor = "white";
        document.getElementById("pay-meth").style.borderLeft = "none";
        document.getElementById("acc-info").style.backgroundColor = "white";
        document.getElementById("acc-info").style.borderLeft = "none";
        setAccInfo(false);
        setAccSec(true);
        setPayMet(false);
    }
    return (
        <div className="profile">
            <div className="profile-menu">
                <button id="acc-info" onClick={viewUserInfo}>Account information</button>
                <button id="pay-meth" onClick={viewPayMethods}>Payment methods</button>
                <button id="acc-sec" onClick={viewAccSecurity} >Security and privacy</button>
            </div>
            <div>
                {accInfo ? <UserInfo data={t.user}/>: payMet ? <PaymentMethods /> :  <AccountSecurity />}
            </div>
            
        </div>
    )
};

export default Profile;