import React from 'react';
import Logo from '../../assets/behoof_logo.png'
import TikTok from '../../assets/icons/TT.png'
import Vk from '../../assets/icons/vk.png'
import Yt from '../../assets/icons/YT.png'
import Tg from '../../assets/icons/TG.png'
import Inst from '../../assets/icons/Inst.png'
const Footer = () => {
    return (
        <div className='bg-gray'>
            <div className="container mx-auto p-10">
                <div className='flex justify-start items-start flex-wrap gap-4 sm:gap-[168px]'>
                    <div className='mb-6'>
                        <div className='flex items-center gap-3'>
                            <img src={Logo} alt=""/>
                            <h1 className='text-3xl text-black font-bold'>Behoof</h1>
                        </div>
                        <p className='text-[#A1ABB9] mt-6 mb-5'>Мы в соц сетях</p>
                        <div className='flex items-center gap-6'>
                            <img className='cursor-pointer' src={Vk} alt=""/>
                            <img className='cursor-pointer' src={TikTok} alt=""/>
                            <img className='cursor-pointer' src={Inst} alt=""/>
                            <img className='cursor-pointer' src={Tg} alt=""/>
                            <img className='cursor-pointer' src={Yt} alt=""/>
                        </div>
                    </div>
                    <div className='flex sm:justify-between w-fit gap-4 sm:gap-[117px] flex-wrap'>
                        <ul>
                            <li className='text-[#A1ABB9] mb-5'>Пользователю</li>
                            <li className='cursor-pointer mb-4'>Связаться с нами</li>
                            <li className='cursor-pointer mb-4'>Поддерка пользователей</li>
                            <li className='cursor-pointer mb-4'>FAQ & Руководства</li>
                            <li className='cursor-pointer mb-4'>Политика конфиденциальности</li>
                            <li className='cursor-pointer mb-4'>Пользовательское соглашение</li>
                        </ul>
                        <ul>
                            <li className='text-[#A1ABB9] mb-5'>Популярные категории</li>
                            <li className='cursor-pointer mb-4'>Смартфоны</li>
                            <li className='cursor-pointer mb-4'>Teteras electricas</li>
                            <li className='cursor-pointer mb-4'>Стиральные машины</li>
                            <li className='cursor-pointer mb-4'>Телевизоры</li>
                            <li className='cursor-pointer mb-4'>Ноутбуки</li>
                        </ul>
                        <ul>
                            <li className='text-[#A1ABB9] mb-5'>Команда Behoof</li>
                            <li className='cursor-pointer mb-4'>О нас</li>
                            <li className='cursor-pointer mb-4'>Работа у нас</li>
                        </ul>
                    </div>
                </div>
                <hr className='text-[#ECEEEF] mt-4 mb-6' />
                <p className='text-categories-text pb-10 sm:pb-0'>Copyright © 2023 Behoof, Inc. Все права защищены</p>
            </div>
        </div>
    );
};

export default Footer;