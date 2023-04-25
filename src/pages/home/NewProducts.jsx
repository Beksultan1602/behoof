import React from 'react';
import BestSellers from "../../components/layouts/BestSellers";
import Phone from '../../assets/png/smartphones.png'
import ProductCard from "../../components/product-card/ProductCard";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

const NewProducts = ({allNewDevices}) => {
    const isMobile = window.innerWidth <= 640;
    return (
        <BestSellers title='Новинки' next='К новинкам'>
            <Swiper
                slidesPerView={1.5}
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
                        slidesPerView: 3,
                        spaceBetween: 20,

                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,

                    },
                    1440: {
                        slidesPerView: 5,

                    },
                }}
            >
                {allNewDevices.map(device =>
                    <SwiperSlide>
                        <ProductCard
                            title={device.title}
                            price={device.price}
                            category={device.category}
                            discount={device.discount}
                            image={device.image}
                            key={device.id}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </BestSellers>
    );
};

export default NewProducts;