import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';
import { CREATE_PET } from '../utils/mutations';
import MyPet from '../components/MyPet';
import CreatePetForm from '../components/CreatePetForm';



const Profile = () => {
     const {data: selfData} = useQuery(QUERY_ME)
    
        if (!selfData?.me.pet.length) {
            return (
                <CreatePetForm />
            )}
        else {
            return (
                <MyPet />
        )}
}

export default Profile