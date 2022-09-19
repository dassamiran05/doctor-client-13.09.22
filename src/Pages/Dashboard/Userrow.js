import React from 'react';
import { toast } from 'react-toastify';

const Userrow = ({user, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make an admin');
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                console.log(data);
                toast.success('Successfully made an admin');
                refetch();
            }
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button className="btn btn-xs" onClick={makeAdmin}>Make admin</button> : <p className='text-xl text-primary'>Already an admin</p>}</td>
            <td><button className="btn btn-xs btn-error">Remove user</button></td>
        </tr>
    );
};

export default Userrow;