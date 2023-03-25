import { useState, createContext } from "react";

export const userTokenContext = createContext({});

export default ({ children }) => {
    const [userToken, setUserToken] = useState(null);

    const userTokenData = {
        userToken, setUserToken
    }

    return <userTokenContext.Provider value={userTokenData}>{ children }</userTokenContext.Provider>
}