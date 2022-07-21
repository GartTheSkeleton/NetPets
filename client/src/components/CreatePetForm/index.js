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
              
                <h1 className="text-center">It looks like you dont have a pet yet.</h1>
                    <p className="text-center">Select Your Species</p>
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