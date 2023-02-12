import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, []);

    

    return (
        <div className='bg-slate-100'>
            <h1 className='text-center text-3xl font-bold my-10'>Our Initiatives</h1>
            <div className='grid grid-cols-3 gap-5 mx-20'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                        
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;