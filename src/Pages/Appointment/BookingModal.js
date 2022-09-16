import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    // console.log(treatment);
    const { _id, name, slots } = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='my-5 grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Your phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default BookingModal;