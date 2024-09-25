import React from 'react';
import Card from './Card';

const Featured = () => {
    return (
        <div className='mt-10 '>
            <div className='flex justify-center items-center h-full flex-col w-full text-center '>
                <h1 className='text-xl md:text-2xl lg:text-5xl leading-10 font-railway font-bold mb-5'>Featured Yachts for Char</h1>
                <p className='mb-5'>Best Collection of Yachts with Complimentary Luxury Pick-up</p>
                <img src="https://i.ibb.co.com/VtPpKrn/7-yacht-marine.jpg" alt="" />
            </div>
            <div className='p-2 mt-16'>
                <Card></Card>
            </div>
        </div>
    );
};

export default Featured;