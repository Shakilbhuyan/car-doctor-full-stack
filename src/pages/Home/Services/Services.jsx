import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center space-y-6'>
                <p className='text-3xl text-red-600'>Services</p>
                <h1 className='text-6xl font-bold'>Our Service Area</h1>
                <p>The majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
           {
                services.map(service=><ServiceCart
                 key={service._id}
                 service={service}
                ></ServiceCart>)
            }
           </div>
        </div>
    );
};

export default Services;