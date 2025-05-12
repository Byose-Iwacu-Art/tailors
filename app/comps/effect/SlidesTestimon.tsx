"use client";

import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const slides = [
  { image: '/imgs/slides/s5.jpg', text: 'Tailing machine' },
  { image: '/imgs/slides/s2.jpg', text: 'Musanze' },
  { image: '/imgs/slides/s6.jpg', text: 'A trending machine' },
];

const SlidesTestimon: NextPage = () => {
  return (
    <div className="relative w-full h-max overflow-hidden">
      {/* Fixed content on top of the slideshow */}
      <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center bg-opacity-30 bg-blue-800 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center px-4">
          Testimonials
        </h1>
        <p className="text-sm md:text-md lg:text-md transform-cpu text-center px-4">
          Together We Can Prosper
        </p>
        <Link href="#" className="mt-4 text-sm md:text-md lg:text-md rounded-lg bg-orange-500 p-2 md:p-3 lg:p-4 px-4 md:px-5 bg-opacity-40">
          Have Something To Say? 
        </Link>
      </div>

      {/* Background Slideshow */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh]"
        modules={[Autoplay]}
        speed={3000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidesTestimon;
