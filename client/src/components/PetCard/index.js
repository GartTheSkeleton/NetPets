import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_PET } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const PetCard = (props) => {
    const [callPet, {data}] = useMutation(CREATE_PET)
    const [species, setSpecies] = useState("")
    const {data: selfData} = useQuery(QUERY_ME)
    const userId = selfData?.me._id
    const [nickname, setNickname] = useState("")
    const [btnState, setBtnState] = useState(false);
    
    const handleSubmit = async event => {
        //event.preventDefault();
        console.log('pet selected');

        try {
            await callPet({
                variables:{
                    nickname, species, userId
                }
            });
            window.location.reload(false);
        } catch (e) {
            console.error(e);
        }
        
       
   }

    function handleClick(){
        setBtnState(btnState => !btnState)
    }
    let toggleTextArea = btnState ? <textarea className="form-control" id='nickname' value={nickname} onChange={e => setNickname(e.target.value)} ></textarea>: null;
    let toggleButtonText = btnState ? `Collapse` : `Name Your Pet`
    
    return (
        <div className="col-12 col-md-6 col-lg-4 container">
                        <div className="card">
                            <img className="card-img-top" src={props.img} alt="Card image cap"/>
                            <div className="card-body">
                                <div className="form-check">
                                    <input className="form-check-input" onChange={e => setSpecies(e.target.value)} value={props.value} type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                    <label className="form-check-label species-label" for="flexRadioDefault1">
                                        Choose This Species
                                    </label>
                                </div>
                                <h2 className="card-title species-name">{props.species}</h2>
                                <p className="card-text">{props.details}</p>
                                {toggleTextArea}
                                <button className="mt-2 btn btn-dark" onClick={handleClick}>{toggleButtonText}</button>
                                <button className="mt-2 ml-2 btn btn-dark" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
  )
}

export default PetCard;