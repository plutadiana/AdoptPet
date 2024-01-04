import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    useState('');
    return (
        <div className="login-section">
            <div className="container-login">
                <h1>Log In</h1>
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <button>Log In</button>
                <p>Need an account? <Link to="/sign-up">Sign up</Link></p>
                
            </div>
        </div>
        
    )
}

export default Login;