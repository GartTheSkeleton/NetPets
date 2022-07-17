import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Home/index.scss'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
        const { data } = await login({
            variables: { ...formState },
        });

            Auth.login(data.login.token);
        } catch (e) {
        console.error(e);
        }

        // clear form values
        //setFormState({
        //username: '',
        //password: '',
        //});
    };
    
    return (
        <div className="form-container">
            <h1>Sign in</h1>
            <form className="form" onSubmit={handleFormSubmit} action="/home">
                <div>
                    <label className='label-text'>Your Email</label><br/>
                    <input
                        className="form-input"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='label-text'>Password</label>
                    <br/>
                    <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="sub-btn" id="submit_btn" type="submit">Login</button>
                </div>
            </form>
            {error && <div>Login failed</div>}
            <footer>
                <Link to="/">Back to Homepage</Link>
            </footer>
        </div>
    )
}

export default Login