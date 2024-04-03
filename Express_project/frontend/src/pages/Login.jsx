import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const name = "abhisheknar421@mail.com";
    const password = 12345678999;
    const [isTrue,setIsTrue]=useState(false);
    
    const handleClick = () => {
        setIsTrue(true)
    }
    console.log('state=',isTrue);
    return (
        <div>
            <h1>Login form for Education Management</h1>
            <div>
                <label>Email</label>
                <input type="email" placeholder='enter email'></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder='enter password'></input>
            </div>
            <div>
                <span ><Link to="/forgot-password">forgot password</Link></span>
            </div>
            
            <button onClick={handleClick}>Login</button>
        </div>
    )
}