import React, { useState } from 'react';
import { FaWatchmanMonitoring } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { IoSpeedometer } from 'react-icons/io5';

const FilterData = ({filteredData,sortedYachtsData,sortOrder,isOneColumn}) => {
    
    console.log(filteredData,sortedYachtsData);
    
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center gap-5'>
                <p className='mt-5 text-2xl font-bold'>Number Of Data: {filteredData?.length}</p>
                <p className='mt-5 text-2xl font-bold'>Shorted Price :{sortOrder}</p>
            </div>
          <div className={isOneColumn ? 'grid grid-cols-1 gap-5 mt-5' : 'grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5'}>
          {
             filteredData && sortOrder && sortedYachtsData?.map(iteam=><div className={isOneColumn?'md:w-[50%] w-full mx-auto':''} key={iteam.id}>
                <div className=' border border-2-black flex flex-col md:flex-row w-full  p-5 justify-between gap-10 '>
                    <div className='w-full'><img src={iteam.image} alt="" /></div>
                    <div className='space-y-3'>
                        <h1 className='text-2xl font-bold'>Name:{iteam.name}</h1>
                        <p className='text-xl font-semibold'>Price:{iteam.price}</p>
                        <div className='flex flex-col justify-between items-start'>
                           <div className='flex justify-between gap-2 items-center'>
                           <FaWatchmanMonitoring />
                           <p>Max passenger: {iteam.maxPassenger}</p>
                           </div>
                           <div className='flex justify-between gap-2 items-center'>
                           <GiWeightLiftingUp />
                           <p>Gross Weight: {iteam.grossWeight}</p>
                           </div>
                           <div className='flex justify-between gap-2 items-center'>
                           <IoSpeedometer />
                           <p>Max Speed: {iteam.maxSpeed}</p>
                           </div>
                        </div>
                        <p>Description: {iteam.description}</p>
                        
                    </div>
                </div>
            </div>)
           }
          </div>
        </div>
    );
};

export default FilterData;