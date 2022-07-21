import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

const Store = () => {
    const {data} = useQuery(QUERY_ME)
    console.log(data?.me)
    return (
        <div>
            Store
        </div>
    )
}

export default Store