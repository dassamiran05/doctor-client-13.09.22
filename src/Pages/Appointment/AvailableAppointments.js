import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import {useQuery} from 'react-query';
import LoadingButton from '../Shared/LoadingButton';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { isLoading,  data:services, refetch } = useQuery(['available', formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )

   if(isLoading){
    return <LoadingButton></LoadingButton>;
   }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // }, [formattedDate])

    return (
        <div>
            <h4 className='text-2xl text-center text-primary font-bold'>Available Appointments on: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    services?.map(service => {
                        return (
                            <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
                        )
                    })
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;