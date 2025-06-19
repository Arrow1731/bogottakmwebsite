import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // asosiy uslublar
import img from "../assets/Header_img.jpg"; // surat

export default function MySwiper() {
  return (
    <Swiper
      loop={true}        // cheksiz aylanish
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide><img className='rounded-sm' src={img} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img className='rounded-sm' src={img} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img className='rounded-sm' src={img} alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
}
