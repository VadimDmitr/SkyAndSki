import { useState, useEffect } from "react";
import { getAllData } from "../util/index";

// const URL = 'https://some-random-api.ml/animal/bird';
const URL = 'http://localhost:8000/api/v1/';

export const Login = () => {
    const [message, setMessage ] = useState("");

    useEffect(() => {
        (async () => {
            const myData = await getAllData(URL);
            setMessage(myData.data);
        })();

        return () => {
            console.log("unmounting");
        }
    }, []);

    return (
        <form>
            <h1>{message}</h1>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email"/>
            <label htmlFor="password">Password: </label>
            <input type="text" id="password" name="password" />
            <button>Login</button>
        </form>
    )
}