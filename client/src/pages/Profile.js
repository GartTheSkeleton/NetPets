import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';



const Profile = () => {
    const {data} = useQuery(QUERY_ME)
    console.log(data?.me)
    const activePet = data?.me.pets

    const Func = async () =>{
        const speciesDropdown = document.getElementById("speciesSelect")
        console.log(speciesDropdown.value)
    }

    if (activePet === null)
        {
            return(
                <div>
                    <form className='form'>
                        <h2>Looks' like you dont have a pet yet.</h2>
                        <p>Select Your Species</p>
                        <select id="speciesSelect" onChange={(e) => Func()}>
                            <option value="species 1">species 1</option>
                            <option value="species 2">species 2</option>
                            <option value="species 3">species 3</option>
                        </select>
                        <p>Name Your Pet</p>
                        <textarea defaultValue={"Nickname"}></textarea>
                        <p></p>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                
            )
        }
    else
        {
            return (
                <div>
                    <h1>Pet's Name Here</h1>
                    <div>Pet's Picture Here</div>
                    <p>Pet's Stats Here</p>
                </div>
            )
        }
    
}

export default Profile