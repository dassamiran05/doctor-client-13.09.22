import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg' 
import marker from '../../assets/icons/marker.svg' 

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Infocard img={clock} title="Opening Hours" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit." bg="bg-gradient-to-r from-primary to-secondary"></Infocard>
            <Infocard img={marker} title="Visit our Location" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit." bg="bg-neutral"></Infocard>
            <Infocard img={phone} title="Contact us now" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit." bg="bg-gradient-to-r from-primary to-secondary"></Infocard>
        </div>
    );
};

export default Info;