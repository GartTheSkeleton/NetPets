import React, { useState } from 'react'
import { CREATE_PET } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import PetCard from '../PetCard';

const CreatePetForm = () => {
    const [callPet, {data}] = useMutation(CREATE_PET)
    const [species, setSpecies] = useState("")
    const [nickname, setNickname] = useState("")
    const {data: selfData} = useQuery(QUERY_ME)
    const userId = selfData?.me._id
  
    return (
            <div>
                {/* <form className='form' onSubmit={e => {
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
                </form> */}
                <h1 className="text-center petform-h1">It looks like you don't have a pet yet</h1>
                <div className='container'>
                    <div className="box">
                        <div className="inner">
                            <span>Choose Your Species</span>
                        </div>
                        <div className="inner">
                            <span>Choose Your Species</span>
                        </div>
                    </div>
                </div>
                <div className="row g-5 justify-content-center">
                    <PetCard
                    img="https://res.cloudinary.com/roundglass/image/upload/ar_4:3,c_fill,f_auto,g_face,q_auto/c_limit,w_auto:breakpoints_767_2560_30_5:840/v1574433524/roundglass/sustain/Scorpio2_pzasch.jpg"
                    species="Scorpion"
                    details="This creature makes a cuddly friend. Watch out for their stinger!"
                    value="Scorpion" />
                    <PetCard
                    img="https://images.freeimages.com/images/large-previews/25c/abstract-flowers-2-1199959.jpg"
                    species="Poofer"
                    details="Don't take their soft looks as a sign of weakness. Poofers are aggressive"
                    value="Poofer" />
                    <PetCard
                    img="https://thumbs.dreamstime.com/z/corn-snake-29435399.jpg"
                    species="Snake"
                    details="Everyone knows what happened in the garden of Eden. Snakes are sneaky"
                    value= "Snake" />
                </div>
            </div>

  )
}

export default CreatePetForm;