/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import UserSearchResult from '../components/UserSearchResult';
import { QUERY_ME, QUERY_USER } from '../utils/queries';


const Users = () => {
    const {data: selfData} = useQuery(QUERY_ME)
    const [searchTerm, setSearchTerm] = useState(selfData?.me.username);
    const [input, setInput] = useState('');
    return (
        <div className='container'>
            <h1 className='search-h1'>Search For A User</h1>
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                setSearchTerm(input);
            }}>
                <label className='form-label'>Search</label>
                <DebounceInput
                    debounceTimeout={300}
                    onChange={(e) => setInput(e.target.value)}
                    type='search'
                    value={input}
                />
                <button className="search-btn" type='submit'>
                    Submit!
                </button>
            </form>
            <br/>
            <br/>
                <UserSearchResult
                    searchTerm={searchTerm}
                />
        </div>
    )
}

export default Users