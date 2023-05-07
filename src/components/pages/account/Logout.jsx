import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "contexts/userContext";

export const Logout = () => {
	const { userData, setUserData } =
		useContext(userDataContext);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		// const userDataNull = {
		// 	user: null,
		// 	token: null,
		// };
		const userDataNull = null;
		setUserData({ ...userData, ...userDataNull });
		navigate("/");
		console.log("userData ====> ", userData);
		console.log("logged out!");
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<button type="submit">Log out</button>
		</form>
	);
};
