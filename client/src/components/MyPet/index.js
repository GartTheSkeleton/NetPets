import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../../utils/queries';

const MyPet = () => {
  const {data: selfData} = useQuery(QUERY_ME)
  const username =  selfData?.me.username;
  const pet = selfData?.me.pet[0].nickname;
  
  
  return (
    <div>
      <div>
        <h1>Welcome {username}</h1>
          <div>
            <h1>Your pet's name is {pet}</h1>
            <div>Pet's Picture Here</div>
            <p>Pet's Stats Here</p>
          </div>
      </div>
    </div>
  )
}

export default MyPet