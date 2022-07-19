/* eslint-disable react-hooks/exhaustive-deps */
import { QUERY_USER} from '../../utils/queries';
import { useQuery } from '@apollo/client';


const UserSearchResult = ({searchTerm}) => {
    const {data, loading, error} = useQuery(QUERY_USER, {variables: {username: searchTerm}});
    if (loading) return <div>LOADING</div>;
    if (error) return <div>ERROR</div>;
    return (
        <div>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default UserSearchResult