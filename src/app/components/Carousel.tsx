"use client"; // Add this line at the top of your file

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/scss/navigation"
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules'; // Update this line
import './Carousel.css';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';



interface Props {
  images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      className="mySwiper rounded-lg overflow-hidden"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default Carousel;
