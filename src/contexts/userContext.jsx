import { useState, createContext } from "react";

export const userTokenContext = createContext({});

export default ({ children }) => {
    const [userData, setUserData] = useState(null);

    const userTokenData = {
        userData, setUserData
    }

    return <userTokenContext.Provider value={userTokenData}>{ children }</userTokenContext.Provider>
}