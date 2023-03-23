import { useState, useEffect } from 'react';
import { register } from '../util/index';

// const URL = 'https://some-random-api.ml/animal/bird';
const URL = 'http://localhost:8000/api/v1/auth/register';

export const Register = () => {
    // const [message, setMessage] = useState("");
    // const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     (async () => {
    //         const myData = await getAllData(URL);
    //         setMessage(myData.data);
    //     })();

    //     return () => {
    //         console.log("unmounting");
    //     }
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         const data = {
    //             "name": name,
    //             "username": username,
    //             "email": email,
    //             "password": password
    //         }
    //         const myData = await register(URL, data);
    //         // setMessage(myData.data);
    //     })();

    //     return () => {
    //         console.log("unmounting");
    //     }
    // }, []);

    // useEffect(() => {
    //     // setData({
    //     //     "name": name,
    //     //     "username": username,
    //     //     "email": email,
    //     //     "password": password
    //     // })
    // }, [data])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // await setData({
        //     "name": name,
        //     "username": username,
        //     "email": email,
        //     "password": password
        // })
        // await console.log("data ===> ", data);
        const myData = register(URL, {
            "name": name,
            "username": username,
            "email": email,
            "password": password
        });
    }

    const handleNameChange = (e) => {
        console.log("e.target.value ===> ", e.target.value);
        setName(e.target.value);
    }

    const handleUsernameChange = (e) => {
        console.log("e.target.value ===> ", e.target.value);
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        console.log("e.target.value ===> ", e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        console.log("e.target.value ===> ", e.target.value);
        setPassword(e.target.value);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {/* <h1>{message}</h1> */}
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => handleNameChange(e)}
            />
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => handleUsernameChange(e)}
            />
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={(e) => handlePasswordChange(e)}
            />
            <button>Register</button>
        </form>
    )
}