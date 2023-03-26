import { useContext } from "react";
import { userDataContext } from "../contexts/userContext";

export const Logout = () => {
	const { userData, setUserData } = useContext(userDataContext);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const userDataNull = {
			user: null,
			token: null,
		};
		setUserData({ ...userData, ...userDataNull });
		console.log("userData ====> ", userData);
		console.log("logged out!");
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<button type="submit">Log out</button>
		</form>
	);
};
