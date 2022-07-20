/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { QUERY_USER} from '../../utils/queries';
import { useQuery } from '@apollo/client';


const UserSearchResult = ({searchTerm}) => {
    const {data, loading, error} = useQuery(QUERY_USER, {variables: {username: searchTerm}});
    const username =  data?.user.username;
    console.log(username);
    const pet = data?.user.pet[0].nickname;
    const species = data?.user.pet[0].species;

    const poofimg = "https://images.freeimages.com/images/large-previews/25c/abstract-flowers-2-1199959.jpg"
    const scorpimg = "https://res.cloudinary.com/roundglass/image/upload/ar_4:3,c_fill,f_auto,g_face,q_auto/c_limit,w_auto:breakpoints_767_2560_30_5:840/v1574433524/roundglass/sustain/Scorpio2_pzasch.jpg"
    const snakeimg = "https://thumbs.dreamstime.com/z/corn-snake-29435399.jpg"
    let imageurl = "https://archives.bulbagarden.net/media/upload/thumb/2/20/206Dunsparce.png/600px-206Dunsparce.png"

    if (species === "Poofer")  
    {
        imageurl = poofimg
    }
    else if (species === "Scorpion")
    {
        imageurl = scorpimg
    }
    else if (species === "Snake")
    {
        imageurl = snakeimg
    };

    if (loading) return <div>LOADING</div>;
    if (error) return <div>ERROR</div>;
    return (
        <div>
          <h1 className= 'text-center'>{username}'s Profile</h1>
            <div className="row justify-content-center">
              <div className="col-12 col-md-12 col-lg-6">
              <div className="card">
                  <img className="card-img-top" alt="pet" src={imageurl}/>
                  <div className="card-body">
                      <h2 className="card-title">{username}'s pet's name is {pet}</h2>
                      <p className="card-text">Species: {species}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
}

export default UserSearchResult