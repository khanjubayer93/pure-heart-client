import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Donate = () => {
    const { user } = useContext(AuthContext)
    const { title } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState([]);
    // console.log(data)

    const handleDonateForm = data => {
        console.log(data)
        fetch('http://localhost:5000/donate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // setData(data)
                if (data.acknowledged) {
                    toast.success('Donate successfully done')
                    reset();
                }
                console.log(data)
            })
    }



    return (
        <div className='bg-gray-200 pb-20'>
            <div className=''>
                <div className='text-center pt-5'>
                    <h1>{title}</h1>
                    <p className='text-3xl font-bold text-slate-700'>Donet Form</p>
                </div>
                <form onSubmit={handleSubmit(handleDonateForm)} className=' mt-20 mx-40 bg-white p-10'>
                    <input {...register("firstName")} className='border-b-2 border-slate-700 pb-2 focus:outline-none w-1/3' placeholder='Firs Name' />
                    <input {...register("lastName")} className='border-b-2 border-slate-700 pb-2 focus:outline-none ml-5 w-1/3' name='lastName' type="text" placeholder='Last Name' />
                    <br />
                    <input {...register("email")} className='border-b-2 border-slate-700 pb-2 mt-3 focus:outline-none w-1/3' placeholder='Email' defaultValue={user?.email} readOnly />
                    <input {...register("amount")} className='border-b-2 border-slate-700 pb-2 mt-3 focus:outline-none w-1/3 ml-5' placeholder='Amount' />
                    <br />
                    <textarea {...register("message")} className='border-b-2 border-slate-700 mt-3 focus:outline-none w-full' placeholder='Message' />
                    <br />
                    <button className='btn btn-info text-white rounded-none mt-3'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Donate;