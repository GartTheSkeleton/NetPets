import React from 'react';
import '../App.scss'
import { Link } from 'react-router-dom';
import iguana from '../assets/rose-thayer-akaD43iyM9Y-unsplash.jpg'

// import Signup from '../../pages/Signup';
// import Login from '../../pages/Login';

import Auth from '../utils/auth'

import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

const Home = () => {

    return (
        <>
        <div className='home-container'>
            <h1 className='home-h1'>Welcome to NetPets!</h1>
            <img src={iguana} className="img-fluid" alt="Responsive image"></img>
        </div>
        </>
    )
}

export default Home