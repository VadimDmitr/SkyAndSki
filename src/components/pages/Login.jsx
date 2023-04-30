import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
import { BASEURL } from "api/index";

const BASEAUTHURL = BASEURL + "auth/";
const URL = BASEAUTHURL + "login";

export const Login = () => {
	const navigate = useNavigate();
	let { prevPath } = useLocation();
	console.log("prevPath ====> ", prevPath);
	const { userData, setUserData } =
		useContext(userDataContext);
	const [userFormData, setUserFormData] = useState({
		email: "test@test.com",
		password: "test@test.com",
	});

	const handleChange = (event) => {
		setUserFormData({
			...userFormData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// fetchData(URL, "POST", userInfo);

		fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userFormData),
		})
			.then((response) => response.text())
			.then((result) => {
				console.log(result);
				console.log("type of result ====> ", typeof result);
				console.log(JSON.parse(result));
				console.log(
					"JSON.parse(result).token ====> ",
					JSON.parse(result).token
				);
				const userDateFromBackend = {
					token: JSON.parse(result).token,
					user: JSON.parse(result).user,
				};
				setUserData({
					...userData,
					...userDateFromBackend,
				});
				// setUserData({ ...userData, name: JSON.parse(result).name})
				console.log("userData ====> ", userData);
				if (userData) {
					if (prevPath === "/checkout") {
						navigate("/checkout");
					} else {
						navigate("/account");
					}
				}
			})
			.catch((error) => console.log("error", error));
	};

	return (
		<div className="block__element">
			<form onSubmit={(e) => handleSubmit(e)} className="block__form">
				<label htmlFor="email" className="block__label">Email: </label>
				<input
					type="email"
					id="email"
					name="email"
					value={userFormData.email}
					required
					onChange={(e) => handleChange(e)}
					className="block__input"
				/>
				<label htmlFor="password" className="block__label">Password: </label>
				<input
					type="text"
					id="password"
					name="password"
					value={userFormData.password}
					required
					onChange={(e) => handleChange(e)}
					className="block__input"
				/>
				<button type="submit" className="block__button">CONTINUE</button>
			</form>
		</div>
	);
};
