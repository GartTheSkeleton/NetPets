import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

const Users = () => {
    const {data} = useQuery(QUERY_ME)
    console.log(data?.me)
    return (
        <div className="container">
            <h1 className='name'>User's Pet</h1>

            <div className="pet-container">
                <div>
                    Filler
                </div>
            </div>

            <h2>Pet Name</h2>
        </div>
    )
}

export default Users