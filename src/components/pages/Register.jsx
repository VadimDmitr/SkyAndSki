import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
import { BASEURL } from "api/index";
import { NavLink } from "react-router-dom";

const BASEAUTHURL = BASEURL + "auth";
const URL = BASEAUTHURL + "/register";

export const Register = () => {
	const navigate = useNavigate();
	const { userData, setUserData } =
		useContext(userDataContext);
	const [userFormData, setUserFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setUserFormData({
			...userFormData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
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
				// console.log(result);
				// console.log("type of result ====> ", typeof result);
				// console.log(JSON.parse(result));
				// console.log(
				// 	"JSON.parse(result).token ====> ",
				// 	JSON.parse(result).token
				// );
				// setUserData({ ...userData, token: JSON.parse(result).token})
				// setUserData({ ...userData, name: JSON.parse(result).name})
				const userDateFromBackend = {
					token: JSON.parse(result).token,
					user: JSON.parse(result).user,
				};
				setUserData({
					...userData,
					...userDateFromBackend,
				});
				// console.log("userData ====> ", userData);
				if (userData) {
					navigate("/account");
				}
			})
			.catch((error) => console.log("error", error));
	};

	return (
		<div className="block__element">
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="block__form"
			>
				<h1 className="block__signin-title">Sign up</h1>
				<div className="block__link-group">
					<p className="block__text">
						Already have an account?
					</p>
					<NavLink className="block__link" to={"/login"}>
						<p className="block__link-text">Sign in</p>
					</NavLink>
				</div>
				<label
					htmlFor="name"
					className="block__label"
				></label>
				<input
					type="text"
					id="name"
					name="name"
					value={userFormData.name}
					required
					onChange={(e) => handleChange(e)}
					className="block__input"
					placeholder="Name"
				/>
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
				<button type="submit" className="block__button">
					CONTINUE
				</button>
			</form>
		</div>
	);
};
