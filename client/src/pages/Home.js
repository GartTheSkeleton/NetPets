import React from 'react';
import { Link } from 'react-router-dom';

// import Signup from '../../pages/Signup';
// import Login from '../../pages/Login';

import Auth from '../utils/auth'

import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

const Home = () => {

    return (
        <div>
            <h1>Welcome to NetPets!</h1>
        </div>
    )
}

export default Home