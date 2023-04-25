import React, {useState} from 'react';
import Iphone from '../../assets/png/smartphones.png'
import ArrowLeft from '../../assets/icons/slider-ic.png'
import CategoryItem from "../../components/category-item/CategoryItem";
import TagItem from "../../components/tag-item/TagItem";
import ArrowRight from '../../assets/icons/gray-arrow-right.png'
import XMark from '../../assets/icons/xmark.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {Grid, Pagination} from "swiper";
const BestChoice = ({categories}) => {
    const [tags, setTags] = useState([
        {id: 1, tag: 'Дизайн', isTagActive: false},
        {id: 2, tag: 'Портативность', isTagActive: true},
        {id: 3, tag: 'Камера', isTagActive: true},
        {id: 4, tag: 'Ответ', isTagActive: true},
        {id: 5, tag: 'Дисплей', isTagActive: true},
        {id: 6, tag: 'Батарея', isTagActive: true},
    ])


    const handleTagClick = (id) => {
        const updatedTags = tags.map((tag) =>
            tag.id === id ? { ...tag, isTagActive: !tag.isTagActive } : tag
        );
        setTags(updatedTags);
    };
    const isMobile = window.innerWidth <= 640;

    return (
        <div className='relative mt-12 bg-gray pb-20'>
            <div className='triangle'></div>
            <div className='triangle-bottom'></div>
            <div className='pt-16 container mx-auto mb-12'>
                <h2 className='text-xl font-medium mb-4'>Лучший выбор</h2>
                <div className=''>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 8,
                                spaceBetween: 5,
                            },
                        }}
                    >
                        {categories.map(category =>
                            <SwiperSlide>
                                <CategoryItem
                                    image={category.image}
                                    text={category.category}
                                    key={category.id}
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className="container mx-auto">

                <div className='flex items-center justify-between'>

                    <div className='overflow-scroll'>
                        <ul className='flex gap-4 mb-4'>
                            {tags.map(tag =>
                                <div onClick={() => handleTagClick(tag.id)} className={tag.isTagActive ? 'cursor-pointer bg-white rounded-lg px-3 py-2 text-categories-text flex gap-2 items-center hover:text-main-red transition' : ' flex gap-2 items-center cursor-pointer bg-white rounded-lg pl-3 sm:px-3 pr-7 py-2 text-main-red'} key={tag.id}>
                                    <li>
                                        {tag.tag}
                                    </li>
                                    {tag.isTagActive ? '' : (
                                        <img src={XMark} alt=""/>
                                    )}
                                </div>
                            )}
                        </ul>

                    </div>


                </div>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    modules={[Grid, Pagination]}
                    grid={{
                        rows: isMobile ? 1 : 2
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,

                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,

                        },
                        1440: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide><TagItem /></SwiperSlide>
                    <SwiperSlide><TagItem /></SwiperSlide>
                    <SwiperSlide><TagItem /></SwiperSlide>
                    <SwiperSlide><TagItem /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BestChoice;