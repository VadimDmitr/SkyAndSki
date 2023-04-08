import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "contexts/userContext";

export const Account = () => {
	const navigate = useNavigate();
	const { userData } = useContext(userDataContext);

	useEffect(() => {
		console.log("userData =====> ", userData);
		if (userData === null) navigate("/");
		// if (userData.token === null) navigate ("/");
	});

	if (userData)
		return (
			<>
				{/* {userData.token === "" ? <></> : <h1>Account</h1>} */}
				{/* {userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>} */}
				{userData.token === null ? (
					<></>
				) : (
					<h1>
						User name: {userData.user.name} <br /> Token:{" "}
						{userData.token}
					</h1>
				)}
			</>
		);
	return <></>;
};

// userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>
