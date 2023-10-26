import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import DonationCards from '../../components/DonationCards/DonationCards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

const donations = useLoaderData()




    return (
        <div>
            <Banner></Banner>
            <DonationCards donations={donations} ></DonationCards>
        </div>
    );
};

export default Home;