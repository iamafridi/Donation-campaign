import React, { useEffect, useState } from 'react';
import DonationCatagoryCard from '../DonationCatagory/DonationCatagoryCard';
import DonationCard from './DonationCard';

const Donation = () => {

    const [donations, setDonations] = useState([]);

    const [noFound, setNoFound] = useState(false);

    const [isShow, setIsShow] = useState(false)

    const [totalDonation,setTotlaDonation] = useState(0)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('Donations'));
        if (donationItems) {
            setDonations(donationItems)

            const total = donationItems.reduce((preValue,currentItem)=> preValue + currentItem.amount,0)

            console.log(total);
            setTotlaDonation(total)
        }
        else {
            setNoFound("NO DATA FOUND")
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setDonations([]);
        setNoFound(" NO DATA FOUND");
    }



    return (
        <div>
            {noFound ? <p className='h-[80vh] flex justify-center items-center'>{noFound}</p>
                :
                <div>
                    <div className='flex  items-center  gap-5 p-5'>
                        <h1 className='text-2xl font-bold'>Total Donation : {totalDonation}</h1>
                        {donations.length > 0 && <button onClick={handleRemove} className='btn btn-primary block mx-auto justify-end mr-10' >Delete All Donation</button>}
                    </div>

                    <div className='grid grid-cols-2 gap-5 items-center justify-center p-2'>
                        {
                            isShow ? donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>) :
                            donations.slice(0,4).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                        }
                    </div>
                   {donations.length >4 && <button onClick={()=>setIsShow(!isShow)} className='btn btn-primary block mx-auto' >{isShow ? "See Less" : "See More"}</button>}
                    
                </div>}
        </div>
    );
};

export default Donation;