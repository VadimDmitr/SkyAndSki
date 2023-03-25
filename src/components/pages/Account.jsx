import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userTokenContext } from "../../contexts/userContext";

export const Account = () => {
    const navigate = useNavigate();
    const {userToken} = useContext(userTokenContext);

    useEffect(() => {
        console.log("userToken =====> ", userToken);
        if (userToken.token === "") navigate ("/");
    })

    return (
        <>
            {userToken.token === "" ? <></> : <h1>Account</h1>}
        </>

    )
}