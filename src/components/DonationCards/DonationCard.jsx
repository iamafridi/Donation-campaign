import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {


    const { id,title, category, color, amount, description, image_url } = donation || {}

    return (
        <div className='py-5'>
            <div className=" flex flex-col text-gray-700 bg-white shadow-md rounded-xl w-80 bg-clip-border">
                <div className=" mx-4 -mt-6 overflow-hidden text-white  rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={donation.image_url}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="p-6">
                   <Link to={`/donations/${id}`}>
                   <div className="badge badge-primary badge-outline justify-start">{donation.category}</div>
                   </Link>
                    
                   
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {donation.title}
                    </h5>

                </div>
            </div>
        </div>
    );
};

export default DonationCard;