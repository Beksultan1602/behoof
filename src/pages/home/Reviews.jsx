import React from 'react';
import BestSellers from "../../components/layouts/BestSellers";
import BlogPhone from '../../assets/png/blog-phone.png'
import RedArrow from '../../assets/icons/red-arrow.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Reviews = ({ blogs }) => {
    return (
        <BestSellers title='Обзоры' next='К обзорам'>
            <div className='mb-24'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {blogs.map(blog =>
                        <SwiperSlide>
                            <div className='rounded-lg'>
                                <img className='rounded-t-lg w-full' src={blog.image} alt=""/>
                                <div className='bg-gray p-4 rounded-lg'>
                                    <h3 className='text-xl font-medium'>{blog.title}</h3>
                                    <p className='text-categories-text mt-3'>{blog.description}</p>
                                    <div className='flex gap-2.5 items-center mt-4'>
                                        <p className='text-main-red'>Смотреть</p>
                                        <img src={RedArrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </BestSellers>
    );
};

export default Reviews;