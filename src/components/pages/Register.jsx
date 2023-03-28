import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../../contexts/userContext";
import { BASEAUTHURL } from "../../api/index";

const URL = BASEAUTHURL + "register";

export const Register = () => {
    const navigate = useNavigate();
    const {userData, setUserData} = useContext(userDataContext);
    const [userFormData, setUserFormData] = useState({
        name: "test@test.com",
        email: "test@test.com",
        username: "test@test.com",
        password: "test@test.com",
    });

    const handleChange = (event) => {
        setUserFormData({ ...userFormData, [event.target.name]: event.target.value });
    }

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
        .then(response => response.text())
        .then(result => {
            console.log(result)
            console.log("type of result ====> ", typeof result);
            console.log(JSON.parse(result))
            console.log("JSON.parse(result).token ====> ", JSON.parse(result).token);
            // setUserData({ ...userData, token: JSON.parse(result).token})
            // setUserData({ ...userData, name: JSON.parse(result).name})
            const userDateFromBackend = {
                token: JSON.parse(result).token,
                user: JSON.parse(result).user
            }
            setUserData({ ...userData, ...userDateFromBackend})
            console.log("userData ====> ", userData);
            if (userData) {
                navigate("/account");
            }
        })
        .catch(error => console.log('error', error))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                name="name"
                value={userFormData.name}
                required
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                value={userFormData.username}
                required
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">Email: </label>
            <input
                type="text"
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
            <button type="submit">Register</button>
        </form>
    )
}