import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { photoURL, title, message, _id } = service;

    // const handleDonateBtn = id => {

    //     fetch(`http://localhost:5000/service/${_id}`,{
        
    //     })
    // }
    return (
        <div className=" bg-base-100 hover:shadow-xl">
            <figure><img src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {title}</h2>
                <p>
                    {message.length > 50 ?
                        <>
                            {message.slice(0, 50) + '...'}<Link to={`/serviceDetailsCard/${_id}`}>see more</Link>
                        </>
                        :
                        message
                    }
                </p>
                <Link to={`/donate/${_id}`}>
                    <button className='btn btn-info text-white'>Donate now</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesCard;