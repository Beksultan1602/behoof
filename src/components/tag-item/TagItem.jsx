import React from 'react';
import HeartIcon from '../../assets/icons/Vector.png'
import ChartIcon from '../../assets/icons/chart.png'
import Iphone from '../../assets/png/smartphones.png'
import DefaultShape from '../../assets/icons/grey-shape.png'
const TagItem = () => {
    return (
        <div className='p-3 sm:p-5 bg-white rounded-lg'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-categories-text text-[14px] sm:text-sm'>Портативные колонки</p>
                    <h3 className='font-medium text-[12px] sm:text-md'>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                </div>
                <div className='flex gap-3'>
                    <div className='p-3 rounded-full border-gray'>
                        <img className='max-w-screen-sm' src={HeartIcon} alt=""/>
                    </div>
                    <div className='p-3 rounded-full border-gray'>
                        <img className='max-w-screen-sm' src={ChartIcon} alt=""/>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center mt-5'>
                <img className='w-1/4 sm:w-auto' src={Iphone} alt=""/>
                <div>
                    <div className='mb-2'>
                        <p className='text-categories-text text-[14px] sm:text-sm mb-0.5'>Дизайн</p>
                        <div className='flex items-center gap-0.5'>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className='text-categories-text text-[14px] sm:text-sm mb-0.5'>Дизайн</p>
                        <div className='flex items-center gap-0.5'>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className='text-categories-text text-[14px] sm:text-sm mb-0.5'>Дизайн</p>
                        <div className='flex items-center gap-0.5'>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className='text-categories-text text-[14px] sm:text-sm mb-0.5'>Дизайн</p>
                        <div className='flex items-center gap-0.5'>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                            <img className='w-1/6' src={DefaultShape} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagItem;