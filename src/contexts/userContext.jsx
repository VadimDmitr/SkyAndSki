import { useState, createContext } from "react";

export const userTokenContext = createContext({});

export default ({ children }) => {
    const [userToken, setUserToken] = useState("");

    const userTokenData = {
        userToken, setUserToken
    }

    return <userTokenContext.Provider value={userTokenData}>{ children }</userTokenContext.Provider>
}