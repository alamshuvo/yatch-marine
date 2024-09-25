import React from 'react';
import Hero from '../components/Hero';
import BoatRental from '../components/BoatRental';
import Featured from '../components/Featured';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className='md:mt-36 mt-24 container mx-auto mb-10'>
                <BoatRental></BoatRental>
            </div>
           <div className='bg-transparent lg:p-5 p-3'>
           <div className='md:mt-36 mt-24 container mx-auto '>
                <Featured></Featured>
            </div>
           </div>

        </div>
    );
};

export default Home;