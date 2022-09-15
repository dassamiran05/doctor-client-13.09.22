import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='sm:w-full md:w-4/5 lg:w-1/2'>
                        <img src={treatment} className="sm:w-full md:w-auto lg:w-5/6 rounded-lg shadow-2xl" />
                    </div>

                    <div className='sm:w-full md:w-4/5 lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Exceptional;



