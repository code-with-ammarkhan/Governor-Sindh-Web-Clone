import React from 'react';
import dynamic from 'next/dynamic';
import { Settings } from 'react-slick';
import Image from 'next/image'; // Image ko import karein

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
              <Image 
                src={image} 
                alt={`Slide ${index + 1}`} 
                layout="responsive" // Aspect ratio maintain karne ke liye
                width={500} // Width set karein
                height={300} // Height set karein
                className="w-full h-auto" // Optional: Image ko styling dene ke liye
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Slickslider), { ssr: false });
