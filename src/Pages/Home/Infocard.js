import React from 'react';

const Infocard = ({img, title, subtitle, bg}) => {
    return (
        <>
           <div className={`card card-side bg-base-100 shadow-xl ${bg}`}>
                <figure className='pl-5'><img src={img} alt="Movie"/></figure>
                <div className="card-body" style={{color:'#fff'}}>
                    <h2 className="card-title">{title}</h2>
                    <p>{subtitle}</p>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div> */}
                </div>
            </div> 
        </>
    );
};

export default Infocard;