import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="form-container">
            <h2>Sign in</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="submit_btn" type="submit"><Link to="/profile">Login</Link></button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}

export default Login