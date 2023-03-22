import { useState, useEffect } from 'react';
import { getAllData } from '../util/index';

// const URL = 'https://some-random-api.ml/animal/bird';
const URL = 'http://localhost:8000/api/v1/';

export const Register = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log("here");
        (async () => {
            const myData = await getAllData(URL)
            setMessage(myData);
        })();

        return () => {
            console.log("unmounting");
        }
    }, []);

    return (
        <form>
            {/* <h1>{message.fact}</h1> */}
            <label for="username">Username: </label>
            <input type="text" id="username" name="username"/>
            <label for="password">Password: </label>
            <input type="text" id="password" name="password" />
            <button>Register</button>
        </form>
    )
}