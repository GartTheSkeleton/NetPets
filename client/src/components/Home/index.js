import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
// import Signup from '../../pages/Signup';
// import Login from '../../pages/Login';

const Home = () => {
    return (
        <div className="container">
            <div className="btn-container">
                <Link to="/login">
                    <button className="btn">Login</button>
                </Link>
                <p>or</p>
                <Link to="/register">
                    <button className="btn">Signup</button>
                </Link>
            </div>
        </div>
    )
}

export default Home