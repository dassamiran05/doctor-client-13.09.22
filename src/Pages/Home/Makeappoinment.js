import React from 'react';
import doctor from '../../assets/images/doctor.png'
import background from '../../assets/images/appointment.png'
import PrimaryButton from './PrimaryButton';

const Makeappoinment = () => {
    return (
        <>
            <section className='flex justify-center items-center bg-neutral' style={{background:`url(${background})`}}>
                <div className='flex-1 hidden lg:block'>
                    <img src={doctor} alt="" className='mt-[-100px]'/>
                </div>
                <div className='flex-1 pr-12 sm:p-12'>
                    <h3 className='text-xl text-primary'>Appointment</h3>
                    <h2 className='text-3xl text-white'>MAke appointment today</h2>
                    <p className='text-white mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                    {/* <button className="btn btn-primary text-white mt-8">Get Started</button> */}
                </div>
            </section>
        </>
    );
};

export default Makeappoinment;