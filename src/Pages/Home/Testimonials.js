import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Wilson Henry',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:people1,
            location:'California'
        },
        {
            _id:2,
            name:'Mark Zuberger',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:people2,
            location:'Georjia'
        },
        {
            _id:3,
            name:'Holdson adsd',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:people3,
            location:'Kolkata'
        }
    ]
    return (
        <section className='py-28'>
            <div className='mb-12'>
               <h3 className='text-xl text-primary'>Testimonials</h3>
               <h2 className='text-3xl'>What our patient says</h2>    
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                   reviews.map(review =>{
                    return(
                        <Testimonial key={review._id} review={review}></Testimonial>
                    )
                   }) 
                }
            </div>
        </section>
    );
};

export default Testimonials;