import React from 'react';
// import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import LoadingButton from '../Shared/LoadingButton';
// import { Link, useNavigate } from 'react-router-dom';
// import useToken from '../../hooks/useToken';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Adddoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {data: services, isLoading} = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));

    const imgStorageKey = '096ba047f90aca5c13c73eed880b97e0';


    if(isLoading){
        return <LoadingButton></LoadingButton>;
    }
    const onSubmit = async data => {
        const image = data.photo[0];
        const formData = new FormData();

        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(result => {
            console.log('imgbb', result);
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email:data.email,
                speciality:data.speciality,
                image:img        
            }
            // send to ypur database
            fetch('http://localhost:5000/doctors', {
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    console.log(result);
                    toast.success('Doctors added successfully to database');
                    reset();
                }
                else{
                    toast.error('Failed to add doctor');
                }
            })
        });
    };
    return (
        <div>
            <h2>Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Your name is required"
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialization</span>
                            </label>
                            <select {...register('speciality')} className="select select-bordered w-full max-w-xs">
                                {
                                    services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                                }
                            </select>
                            {/* <input
                                type="text"
                                placeholder="Specialization"
                                className="input input-bordered w-full max-w-xs"
                                {...register("speciality", {
                                    required: {
                                        value: true,
                                        message: "Specialization is required"
                                    }
                                })} />
                            <label className="label">
                                {errors.speciality?.type === 'required' && <span className="label-text-alt text-red-500">{errors.speciality.message}</span>}
                            </label> */}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Doctor phtot"
                                className="input input-bordered w-full max-w-xs"
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: "The image is required"
                                    }
                                })} />
                            <label className="label">
                                {errors.photo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photo.message}</span>}
                                {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white' value='Add Doctor' type="submit" />
                    </form>
        </div>
    );
};

export default Adddoctor;