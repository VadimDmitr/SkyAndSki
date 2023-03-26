import { useState, createContext } from "react";

export const userDataContext = createContext({});

export default ({ children }) => {
	const [userData, setUserData] = useState(null);

	const userDataFromContext = {
		userData,
		setUserData,
	};

	return (
		<userDataContext.Provider value={userDataFromContext}>{children}</userDataContext.Provider>
	);
};
