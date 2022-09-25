import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import LoadingButton from '../Shared/LoadingButton';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(guser || user);

    const navigate = useNavigate();


    const onSubmit = async data => {
        const { name, email, password } = data;
        // signInWithEmailAndPassword(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name});
        console.log(name);
    };

    let signInError;

    if (gloading || loading || updating) {
        return <LoadingButton></LoadingButton>
    }


    if (gerror || error || updateError) {
        signInError = <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }

    // if (user || guser) {
    //     console.log(user);
    // }
    if (token) {
        navigate('/appointment');
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Sign up</h2>
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be six character or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white' value='Sign up' type="submit" />
                        {signInError}
                    </form>
                    <p>Already have an account <Link to="/login" className='text-primary'> Login here</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;