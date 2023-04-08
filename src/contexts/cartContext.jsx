import { useState, createContext } from "react";

export const cartDataContext = createContext({});

/* eslint-disable import/no-anonymous-default-export */
export default ({ children }) => {
	const [cart, setCart] = useState(null);

	const cartDataFromContext = {
		cart,
		setCart,
	};

	return (
		<cart.Provider value={cartDataFromContext}>
			{children}
		</cart.Provider>
	);
};
/* eslint-disable import/no-anonymous-default-export */
