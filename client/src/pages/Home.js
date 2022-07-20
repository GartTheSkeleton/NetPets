import React from 'react';
import '../App.scss'
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'

import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

const Home = () => {

    return (
        <>
        <div className='home-container'>
            <h1 className='home-h1'>Welcome to NetPets!</h1>
        </div>
        </>
    )
}

export default Home