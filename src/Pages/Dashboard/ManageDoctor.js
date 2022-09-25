import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingButton from '../Shared/LoadingButton';
import DeleteConfirmModal from './DeleteConfirmModal';
import Doctorrow from './Doctorrow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);


    const {data:doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        method:'GET',
        headers:{
            'content-type':'application/json',
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <LoadingButton></LoadingButton>;
    }
    return (
        <div>
            <h2>Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <Doctorrow key={doctor._id} doctor={doctor} index={index}refetch={refetch} setDeletingDoctor={setDeletingDoctor}></Doctorrow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal deletingDoctor={deletingDoctor} setDeletingDoctor={setDeletingDoctor} refetch={refetch}></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctor;