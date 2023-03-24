import { useState } from "react";

import { BASEAUTHURL, fetchData } from "../util/index";

const URL = BASEAUTHURL + "removeuser";

export const DeleteAccount = () => {
    const [userInfo, setUserInfo] = useState({
        email: ""
    })

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        fetchData(URL, "DELETE", userInfo);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Delete account</button>
        </form>
    )
}