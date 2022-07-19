import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';
import { CREATE_PET } from '../utils/mutations';



const Profile = () => {
    const {data} = useQuery(QUERY_ME)
    console.log(data?.me)
    const activePet = data?.me.pets
    let speciesDropdown = document.getElementById("speciesSelect") 
    let nameField = document.getElementById("nickname")

    const [callPet, {error}] = useMutation(CREATE_PET)

    const speciesFunc = async () =>{
        speciesDropdown = document.getElementById("speciesSelect") 
    }
    const nameFunc = async () => {
        nameField = document.getElementById("nickname")
    }
    const createPet = async (e) => {
     
        e.preventDefault();
        
        speciesDropdown = document.getElementById("speciesSelect")
        nameField = document.getElementById("nickname")

        const myNickname = nameField.value
        const mySpecies = speciesDropdown.value

        const petData = await callPet({
            variables: { nickname: myNickname, species: mySpecies }
        })

        console.log(petData)

    }

    if (activePet === null)
        {
            return(
                <div>
                    <form className='form'>
                        <h2>Looks' like you dont have a pet yet.</h2>
                        <p>Select Your Species</p>
                        <select id="speciesSelect" onChange={(e) => speciesFunc()}>
                            <option value="species 1">species 1</option>
                            <option value="species 2">species 2</option>
                            <option value="species 3">species 3</option>
                        </select>
                        <p>Name Your Pet</p>
                        <textarea id='nickname' defaultValue={"Nickname"} onChange={(e) => nameFunc()}></textarea>
                        <p></p>
                        <button onClick={(e) => createPet(e)}>Submit</button>
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