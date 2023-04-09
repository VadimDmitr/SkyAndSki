import { useState, createContext } from "react";

export const cartDataContext = createContext({});

/* eslint-disable import/no-anonymous-default-export */
export default ({ children }) => {
	const [cart, setCart] = useState([]);

	const cartDataFromContext = {
		cart,
		setCart,
	};

	return (
		<cartDataContext.Provider value={cartDataFromContext}>
			{children}
		</cartDataContext.Provider>
	);
};
/* eslint-disable import/no-anonymous-default-export */
