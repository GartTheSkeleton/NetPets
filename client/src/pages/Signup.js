import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [createUser, { error }] = useMutation(CREATE_USER);
      
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleFormSubmit = async event => {
        event.preventDefault();
      
        // use try/catch instead of promises to handle errors
        try {
          // execute addUser mutation and pass in variable data from form
          const { data } = await createUser({
            variables: { ...formState }
          });
          Auth.login(data.createUser.token)
        } catch (e) {
          console.error(e);
        }
      };
    
    return (
        <div className="form-container">
            <h1>Sign up by creating your account</h1>
            <form className="form" onSubmit={handleFormSubmit} action="/home">
                <p>
                    <label className='label-text'>Username</label><br/>
                    <input
                        className="form-input"
                        placeholder="Your username"
                        name="username"
                        type="username"
                        id="username"
                        value={formState.username}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <label className='label-text'>Email address</label><br/>
                    <input
                        className="form-input"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <label className='label-text'>Password</label><br/>
                    <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </p>
                <p>
                <button className="sub-btn" id="submit_btn" type="submit">Register</button>
                </p>
            </form>
            {error && <div>Signup failed</div>}
            <footer>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    )
}

export default Signup