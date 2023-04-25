import React from 'react';
import BehoofButton from "../../components/btn/BehoofButton";
import Iphone from "../../assets/png/image_17__1_-removebg-preview.png"
import BestChoice from "./BestChoice";
import AdvantagesList from "./AdvantagesList";
import NewProducts from "./NewProducts";
import Reviews from "./Reviews";
import Patterns from '../../assets/Patterns.png'
import SecondPatterns from '../../assets/second-patterns.png'
import {advantages, blogs, categories, allNewDevices} from "../../server/constants";
const Home = () => {
    return (
        <>
            <div className='container mx-auto flex gap-4 sm:gap-8 mt-10 flex-wrap xl:flex-nowrap'>
                <div className='p-3 sm:p-10 rounded-lg relative bg-[#F2F5F9] w-full'>
                    <h2 className='text-[20px] md:text-[30px] 2xl:text-[44px] font-extrabold mb-4 sm:mb-8 sm:leading-[4rem]'><span className='text-main-red'>1.8 млн</span> товаров в <span className='text-main-red'>2272</span> магазинах найди, сравни, выберай!</h2>
                    <BehoofButton><p className='text-white'>Перейти к категориям</p></BehoofButton>
                    <img className='absolute top-0 left-0' src={Patterns} alt=""/>
                </div>
                <div className='p-3 sm:p-10 rounded-lg relative flex flex-col justify-between items-start bg-[#F2F5F9]'>
                    <h2 className='text-[20px] md:text-[30px] 2xl:text-[44px] font-extrabold mb-4 sm:mb-8 sm:leading-[4rem]'><span className='text-main-red'>Топ-10</span>смартфонов 2023 года</h2>
                    <BehoofButton><p className='text-white'>Смотреть</p></BehoofButton>
                    <img className='absolute bottom-0 right-2 sm:right-4 z-10' src={Iphone} alt=""/>
                    <img className='absolute top-0 left-0' src={SecondPatterns} alt=""/>
                </div>
            </div>
            <BestChoice categories={categories} />
            <AdvantagesList advantages={advantages} />
            <NewProducts allNewDevices={allNewDevices} />
            <Reviews blogs={blogs} />
        </>
    );
};

export default Home;