import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';
import { CREATE_PET } from '../utils/mutations';
import MyPet from '../components/MyPet';
import CreatePetForm from '../components/CreatePetForm';



const Profile = () => {
     const {data: selfData} = useQuery(QUERY_ME)
    // //console.log(selfData?.me)
    // const activePet = selfData?.me.pet
    // const user = selfData?.me
    

    // const [species, setSpecies] = useState("")
    // const [nickname, setNickname] = useState("")
    // const userId = selfData?.me._id
    // const username = selfData?.me.username
    
    // //console.log(species)
    // console.log(user)
    // //console.log(userId)
    // //console.log(activePet[0].nickname)

    // const [callPet, {data}] = useMutation(CREATE_PET)
        


    
    if (selfData?.me.pet.length === 0)
        {
            return(
                <CreatePetForm />
                // <div>
                //     <form className='form' onSubmit={e => {
                //         // e.preventDefault();

                //         callPet({
                //             variables:{
                //                 nickname, species, userId
                //             }
                //         })
                //     }}>
                //         <h2>Looks' like you dont have a pet yet.</h2>
                //         <p>Select Your Species</p>
                //         <select id="speciesSelect" onChange={e => setSpecies(e.target.value)}>
                //             <option value=""></option>
                //             <option value="species 1">Species 1</option>
                //             <option value="species 2">Species 2</option>
                //             <option value="species 3">Species 3</option>
                //         </select>
                //         <p>Name Your Pet</p>
                //         <textarea id='nickname' value={nickname} onChange={e => setNickname(e.target.value)} ></textarea>
                //         <button type="submit">Submit</button>
                //     </form>
                //     {data && <div>{JSON.stringify(data)}</div>}
                // </div>
                
            )
        }
    else
        {
            return (
                <MyPet />
            )
        }
    
}

export default Profile