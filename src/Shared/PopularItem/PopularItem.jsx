// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import popularImageOne from "../../assets/PopularImages/image-5.webp"
import popularImageTwo from "../../assets/PopularImages/image-6.webp"
import popularImageThree from "../../assets/PopularImages/image-7.webp"
import popularImageFour from "../../assets/PopularImages/image-8.webp"
import popularImageFive from "../../assets/PopularImages/image-9.webp"
import popularImageSix from "../../assets/PopularImages/image-10.webp"
import popularImageSeven from "../../assets/PopularImages/image-11.webp"
import popularImageEight from "../../assets/PopularImages/image-13.webp"
import popularImageNine from "../../assets/PopularImages/image-14.webp"
import popularImageTen from "../../assets/PopularImages/image-15.webp"
import popularImageEleven from "../../assets/PopularImages/image-16.webp"

const PopularItem = () => {
    return (
        <div className='mt-2 mb-5'>

            <h1 className='text-center container mx-auto text-5xl text-gray-600 m-10'>Most Popular Jewellery </h1>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={popularImageOne} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageTwo} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageThree} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageFour} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageFive} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageSix} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageSeven} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageEight} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageNine} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageTen} alt="" /></SwiperSlide>
        <SwiperSlide><img src={popularImageEleven} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default PopularItem;