"use client"; // Add this line at the top of your file

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/scss/navigation";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Carousel.css';
import Image from 'next/image'; // Import Image from next/image

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
          {/* Use Image component instead of img */}
          <Image 
            src={image} 
            alt={`Slide ${index + 1}`} 
            layout="responsive" // Optional: maintain aspect ratio
            width={500} // Set appropriate width
            height={300} // Set appropriate height
            className="w-full h-auto" 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
