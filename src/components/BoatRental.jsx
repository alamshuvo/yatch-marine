import React from 'react';

const BoatRental = () => {
    return (
        <div className='flex flex-col gap-10 md:flex-row justify-between items-center'>
            {/* left side */}
           <div className='lg:w-[50%] w-full text-center md:text-start'>
            <div className=''>
            <h1 className='text-xl md:text-2xl lg:text-5xl leading-10 font-railway font-bold'>We’re Yachts Experts <br />
            & Boat Rentals</h1>
            <img className='mt-6 w-full md:w-[50%] ' src="https://i.ibb.co.com/YyjxRW1/5-yacht-marine.png" alt="" />
            <p className='mt-10 text-balance'>
            Are you looking for a luxurious way to explore the open waters? Look no further than our amazing yacht rental services! We provide the best yachts for rent, perfect for taking you and your loved ones on a memorable journey.
            </p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <img className='' src="https://i.ibb.co.com/r4bP7Ld/yacht-ico01-1.png" alt="" />
                    <p className='text-xl font-semibold text-center'>Sales Equipment</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <img className='' src="https://i.ibb.co.com/VL3ZdHY/yacht-ico02-1.png" alt="" />
                    <p className='text-xl font-semibold  text-center'>Sailing Fishing</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <img className='' src="https://i.ibb.co.com/xSWhJ9r/yacht-ico03-2.png" alt="" />
                    <p className='text-xl font-semibold text-center'>Sea Exploring</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <img className='' src="https://i.ibb.co.com/dt4yhNr/yacht-ico04-1.png" alt="" />
                    <p className='text-xl font-semibold text-center'>Five Star Services</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <img className='' src="https://i.ibb.co.com/7Qdzg0m/yacht-ico05-2.png" alt="" />
                    <p className='text-xl font-semibold text-center'>Licensed Crew</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <img className='' src="https://i.ibb.co.com/tHjdH3P/yacht-ico06-1.png" alt="" />
                    <p className='text-xl font-semibold text-center'>Cuisine & Catering</p>
                </div>
            </div>
            </div> 
           {/* right side */}
           <div className='lg:w-[50%] w-full'>
            <img className='w-full md:w-[70%]' src="https://i.ibb.co.com/LkhX84b/3-yacht-marine.png" alt="" />
            </div> 
        </div>
    );
};

export default BoatRental;