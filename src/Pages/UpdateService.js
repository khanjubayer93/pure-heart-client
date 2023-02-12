import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateService = () => {
    const existingService = useLoaderData()
    const [service, setService] = useState(existingService);

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(service)
        fetch(`http://localhost:5000/service/${existingService._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Successfully updated');
                }
            })
            .catch(error => console.log(error))

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
            <h1 className='text-3xl font-bold mb-3'>Update this Service: <span className='text-yellow-500'>{existingService.title}</span></h1>
            <form onSubmit={handleFormSubmit}>
                <input onBlur={handleInputBlur} name='title' type="text" placeholder="Title" className="input input-bordered input-info w-full max-w-xs mb-3" defaultValue={existingService.title} />
                <br />
                <input onBlur={handleInputBlur} name='photoURL' type="photoURL" placeholder="Photo URL" className="input input-bordered input-info w-full max-w-xs mb-3" defaultValue={existingService.photoURL} />
                <br />
                <textarea onBlur={handleInputBlur} name='message' className="textarea textarea-info w-full max-w-xs mb-3" placeholder="Write text here" defaultValue={existingService.message}></textarea>
                <br />
                <button className='btn btn-info
                '>Submit</button>
            </form>
        </div>
    );
};

export default UpdateService;