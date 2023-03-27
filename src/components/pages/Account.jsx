import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../../contexts/userContext";
import { Accordion } from "../accordion/Accordion";
import { ChangePassword } from "../ChangePassword";
import { DeleteAccount } from "../DeleteAccount";
import { Logout } from "../Logout";

export const Account = () => {
    const navigate = useNavigate();
    const {userData} = useContext(userDataContext);

    useEffect(() => {
        console.log("userData =====> ", userData);
        if (userData === null) navigate ("/");
        // if (userData.token === null) navigate ("/");
    })

    if (userData) return (
        <section className="account wrapper">
            {/* {userData.token === "" ? <></> : <h1>Account</h1>} */}
            {/* {userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>} */}
            {/* {userData.token === null ? <></> : <h1>User name: {userData.user.name} <br/> Token: {userData.token}</h1>} */}
            <h1 className="account__greeting">Hello, {userData.user.name}</h1>
            <Accordion title="Order history">
                <p>123</p>
            </Accordion>
            <Accordion title="Change password">
                <ChangePassword />
            </Accordion>
            <Accordion title="Delete account">
                <DeleteAccount />
            </Accordion>
            <Accordion title="Log out">
                <Logout />
            </Accordion>
        </section>
    )
    return (<></>)
}

// userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>