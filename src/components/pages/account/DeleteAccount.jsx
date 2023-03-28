import { useState, useContext } from "react";
import { userDataContext } from "../../../contexts/userContext";
import { BASEAUTHURL } from "../../../api/index";

const URL = BASEAUTHURL + "removeuser";

export const DeleteAccount = () => {
    const {userData, setUserData} = useContext(userDataContext);
    const [userFormData, setUserFormData] = useState({
        email: "test@test.com"
    })

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
            setUserData({ ...userData, token: null})
            console.log("userData ====> ", userData);
        })
        .catch(error => console.log('error', error))
    }

    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                required
                value="test@test.com"
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Delete account</button>
        </form>
        // <form onSubmit={(e) => handleSubmit(e)}>
        //     <label htmlFor="email">Email: </label>
        //     <input
        //         type="text"
        //         id="email"
        //         name="email"
        //         required
        //         value={userInfo.email}
        //         onChange={(e) => handleChange(e)}
        //     />
        //     <button type="submit">Delete account</button>
        // </form>
    )
}