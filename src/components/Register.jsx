import { useState } from "react";
import { BASEAUTHURL, fetchData } from "../util/index";

const URL = BASEAUTHURL + "register";

export const Register = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        fetchData(URL, "POST", userInfo);
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