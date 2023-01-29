import "./acc-security.css"

function AccountSecurity () {
    return (
        <div className="acc-security">
            <h1>Account security</h1>
            <div className="two-step">
                <h3>Two-step verification</h3>
                <p>Two-Factor authentication (2FA for short) is a good way to add an extra layer of security to your account and make sure that only you have the ability to log in.</p>
                <button className="inline-btn">Enable 2FA</button>
            </div>
        </div>
    );
}

export default AccountSecurity;