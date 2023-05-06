import { useState, useEffect, useContext } from "react";
import { BASEURL } from "api/index";
import { userDataContext } from "contexts/userContext";
import { OrderCard } from "components/pages/account/orders/OrderCard";

export const OrderHistory = () => {
	const { userData } = useContext(userDataContext);
	const URL = BASEURL + "orders/user/";
	const [orders, setOrders] = useState([]);

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		console.log("userData.token ====> ", userData.token);
		const token = "Bearer " + userData.token;
		console.log("token ====> ", token);
		let myHeaders = new Headers();
		myHeaders.append("Authorization", token);
		myHeaders.append("Content-Type", "application/json");
		fetch(URL + userData.id, {
			method: "GET",
			headers: myHeaders,
		})
			.then((response) => response.text())
			.then((result) => {
				console.log("result ====> ", result);
				console.log(
					"JSON.parse(result) => ",
					JSON.parse(result)
				);
				setOrders([...JSON.parse(result).orders]);
			})
			.catch((error) => console.log("error", error));
	}, []);
	/* eslint-disable react-hooks/exhaustive-deps */

	return (
		<div>
			{/* double check if he have to do h1, h2, or h3 */}
			<h2 className="account__section-heading">Orders</h2>
			{orders.length > 0 ? (
				orders.map((order) => <OrderCard order={order} />)
			) : (
				<></>
			)}
		</div>
	);
};
