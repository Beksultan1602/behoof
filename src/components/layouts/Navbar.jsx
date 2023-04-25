import React from 'react';
import heartIcon from '../../assets/icons/Vector.png'
import chartIcon from '../../assets/icons/chart.png'
import profileIcon from '../../assets/icons/frame.png'
import searchIcon from '../../assets/icons/search-normal.png'
import arrowIcon from '../../assets/icons/Arrow - Down 3.png'
import logo from '../../assets/behoof_logo.png'
import Home from '../../assets/icons/home.png'
import Profile from '../../assets/icons/profile-icon.png'
import GreySearch from '../../assets/icons/search-status.png'
import GreyHeart from '../../assets/icons/grey-heart.png'
import GreyChart from '../../assets/icons/grey-chart.png'
const Navbar = () => {
    return (
        <>
            <div className='bg-[#FDFDFD] border-b border-[#F2F5F9] py-3'>
                <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-start sm:justify-between gap-6 sm:gap-12">
                    <div className='flex items-center gap-3'>
                        <img src={logo} alt=""/>
                        <h1 className='text-3xl text-black font-bold'>Behoof</h1>
                        <p className='text-[14px] sm:text-sm max-w-[200px] min-w-[140px]'>Лучшие цены в интернет-магазинах</p>
                    </div>
                    <div className='flex justify-between relative w-full max-w-[750px]'>
                        <div className='hidden xl:flex pr-10 pl-5 py-4 gap-3 bg-[#FF4D4D] rounded-l-lg'>
                            <p className='text-white whitespace-nowrap'>Каталог товаров</p>
                            <img src={arrowIcon} alt=""/>
                        </div>
                        <div className='relative flex items-center w-full'>
                            <img className='absolute pl-5' src={searchIcon} alt=""/>
                            <input className="pr-5 pl-14 py-4 bg-[#F2F5F9] 2xl:rounded-r-lg 2xl:rounded-l-none rounded-lg w-full" type="text" placeholder='Поиск товаров' />
                        </div>
                    </div>
                    <div className='hidden sm:flex md:flex justify-between items-center gap-5'>
                        <div className='bg-[#F2F5F9] rounded-lg'>
                            <button className='p-4'>
                                <img className='max-w-screen-sm'  src={heartIcon} alt=""/>
                            </button>
                        </div>
                        <div className='bg-[#F2F5F9] rounded-lg'>
                            <button className='p-4'>
                                <img  className='max-w-screen-sm' src={chartIcon} alt=""/>
                            </button>
                        </div>
                        <div className='bg-[#F2F5F9] rounded-lg'>
                            <button className='p-4'>
                                <img  className='max-w-screen-sm' src={profileIcon} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden'>
                <div className='p-2 fixed bottom-0 bg-white z-50 w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col items-center'>
                            <img src={Home} alt=""/>
                            <p className='text-[14px]'>Главная</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={GreySearch} alt=""/>
                            <p className='text-[14px]'>Каталог</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='mt-1' src={GreyHeart} alt=""/>
                            <p className='text-[14px]'>Избранное</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={GreyChart} alt=""/>
                            <p className='text-[14px]'>Сравнения</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={Profile} alt=""/>
                            <p className='text-[14px]'>Профиль</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;