import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
import { BASEURL } from "api/index";
import { NavLink } from "react-router-dom";

const BASEAUTHURL = BASEURL + "auth/";
const URL = BASEAUTHURL + "login";

export const Login = () => {
	const navigate = useNavigate();
	let { prevPath } = useLocation();
	console.log("prevPath ====> ", prevPath);
	const { userData, setUserData } =
		useContext(userDataContext);
	const [userFormData, setUserFormData] = useState({
		email: "",
		password: "",
	});
	// const [userFormData, setUserFormData] = useState({
	// 	email: "test@test.com",
	// 	password: "test@test.com",
	// });
	const [error, setError] = useState(null);

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
			.catch((errorResponse) => {
				setError(errorResponse);
				console.log("errorResponse ===> ", errorResponse);
				console.log("error ===> ", error);
			});
	};

	return (
		<div className="block__element">
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="block__form"
			>
				<h1 className="block__signin-title">Sign in</h1>
				<div className="block__link-group">
					<p className="block__text">New user?</p>
					<NavLink className="block__link" to={"/register"}>
						<p className="block__link-text">
							Create an account
						</p>
					</NavLink>
				</div>
				<label
					htmlFor="email"
					className="block__label"
				></label>
				<input
					type="email"
					id="email"
					name="email"
					value={userFormData.email}
					required
					onChange={(e) => handleChange(e)}
					className="block__input"
					placeholder="Email address"
				/>
				<label
					htmlFor="password"
					className="block__label"
				></label>
				<input
					type="password"
					id="password"
					name="password"
					value={userFormData.password}
					required
					onChange={(e) => handleChange(e)}
					className="block__input"
					placeholder="Password"
				/>
				<p>{error}</p>
				<button type="submit" className="block__button">
					CONTINUE
				</button>
			</form>
		</div>
	);
};
