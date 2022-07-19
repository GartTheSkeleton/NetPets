import React, { useState } from 'react'
import { CREATE_PET } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const CreatePetForm = () => {
    const [callPet, {data}] = useMutation(CREATE_PET)
    const [species, setSpecies] = useState("")
    const [nickname, setNickname] = useState("")
    const {data: selfData} = useQuery(QUERY_ME)
    const userId = selfData?.me._id
  
    return (
            <div>
                <form className='form' onSubmit={e => {
                     //e.preventDefault();

                    callPet({
                        variables:{
                            nickname, species, userId
                        }
                    })
                }}>
                    <h2>It looks like you dont have a pet yet.</h2>
                    <p>Select Your Species</p>
                    <select id="speciesSelect" onChange={e => setSpecies(e.target.value)}>
                        <option value=""></option>
                        <option value="species 1">Species 1</option>
                        <option value="species 2">Species 2</option>
                        <option value="species 3">Species 3</option>
                    </select>
                    <p>Name Your Pet</p>
                    <textarea id='nickname' value={nickname} onChange={e => setNickname(e.target.value)} ></textarea>
                    <button type="submit">Submit</button>
                </form>
                {data && <div>{JSON.stringify(data)}</div>}
            </div>
  )
}

export default CreatePetForm;