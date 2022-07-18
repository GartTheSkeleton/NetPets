import React from 'react';
import { Link } from 'react-router-dom';

// import Signup from '../../pages/Signup';
// import Login from '../../pages/Login';

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
    const { data } = useQuery(QUERY_USERS);

    const users = data?.users
    console.log(users)

    return (
        <div>
            Home 
        </div>
    )
}

export default Home