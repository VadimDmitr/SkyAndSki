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
            {/* {userToken.token === "" ? <></> : <h1>Account</h1>} */}
            {userToken.token === "" ? <></> : <h1>{JSON.stringify(userToken, null, 4)}</h1>}
        </>

    )
}