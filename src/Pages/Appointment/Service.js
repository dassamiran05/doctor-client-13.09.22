import React from 'react';

const Service = ({ service }) => {
    const {name, slots} =service;
    return (
        <>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slots available</span>}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Space available' : 'No space Available'}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;