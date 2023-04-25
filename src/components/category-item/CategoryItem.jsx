import React from 'react';

const CategoryItem = ({image, text}) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='p-5 w-[102px] h-[102px] rounded-lg bg-white sm:w-[164px] sm:h-[164px]'>
                <img className='mb-4' src={image} alt=""/>
            </div>
            <p className='font-medium text-center'>{text}</p>
        </div>

);
};

export default CategoryItem;