import { useEffect, useContext } from "react";
import { BASEURL } from "api/index";
import { userDataContext } from "contexts/userContext";

export const OrderHistory = () => {
	const { userData } = useContext(userDataContext);
	const URL = BASEURL + "orders";

	useEffect(() => {
		console.log("userData.token ====> ", userData.token);
		const token = "Bearer " + userData.token;
		console.log("token ====> ", token);
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			token
			// process.env.REACT_APP_USER_BEARER_TOKEN
		);
		myHeaders.append("Content-Type", "application/json");
		fetch(URL, {
			method: "GET",
			headers: myHeaders,
			// body: JSON.stringify(order),
		})
			.then((response) => response.text())
			.then((result) => {
				console.log("result ====> ", result);
				// setProducts([...JSON.parse(result).products]);
			})
			.catch((error) => console.log("error", error));
	});
	return (
		<div>
			{/* double check if he have to do h1, h2, or h3 */}
			<h2 className="account__section-heading">Orders</h2>
		</div>
	);
};
