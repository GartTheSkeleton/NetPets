import './index.scss';
import React, { useState } from 'react'
import { ADD_COINS } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import ActivityCard from '../ActivityCard';

const Activities = () => {
    const [payout] = useMutation(ADD_COINS)

    const {data: selfData} = useQuery(QUERY_ME)
    const userId = selfData?.me._id
    const petName = selfData?.me.pet[0].nickname

    const [act, setAct] = useState("")

    let amount = 1

    const actFunc = async event => {
        // event.preventDefault();
        console.log(petName)
        payout({
            variables:{
                userId, amount
            }
        })
        let choice = Math.floor(Math.random() * 2)
        if (choice === 0)
            {
            setAct("You and your pet went running, and found a Coin!")
            }
        else
            {
            setAct("You found a Coin while jogging with your pet!")
            }
        
        console.log(selfData)
    } 


    return (
        <div>
            <h2>Select the Activity you'd like to do.</h2>
            <button onClick={actFunc}>Running</button>
            <p>{act}</p>
        </div>
        )   
}

export default Activities