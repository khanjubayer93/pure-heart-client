import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { photoURL, title, message } = service;
    return (
        <div className=" bg-base-100 hover:shadow-xl">
            <figure><img src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {title}</h2>
                <p>
                    {message.length > 50 ?
                        <>
                            {message.slice(0, 50) + '...'}<Link to=''>Read More</Link>
                        </>
                        :
                        message
                    }
                </p>
                <button className='btn btn-info text-white'>Donate now</button>
            </div>
        </div>
    );
};

export default ServicesCard;