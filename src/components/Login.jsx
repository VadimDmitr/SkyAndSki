import { useState, useEffect } from "react";
import { getAllData } from "../util/index";

// const URL = 'https://some-random-api.ml/animal/bird';
const URL = 'http://localhost:8000/api/v1/';

export const Login = () => {
    const [message, setMessage ] = useState("");

    useEffect(() => {
        (async () => {
            const myData = await getAllData(URL);
            setMessage(myData);
        })();

        return () => {
            console.log("unmounting");
        }
    }, []);

    return (
        <form>
            <h1>{message.fact}</h1>
            {/* <p>username</p>
            <input />
            <p>password</p>
            <input />
            <button>Sign in</button> */}
        </form>
    )
}