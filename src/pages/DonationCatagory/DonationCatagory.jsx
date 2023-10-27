import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationCard from '../../components/DonationCards/DonationCard';
import DonationCatagoryCard from './DonationCatagoryCard';

const DonationCatagory = () => {

    const [donation, setDonation] = useState([])

    const {id} = useParams()

    const donations = useLoaderData()
    console.log(donations);


    useEffect(() => {

        const findDonations = donations?.find(donation => donation.id == id)
    setDonation(findDonations);

    }, [id, donations])

console.log(donation);
    return (
        <div>
        <DonationCatagoryCard donation={donation}></DonationCatagoryCard>
        </div>
    );
};

export default DonationCatagory;