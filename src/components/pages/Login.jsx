import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { userDataContext } from "../contexts/userContext";
import { BASEAUTHURL } from "../util/index";

const URL = BASEAUTHURL + "login";

export const Login = () => {
    // const navigate = useNavigate();
    const {userData, setUserData} = useContext(userDataContext);
    const [userFormData, setUserFormData] = useState({
        email: "test@test.com",
        password: "test@test.com"
    })

    const handleChange = (event) => {
        setUserFormData({ ...userFormData, [event.target.name]: event.target.value})
    }

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
        .then(response => response.text())
        .then(result => {
            console.log(result)
            console.log("type of result ====> ", typeof result);
            console.log(JSON.parse(result))
            console.log("JSON.parse(result).token ====> ", JSON.parse(result).token);
            const userDateFromBackend = {
                token: JSON.parse(result).token,
                user: JSON.parse(result).user
            }
            setUserData({ ...userData, ...userDateFromBackend})
            // setUserData({ ...userData, name: JSON.parse(result).name})
            console.log("userData ====> ", userData);
            if (userData) {
                navigate("/account");
            }
        })
        .catch(error => console.log('error', error))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                name="email"
                value={userFormData.email}
                required
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                id="password"
                name="password"
                value={userFormData.password}
                required
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Login</button>
        </form>
    )
}