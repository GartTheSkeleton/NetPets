import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';
import { CREATE_PET } from '../utils/mutations';
import Activities from '../components/Activities';

const Activity = () => {
    const {data: selfData} = useQuery(QUERY_ME)
   
           return (
               <Activities/>
       )
}

export default Activity