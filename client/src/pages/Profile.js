import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';


const Profile = () => {
    const {data} = useQuery(QUERY_ME)
    console.log(data?.me)
    const activePet = data?.me.pets
    if (activePet === null)
        {
            return(
                <div>
                    <div>What Pet Would You Like?</div>
                    <button>Pet 1</button>
                    <button>Pet 2</button>
                    <button>Pet 3</button>
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