import { useState, useContext } from "react";
import { userTokenContext } from "../contexts/userContext";
import { BASEAUTHURL } from "../util/index";

const URL = BASEAUTHURL + "register";

export const Register = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const {userToken, setUserToken} = useContext(userTokenContext);

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
          .then(response => response.text())
          .then(result => {
            console.log(result)
            console.log("type of result ====> ", typeof result);
            // console.log(JSON.stringify(result))
            setUserToken({ ...userToken, token: result})
            console.log("userToken ====> ", userToken);
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
                value={userInfo.name}
                required
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                value={userInfo.username}
                required
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                value={userInfo.email}
                required
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                id="password"
                name="password"
                value={userInfo.password}
                required
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Register</button>
        </form>
    )
}