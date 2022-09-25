import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;

    const handleDelete = () =>{
        fetch(`http://localhost:5000/doctors/${email}`, {
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success(`Doctor: ${name} deleted successfully`)
                setDeletingDoctor(null);
                refetch();
            }
            else{
                toast.error(`Failed to delete ${name}`);
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-red-500">Are you sure to delete doctor: {name}</h3>
                        {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                        <div className="modal-action">
                            <button className='btn btn-error' onClick={() => handleDelete()}>Delete</button>
                            <label htmlFor="delete-confirm-modal" className="btn">Cancel</label>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DeleteConfirmModal;