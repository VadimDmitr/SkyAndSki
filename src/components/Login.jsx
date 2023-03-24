import { useState } from "react";
import { BASEAUTHURL, fetchData } from "../util/index";

const URL = BASEAUTHURL + "login";

export const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetchData(URL, "POST", userInfo);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
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
            <button type="submit">Login</button>
        </form>
    )
}