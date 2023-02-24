import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://job-engine-api.onrender.com/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                body:JSON.stringify({
                    username,password
                })
            })
            return response.json()
            
        } catch (err) {
            console.log(err)
        }
    }
useEffect(()=>{
    handleSubmit().then((data)=>{
        console.log(data)
    })
})
    return (
        <>
             <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                       
                            Sign Up
                           
                        </span>
                    </p>
        </>
    )
}

export default Login