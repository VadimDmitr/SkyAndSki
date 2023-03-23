import { useState } from 'react';
import { register } from '../util/index';

const URL = 'http://localhost:8000/api/v1/auth/register';

export const Register = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const myData = register(URL, userInfo);
    }

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                name="name"
                value={userInfo.name}
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                value={userInfo.username}
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                id="password"
                name="password"
                value={userInfo.password}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Register</button>
        </form>
    )
}