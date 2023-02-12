import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetailsCard = () => {
    const { title, _id, photoURL, message } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [_id])

    const handleReview = data => {
        console.log(data)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Thank you for giving review!', {
                        icon: '👏',
                    });

                }
            })
    }



    return (
        <div className="">
            <figure><img className='w-full' src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {title}</h2>
                <p>
                    {message}
                </p>
                <div className='flex'>
                    <Link to={`/donate/${_id}`}>
                        <button className='btn btn-info text-white mr-5'>Donate now</button>
                    </Link>
                    <Link to={`/updateService/${_id}`}>
                        <button className='btn btn-info btn-outline hover:text-white'>Update</button>
                    </Link>
                </div>
            </div>
            <div className='ml-8 mb-5'>
                <h3>Write a review</h3>
                <form onSubmit={handleSubmit(handleReview)}>
                    <textarea {...register("review")} className='focus:outline-none border-2 border-solid p-3' id="" cols="50" rows="10" placeholder='Type here'></textarea>
                    <br />
                    <button className='px-5 py-1 border-2 border-slate-500'>Submit</button>
                </form>
            </div>
            <div >
                {
                    reviews.map(review => <p className='mx-10 border-2 border-slate-700 p-10 mb-5'
                    key={review._id}
                    >
                        {review.review}
                    </p>)
                }
            </div>
        </div>
    );
};

export default ServiceDetailsCard;