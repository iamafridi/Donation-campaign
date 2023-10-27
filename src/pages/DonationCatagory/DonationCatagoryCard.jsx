import React from 'react';
import swal from 'sweetalert';

const DonationCatagoryCard = ({ donation }) => {

    const { id, title, category, color, amount, description, image_url } = donation || {}

    const handleDonate = () => {
        console.log(donation);

        const addDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('Donations'))

        if (!donationItems) {
            addDonationArray.push(donation)
            localStorage.setItem('Donations', JSON.stringify(addDonationArray))
            swal("Thank You For Your Donation!", "D O N A T E D", "success");
        }
        else {

            const isExists = donationItems.find(donation => donation.id == id)
            if (!isExists) {

                addDonationArray.push(...donationItems, donation)
                localStorage.setItem('Donations', JSON.stringify(addDonationArray))
                swal("Thank You For Your Donation!", "D O N A T E D", "success");
            }
            else {
                swal("Warning", "Already Donated", "info");
            }

        }
    }

    return (
        <div>
            <div className="relative mx-auto py-5 flex flex-col text-gray-700 bg-white shadow-md w-[1320px] rounded-xl bg-clip-border">
                <div className="relative h-[700px] mx-4 -mt-6 overflow-hidden text-white rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img className='w-full'
                        src={donation.image_url}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="relative w-[1200px] p-6 -mt-24 bg-[#0B0B0B80] rounded-xl">
                    <button
                        onClick={handleDonate}
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middletext-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Donate <span>$</span> {donation.amount}
                    </button>
                </div>
                <div className="p-6  rounded mt-4">
                    <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {donation.title}
                    </h5>
                    <p className="block  antialiased text-2xl leading-relaxed ">
                        {donation.description}
                    </p>
                </div>

            </div>
        </div >
    );
};

export default DonationCatagoryCard;