import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Home/index.scss'

const Login = () => {
    return (
        <div className="form-container">
            <h1>Sign in</h1>
            <form className="form" action="/home">
                <div>
                    <label className='label-text'>Username</label><br/>
                    <input className='input' type="text" name="first_name" required />
                </div>
                <div>
                    <label className='label-text'>Password</label>
                    <br/>
                    <input className='input' type="password" name="password" required />
                </div>
                <div>
                    <button class="sub-btn" id="submit_btn" type="submit"><Link to="/profile" className="btnText">Login</Link></button>
                </div>
            </form>
            <footer>
                <a><Link to="/">Back to Homepage</Link></a>
            </footer>
        </div>
    )
}

export default Login