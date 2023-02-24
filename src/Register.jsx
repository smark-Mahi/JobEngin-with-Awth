import { useRef, useState, useEffect } from "react";
import axios from 'axios';
const Register = () => {
    
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [company, setcompany] = useState('');
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://job-engine-api.onrender.com/recruiter/create',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    company,email,password
                })
            })
            const res2=await response.json()
            console.log(res2)
            console.log(JSON.stringify(response?.data));
            setemail('');
            setpassword('');
            setcompany('');
        } catch (err) {
           console.log(err.message)
        }
    }

    return (
        <>
            <h1>Sign UP</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Company:</label>
                        <input
                            type="text"
                            id="company"
                            autoComplete="off"
                            onChange={(e) => setcompany(e.target.value)}
                            value={company}
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

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            required
                        />
                        <button>Sign UP</button>
                    </form>
        </>
    )
}

export default Register