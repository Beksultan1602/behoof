import React from 'react';
import GooglePlay from "../../assets/png/google-play.png";
import AppStore from "../../assets/png/appstore.png";
import IphoneBgSmall from "../../assets/png/small-mock-iphone.png";
import IphoneBg from "../../assets/png/iphone-mock.png";
import Pattern from "../../assets/third-patterns.png";

const AdvertismentBanner = () => {
    return (
        <div className='mt-20'>
            <div className='bg-[#F6F7FA] pb-60 sm:pb-24 pt-4 sm:pt-32 px-4 sm:px-20 rounded-lg relative flex flex-col justify-between items-start'>
                <h2 className='text-2xl sm:text-5xl font-extrabold mb-8 max-w-2xl z-20'>
                    <span className='text-main-red'>Экономьте</span> свое время
                    и получайте <span className='text-main-red'>максимум </span>
                    от ежедневных покупок
                </h2>
                <div className='flex gap-8 z-20'>
                    <img className='w-1/3 sm:w-full' src={GooglePlay} alt=""/>
                    <img className='w-1/3 sm:w-full' src={AppStore} alt=""/>
                </div>
                <img className='absolute bottom-0 right-6 sm:right-12 w-[176px] sm:w-auto z-10' src={IphoneBgSmall} alt=""/>
                <img className='absolute bottom-0 sm:right-60 w-[176px] sm:w-auto z-10' src={IphoneBg} alt=""/>
                <img className='absolute top-0 left-0' src={Pattern} alt=""/>
            </div>
        </div>
    );
};

export default AdvertismentBanner;