import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json').then(res => res.json()).then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-2xl text-center text-primary font-bold'>Available Appointments on: {format(date, 'PP')}</h4>
            <duv className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    services.map(service => {
                        return (
                            <Service key={service._id} service={service}></Service>
                        )
                    })
                }
            </duv>
        </div>
    );
};

export default AvailableAppointments;