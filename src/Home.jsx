import { useRef, useState, useEffect } from "react";
import axios from 'axios';
const Register = () => {
    const[apidata,setapidata]=useState([])
    const getallrecruiters=async()=>{
        const response=await fetch('https://job-engine-api.onrender.com/recruiter/all')
        const data=await response.json()
        setapidata(data)
        console.log(data)
    }
    useEffect(()=>{
        getallrecruiters()
    },[])
    let content
    if(apidata.length===0){
        content=<h1>Loading...</h1>
    }else{
    content=<div>{
        apidata.map((item)=><p>{item.company}</p>)
    }</div>
    }
    return (
        <>
       
            <h1>post page</h1>
            {content}
        </>
    )
}

export default Register