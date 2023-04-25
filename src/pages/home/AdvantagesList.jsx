import React from 'react';
import AdvertismentBanner from "../../components/adv-banner/AdvertismentBanner";


const AdvantagesList = ({advantages}) => {

    return (
        <div className='container mx-auto mt-32'>
            <h2 className='text-black font-bold text-xl max-w-md'>Наша цель - создать фантастический сервис для всех потребителей</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-4'>
                {advantages.map(item =>
                    <div key={item.id}>
                        <h3 className='text-[48px] text-main-red font-extrabold'>{item.num}</h3>
                        <p>{item.text}</p>
                    </div>
                )}
            </div>
            <AdvertismentBanner />
        </div>
    );
};

export default AdvantagesList;