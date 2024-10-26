import React from 'react';
import dynamic from 'next/dynamic';
import { Settings } from 'react-slick';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface CarouselProps {
  images: string[];
}

const Slickslider: React.FC<CarouselProps> = ({ images }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      {typeof window !== 'undefined' && (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Slickslider), { ssr: false });
