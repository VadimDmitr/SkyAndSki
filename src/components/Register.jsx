import { useState, useEffect } from 'react';
import { getAllData } from '../util/index';

const URL = 'http://localhost:8000/api/v1/';

export const Register = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        (async () => {
            const myData = await getAllData(URL)
            setMessage(myData.data);
        })();

        return () => {
            console.log("unmounting");
        }
    }, []);

    return (
        <form>
            <h1>{message}</h1>
            {/* <p>username</p>
            <input />
            <p>password</p>
            <input />
            <button>Register</button> */}
        </form>
    )
}