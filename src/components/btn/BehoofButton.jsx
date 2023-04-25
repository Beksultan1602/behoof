import React from 'react';
import ArrowToRight from '../../assets/icons/arrow-right.png'
const BehoofButton = ({children}) => {
    return (
        <button className='whitespace-nowrap flex items-center gap-4 px-5 py-4 bg-main-red rounded-lg z-20'>
            {children}
            <img className='gap-4' src={ArrowToRight} alt=""/>
        </button>
    );
};

export default BehoofButton;