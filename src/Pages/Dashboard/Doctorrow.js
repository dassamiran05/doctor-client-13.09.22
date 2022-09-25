import React from 'react';
import { toast } from 'react-toastify';

const Doctorrow = ({doctor, index, refetch, setDeletingDoctor}) => {
    const {name, speciality, image, email} = doctor;

    // const handleDelete = email =>{
    //     fetch(`http://localhost:5000/doctors/${email}`, {
    //         method:'DELETE',
    //         headers:{
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.deletedCount){
    //             toast.success(`Doctor: ${name} deleted successfully`)
    //             refetch();
    //         }
    //         else{
    //             toast.error(`Failed to delete ${name}`);
    //         }
    //     })
    // }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                </td>
                <td>{name}</td>
                <td>{speciality}</td>
                <td>
                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                    {/* <button className='btn btn-xs btn-error' onClick={() => handleDelete(email)}>Delete</button> */}
                </td>
            </tr>
        </>
    );
};

export default Doctorrow;