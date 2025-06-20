import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from "../assets/Header_img.jpg";
import header_img_nd from '../assets/Header_img_nd.jpg';
import header_img_rd from '../assets/Header_img_rd.jpg';

export default function MySwiper() {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img
          className="rounded-sm w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover"
          src={img}
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-sm w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover"
          src={header_img_nd}
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-sm w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover"
          src={header_img_rd}
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
}
