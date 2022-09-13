import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride treatment',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo.',
            img:fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo.',
            img:cavity
        },
        {
            _id:3,
            name:'Whitetheing teeth',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo.',
            img:whitening
        }
    ];
    return (
        <div className='my-28'>
            <div className="text-center">
                <h3 className='text-xl text-primary font-bold uppercase'>Our Services</h3>
                <h1 className='text-3xl text-neutral'>Services we provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {/* <Service img={fluoride} title="Fluoride treatment" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo."/>
                <Service img={cavity} title="Cavity Filling" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo."/>
                <Service img={whitening} title="Whitetheing teeth" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo."/> */}
                {
                    services.map(service => {
                        return (
                            <Service key={service._id} img={service.img} title={service.name} desc={service.description}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;