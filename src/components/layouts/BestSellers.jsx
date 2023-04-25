import React from 'react';
import RedArrow from '../../assets/icons/red-arrow.png'
const BestSellers = ({children, title, next}) => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl text-black font-medium'>{title}</h2>
                <div className='flex items-center gap-4'>
                    <p className='text-main-red'>{next}</p>
                    <img src={RedArrow} alt=""/>
                </div>
            </div>
            {children}
        </div>
    );
};

export default BestSellers;