"use client";
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const slides = [
  { image: '/imgs/slides/s5.jpg', text: 'Tailoring machine' },
  { image: '/imgs/slides/s2.jpg', text: 'Musanze' },
  { image: '/imgs/slides/s6.jpg', text: 'A trending machine' },
  { image: '/imgs/slides/s3.jpg', text: 'A trending machine' },
];

const SlideShow: NextPage = () => {
  return (
    <div className="relative w-full h-max overflow-hidden">
      {/* Fixed content on top of the slideshow */}
      <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
        <div className="text-center px-4 max-w-4xl">
          <div className="inline-block p-2 bg-gradient-to-r from-yellow-100 to-orange-100 bg-opacity-20 rounded-full mb-6">
            <div className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
              <img src="/logo/favicon.ico" alt="Tailor's Dream College Logo" className='w-full h-full object-contain' />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
            Welcome To Tailor's Dream College
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Together We Can Prosper - Master the Art of Fashion and Design
          </p>
          <Link 
            href="/apply" 
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
          >
            <div className="flex items-center space-x-2">
              <i className="bi bi-play-circle text-sm"></i>
              <span>Start Application Now</span>
            </div>
          </Link>
        </div>
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

// About Component
const About = () => {
  return (
    <div className="w-full py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 lg:p-8 border border-gray-100">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <i className="bi bi-heart-fill text-white text-sm"></i>
                  </div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-gray-800 via-yellow-800 to-orange-800 bg-clip-text text-transparent">
                    Together We Can Prosper
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
                <p>
                  Welcome to Tailor's Dream College, where creativity meets craftsmanship! Founded in 2023 by BIA - The African Touch, our school is dedicated to empowering the Rwandan community by transforming the art of tailoring into a global skill.
                </p>
                <p>
                  Our mission is simple: to help every Rwandan discover their potential, enhance their career opportunities, and master the beautiful craft of clothing and design.
                </p>
                <p>
                  From clothes to shoes, baskets, and more, we're here to inspire a new wave of local production, proudly made in Rwanda. At Tailor's Dream College, we offer dynamic, hands-on learning that prepares our students to compete confidently on the world stage.
                </p>
                <p>
                  In just a few months, you'll be amazed by the skills you develop, and we guarantee you'll leave as a competent, globally-minded professional. Joining our college is the best decision you'll ever make!
                </p>
                <div className="pt-2">
                  <span className="text-orange-600 font-medium">- Gisele</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Profile */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 lg:p-8 text-center border border-gray-100 group">
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-200 to-orange-200 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/gisele_umutoni.jpg"
                    alt="Gisele Umutoni"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="bi bi-award-fill text-white text-lg"></i>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">Miss Gisele Umutoni</h3>
              <p className="text-xs text-orange-600 font-medium mb-4">CEO, CO-FOUNDER OF BIA</p>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">2023</div>
                    <div className="text-xs text-gray-600">Founded</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">150+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// WhyChooseUS Component
const WhyChooseUS = () => {
  const features = [
    {
      icon: "bi-globe",
      title: "Global Perspective",
      description: "We are a National School with more than 1 nationality represented."
    },
    {
      icon: "bi-clipboard-check",
      title: "Complete Training",
      description: "Our curriculum includes practical and theoretical training."
    },
    {
      icon: "bi-people-fill",
      title: "Expert Instructors",
      description: "We have experienced instructors from diverse backgrounds."
    },
    {
      icon: "bi-trophy-fill",
      title: "Proven Success",
      description: "Our alumni have succeeded in various industries globally."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Overlay Section */}
      <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-900/80 via-indigo-800/80 to-purple-900/80 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="inline-block p-2 bg-white bg-opacity-20 rounded-full mb-4">
              <div className="p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                <i className="bi bi-star-fill text-2xl text-white"></i>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent mb-4">
              Why Choose Us?
            </h2>
            <p className="text-sm text-gray-200 max-w-2xl mx-auto">
              Discover what makes Tailor's Dream College the perfect choice for your fashion journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="w-full h-[80vh] lg:h-[70vh]">
        <Image
          src="/imgs/slides/s4.jpg"
          alt="Tailors"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// Gallery Component
const Gallery = () => {
  const images = [
    "/imgs/slides/s1.jpg",
    "/imgs/slides/s2.jpg",
    "/imgs/slides/s3.jpg",
    "/imgs/slides/s4.jpg",
    "/imgs/slides/s5.jpg",
    "/imgs/slides/s6.jpg",
    "/imgs/slides/s7.jpg",
    "/imgs/slides/s8.jpg",
  ];

  return (
    <div className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <i className="bi bi-images text-2xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"></i>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-yellow-800 to-orange-800 bg-clip-text text-transparent mb-4">
            What's Happening At College
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Explore our vibrant college life through these moments captured at our campus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-gray-100"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-medium">
                    Campus Life #{index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Updates Component
const Updates = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="group">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-20">
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-people-fill text-white text-2xl"></i>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
              <p className="text-sm text-white text-opacity-90">Students Enrolled</p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-20">
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-geo-alt-fill text-white text-2xl"></i>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">2+</div>
              <p className="text-sm text-white text-opacity-90">Operational Districts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonials Component
interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: '/imgs/testmonials/t2.jpg',
    name: 'John Doe',
    role: 'Graduated Student',
    text: "Tailor's Dream College gave me the confidence and skills to pursue my career. The hands-on experience was invaluable!",
  },
  {
    image: '/imgs/testmonials/t1.jpg',
    name: 'Jane Smith',
    role: 'Fashion Designer',
    text: "The learning environment here is unparalleled. I've been able to turn my passion into a successful business.",
  },
  {
    image: '/imgs/testmonials/t2.jpg',
    name: 'Sam Wilson',
    role: 'Creative Director',
    text: 'From day one, I knew I was in the right place. The instructors were mentors, helping me shape my future.',
  },
  {
    image: '/imgs/testmonials/t1.jpg',
    name: 'Joseph Reveur',
    role: 'Full-stack Developer',
    text: "Working with BIA - Tailor's dream college is the good choice ever. Helped me to shape my future.",
  },
];

const Testimonials: NextPage = () => {
  return (
    <div className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <i className="bi bi-chat-heart text-2xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"></i>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-yellow-800 to-orange-800 bg-clip-text text-transparent mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Hear from our successful graduates and their transformation stories
          </p>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
          speed={2000}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 h-full">
                {/* Header */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <i className="bi bi-check text-white text-xs"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-xs text-orange-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-xs"></i>
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Main Home Page Component
export default function College() {
  return (
    <div>
      <head>
        <title>Home - Tailors Dream College</title>
      </head>
      <div className="slideshow">
        <SlideShow />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="why-choose">
        <WhyChooseUS />
      </div>
      <div className="gallery">
        <Gallery />
      </div>
      <div className="updates">
        <Updates />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
    </div>
  );
}

export { SlideShow, About, WhyChooseUS, Gallery, Updates, Testimonials };