import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

const Users = () => {
    const {data} = useQuery(QUERY_ME)
    console.log(data?.me)
    return (
        <div>
            Users
        </div>
    )
}

export default Users