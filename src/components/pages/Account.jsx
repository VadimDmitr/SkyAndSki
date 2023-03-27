import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../../contexts/userContext";
import { AccountMobile } from "./account/AccountMobile";
import { ChangePassword } from "../ChangePassword";
import { DeleteAccount } from "../DeleteAccount";
import { Logout } from "../Logout";

export const Account = () => {
    const [view, setView] = useState("order-history");
    const navigate = useNavigate();
    const {userData} = useContext(userDataContext);

    useEffect(() => {
        console.log("userData =====> ", userData);
        if (userData === null) navigate ("/");
        // if (userData.token === null) navigate ("/");
    })

    const changeView = (str) => {
        switch (str) {
            case "order-history":
                setView("order-history");
                break;

            case "change-password":
                setView("change-password");
                break;

            case "delete-account":
                setView("delete-account");
                break;

            case "log-out":
                setView("log-out");
                break;

            default:
                setView("order-history");
                break;
        }
    }

    if (userData) return (
        <section className="wrapper">
            <div className="account mobile">
                <AccountMobile />
            </div>
            <div className="account desktop">
                <div className="account__sidebar">
                    <h1 className="account__greeting">Hello, {userData.user.name}</h1>
                    <p onClick={() => changeView("order-history")}>Order History</p>
                    <p onClick={() => changeView("change-password")}>Change password</p>
                    <p onClick={() => changeView("delete-account")}>Delete account</p>
                    <p onClick={() => changeView("log-out")}>Log out</p>
                </div>
                <div className="account__switch-section desktop">
                    { view === "order-history" ?
                        <div>order history</div> :
                            view === "change-password" ?
                                <ChangePassword /> :
                                view === "delete-account" ?
                                    <DeleteAccount /> :
                                        <Logout />
                    }
                </div>
            </div>
        </section>
    )
    return (<></>)
}

// userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>