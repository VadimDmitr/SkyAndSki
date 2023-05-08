import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
import { AccountMobile } from "components/pages/account/AccountMobile";
import { OrderHistory } from "components/pages/account/orders/OrderHistory";
import { ChangePassword } from "components/pages/account/ChangePassword";
import { DeleteAccount } from "components/pages/account/DeleteAccount";
// import { Logout } from "./Logout";

export const Account = () => {
	const [view, setView] = useState("order-history");
	const navigate = useNavigate();
	const { userData, setUserData } =
		useContext(userDataContext);

	useEffect(() => {
		console.log("userData =====> ", userData);
		if (Object.keys(userData).length === 0) navigate("/");
		// if (userData === null) navigate("/");
		// if (userData.token === null) navigate ("/");
	});

	const logout = () => {
		const userDataNull = {
			user: null,
			token: null,
		};
		setUserData({ ...userData, ...userDataNull });
		console.log("userData ====> ", userData);
		console.log("logged out!");
		navigate("/");
	};
	const test =() => {
		navigate("/");
	}
	const changeView = (str) => {
		switch (str) {
			case "order-history":
				setView("order-history");
				break;

			case "change-password":
				setView("change-password");
				break;

			case "delete-account":
				setView("delete-account");
				break;

			case "log-out":
				setView("log-out");
				break;

			default:
				setView("order-history");
				break;
		}
	};

	// if (userData)
	if (userData?.user) {
		return (
			<section className="wrapper">
				<div className="account mobile">
					<AccountMobile />
				</div>
				<div className="account desktop">
					<div className="account__sidebar">
						<h2 className="account__greeting">
							Hello,{" "}
							{Object.keys(userData).length === 0 ? (
								userData.user.name
							) : (
								<></>
							)}
						</h2>
						<p
							className="account__sidebar-heading pointer"
							onClick={() => changeView("order-history")}
						>
							Order history
						</p>
						<p
							className="account__sidebar-heading pointer"
							onClick={() => changeView("change-password")}
						>
							Change password
						</p>
						<p
							className="account__sidebar-heading pointer"
							onClick={() => changeView("delete-account")}
						>
							Delete account
						</p>
						<Link
							to="/"
							className="account__sidebar-heading"
							onClick={() => logout()}
						>
							Log out
						</Link>
					</div>
					<div className="account__switch-section desktop">
						{view === "order-history" ? (
							<OrderHistory />
						) : view === "change-password" ? (
							<ChangePassword />
						) : view === "delete-account" ? (
							<DeleteAccount />
						) : (
							<Link to="/" onClick={() => logout()} />
						)}
					</div>
				</div>
			</section>
		);
	} else {
		return test();
		// return navigate("/login");
	}
	// return <></>;
};

// userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>
