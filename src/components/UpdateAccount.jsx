import { useState, useContext } from "react";
import { userTokenContext } from "../contexts/userContext";
import { BASEAUTHURL } from "../util/index";

const URL = BASEAUTHURL + "removeuser";

export const UpdateAccount = () => {
    const {userToken, setUserToken} = useContext(userTokenContext);
    const [userFormData, setUserFormData] = useState({
        email: "test@test.com",
        emailToEdit: "test@test.com"
    });

    const handleChange = (event) => {
        setUserFormData({ ...userFormData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // fetchData(URL, "DELETE", userInfo);
        fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userFormData),
        })
        .then(response => response.text())
        .then(result => {
            console.log(result)
            console.log("type of result ====> ", typeof result);
            // console.log(JSON.stringify(result))
            setUserToken({ ...userToken, token: null})
            console.log("userToken ====> ", userToken);
        })
        .catch(error => console.log('error', error))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                required
                value="tests@test.com"
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">Email To Edit: </label>
            <input
                type="text"
                id="email-to-edit"
                name="email-to-edit"
                required
                value="test@test.com"
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Update account</button>
        </form>
    )
}