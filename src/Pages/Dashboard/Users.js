import React from 'react';
import { useQuery } from 'react-query';
import LoadingButton from '../Shared/LoadingButton';
import Userrow from './Userrow';

const Users = () => {

    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user', {
        method:'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <LoadingButton></LoadingButton>
    }


    return (
        <div>
            <h2 className='text-2xl text-primary'>All users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Serial no</th>
                        <th>Email</th>
                        <th>Make admin</th>
                        <th>Delete user</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user => <Userrow key={user._id} user={user}refetch={refetch}></Userrow>)
                    }
                    
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;