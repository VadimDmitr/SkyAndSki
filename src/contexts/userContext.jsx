import { useState, createContext } from "react";

export const userDataContext = createContext({});

/* eslint-disable import/no-anonymous-default-export */
export default ({ children }) => {
    const [userData, setUserData] = useState(null);

    const userDataFromContext = {
        userData, setUserData
    }

    return <userDataContext.Provider value={userDataFromContext}>{ children }</userDataContext.Provider>
}
/* eslint-disable import/no-anonymous-default-export */