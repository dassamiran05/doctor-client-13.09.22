import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import Makeappoinment from './Makeappoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info></Info>
            <Services />
            <Exceptional />
            <Makeappoinment />
            <Testimonials />
            
        </div>
    );
};

export default Home;