import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../../utils/queries';

const MyPet = (props) => {
  const {data: selfData} = useQuery(QUERY_ME)
  const username =  selfData?.me.username;
  const pet = selfData?.me.pet[0].nickname;
  const species = selfData?.me.pet[0].species;

  

  

  
  
  
  
  
  return (
    <div>
      <h1 className= 'text-center'>Welcome {username}</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-6">
          <div className="card">
              <img className="card-img-top" src='https://res.cloudinary.com/roundglass/image/upload/ar_4:3,c_fill,f_auto,g_face,q_auto/c_limit,w_auto:breakpoints_767_2560_30_5:840/v1574433524/roundglass/sustain/Scorpio2_pzasch.jpg'/>
              <div className="card-body">
                  <h1></h1>
                  <h2 className="card-title">Your pet's name is {pet}</h2>
                  <p className="card-text">Species: {species}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyPet