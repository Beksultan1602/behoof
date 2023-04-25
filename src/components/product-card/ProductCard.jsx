import React from 'react';
import HeartIcon from '../../assets/icons/Vector.png'
import ChartIcon from '../../assets/icons/chart.png'
import DiscountIcon from '../../assets/icons/discount-up.png'
const ProductCard = ({image, category, title, price, discount}) => {
    return (
        <div className='bg-gray p-2 sm:p-5 rounded-lg'>
            <img className='mx-auto ' src={image} alt=""/>
            <p className='text-sm text-categories-text mt-5'>{category}</p>
            <h2 className='sm:text-xl text-[#263141] font-medium mb-3'>{title}</h2>
            <div className='flex justify-between items-center gap-4 sm:gap-2'>
                <div>
                    <div className='flex items-center gap-1'>
                        <p className='text-[12px] sm:text-sm text-categories-text'>Цена:<span className='text-[#30D170] ml-3'>{discount}</span></p>
                        <img src={DiscountIcon} alt=""/>
                    </div>
                    <h3 className='text-sm sm:text-lg font-bold'>{price}</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-3 rounded-full bg-white'>
                        <img className='' src={HeartIcon} alt=""/>
                    </div>
                    <div className='p-3 rounded-full bg-white'>
                        <img className='' src={ChartIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;