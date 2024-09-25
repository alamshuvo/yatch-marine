import React from 'react';
import Hero from '../components/Hero';
import BoatRental from '../components/BoatRental';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className='mt-10 container mx-auto'>
                <BoatRental></BoatRental>
            </div>
        </div>
    );
};

export default Home;