import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import DonateDetailsCard from './DonateDetailsCard';

const DonateDetails = () => {
    const { user } = useContext(AuthContext);
    const [donate, setDonate] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/donate?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDonate(data)
            })
    }, [user?.email]);

    const handleDelete = id => {
        const procced = window.confirm('Do you want to delete this item?')
        if (procced) {

            fetch(`http://localhost:5000/donate/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = donate.filter(dont => dont._id !== id)
                        setDonate(remaining)
                    }
                })
                .catch(error => console.error(error))
        }

    }

    return (
        <div>
            <h2 className="text-3xl font-bold">your donate collection is {donate.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donate.map(dont =>
                                <DonateDetailsCard
                                    key={dont._id}
                                    dont={dont}
                                    handleDelete={handleDelete}
                                ></DonateDetailsCard>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default DonateDetails;