import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="form-container">
            <h1>Sign up by creating your account</h1>
            <form className="form" action="/home">
                <p>
                    <label className='label-text'>Username</label><br/>
                    <input className='input' type="text" name="first_name" required />
                </p>
                <p>
                    <label className='label-text'>Email address</label><br/>
                    <input className='input' type="email" name="email" required />
                </p>
                <p>
                    <label className='label-text'>Password</label><br/>
                    <input className='input' type="password" name="password" required />
                </p>
                <p>
                    <button class="sub-btn" id="submit_btn" type="submit"><Link to="/login" className="btnText">Register</Link></button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    )
}

export default Signup