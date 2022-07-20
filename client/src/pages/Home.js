import React from 'react';
import { Link } from 'react-router-dom';
import iguana from '../assets/rose-thayer-akaD43iyM9Y-unsplash.jpg'

// import Signup from '../../pages/Signup';
// import Login from '../../pages/Login';

import Auth from '../utils/auth'

import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

const Home = () => {

    return (
        <div>
            <h1 className='text-center'>Welcome to Net Pets</h1>
            <img src={iguana} class="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

export default Home