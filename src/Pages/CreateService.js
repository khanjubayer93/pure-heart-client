import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const CreateService = () => {
    const [service, setService] = useState({});

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(service)
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged){
                    toast.success('Service added successfully')
                    event.target.reset();
                }
            })

    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService)
    }
    
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-3'>Add A Service</h1>
            <form onSubmit={handleFormSubmit}>
                <input onBlur={handleInputBlur} name='title' type="text" placeholder="Title" className="input input-bordered input-info w-full max-w-xs mb-3" />
                <br />
                <input onBlur={handleInputBlur} name='photoURL' type="photoURL" placeholder="Photo URL" className="input input-bordered input-info w-full max-w-xs mb-3" />
                <br />
                <textarea onBlur={handleInputBlur} name='message' className="textarea textarea-info w-full max-w-xs mb-3" placeholder="Write text here"></textarea>
                <br />
                <button className='btn btn-info
                '>Submit</button>
            </form>
        </div>
    );
};

export default CreateService;