import React from 'react';

const Testimonial = ({ review }) => {
    const { _id, name, desc, img, location } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                {/* <h2 className="card-title">{name}</h2> */}
                <p>{desc}</p>
                <div className='flex items-center mt-5'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-8">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;