import React from "react";
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";


const Login = () => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <form action="">
                    <div className="logo-title">
                        <img src="" alt="logo" />
                        <h1>Login</h1>
                        <p>Sign in to your account</p>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;