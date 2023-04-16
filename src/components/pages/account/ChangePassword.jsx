import { useState, useContext } from "react";
import { userDataContext } from "contexts/userContext";
import { BASEAUTHURL } from "api/index";

const URL = BASEAUTHURL + "removeuser";

export const ChangePassword = () => {
	const { userData, setUserData } =
		useContext(userDataContext);
	const [userFormData, setUserFormData] = useState({
		email: "test@test.com",
		emailToEdit: "test@test.com",
	});

	const handleChange = (event) => {
		setUserFormData({
			...userFormData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// fetchData(URL, "DELETE", userInfo);
		fetch(URL, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userFormData),
		})
			.then((response) => response.text())
			.then((result) => {
				console.log(result);
				console.log("type of result ====> ", typeof result);
				// console.log(JSON.stringify(result))
				setUserData({ ...userData, token: null });
				console.log("userData ====> ", userData);
			})
			.catch((error) => console.log("error", error));
	};

	return (
		<div className="account__section-content">
			<h2 className="account__section-heading">Password</h2>
			<form
				className="form"
				onSubmit={(e) => handleSubmit(e)}
			>
				<label className="label" htmlFor="email">
					Email:{" "}
				</label>
				<input
					className="input"
					type="text"
					id="email"
					name="email"
					required
					value="tests@test.com"
					onChange={(e) => handleChange(e)}
				/>
				<label className="label" htmlFor="email">
					Email To Edit:{" "}
				</label>
				<input
					className="input"
					type="text"
					id="email-to-edit"
					name="email-to-edit"
					required
					value="test@test.com"
					onChange={(e) => handleChange(e)}
				/>
				<button className="button pointer" type="submit">
					Change password
				</button>
			</form>
		</div>
	);
};
