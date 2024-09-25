import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='bg-hero-pattern bg-cover w-full h-[80vh] bg-no-repeat'>
               <div className='flex flex-col justify-center items-center h-full lg:space-y-10 md:space-y-6 space-y-4'>
                <img src="https://i.ibb.co.com/v3bjRsc/h3.png" alt="" />
                <h1 className='lg:text-4xl md:text-2xl text-xl text-white text-center font-bold'>We have exclusive yachts for exclusive <br />
                customers with Charter Offers</h1>
                <button className='btn lg:p-3 p-2 text-center text-white bg-current hover:bg-hover rounded-2xl'>Get More Offer</button>
               </div>
            </div>
        </div>
    );
};

export default Hero;