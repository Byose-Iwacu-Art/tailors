"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const SchoolsPage = () => {
  const schoolData = [
    {
      name: "Kigali Branch, Remera Market (Sar Motor)",
      mapUrl: "https://maps.google.com/maps?q=remera+giporoso+sar+market+place&t=&z=15&ie=UTF8&iwloc=&output=embed",
      address: "456 Kigali Ave, Kigali, Rwanda",
      principal: {
        name: "Gisele Umutoni",
        contact: "+250 788 282 252",
      },
      courses: [
        "Tailoring Startup Level 1-3",
        "Design Creation",
        "Product Finishing",
      ],
      images: [
        "/imgs/schools/kigali/s2.jpg",
        "/imgs/schools/kigali/s7.jpg",
        "/imgs/schools/kigali/s8.jpg",
      ],
    },
    {
      name: "Musanze Branch, near Youth Center",
      mapUrl: "https://maps.google.com/maps?q=musanze+muhoza+sector+youth+center&t=&z=15&ie=UTF8&iwloc=&output=embed",
      address: "123 Musanze St, Musanze District, Rwanda",
      principal: {
        name: "Umutoni Gisele",
        contact: "+250 788 282 252",
      },
      courses: [
        "Tailoring Startup Level 1-3",
        "Design Creation",
        "Product Finishing",
      ],
      images: [
        "/imgs/schools/musanze/s1.jpg",
        "/imgs/schools/musanze/s7.jpg",
        "/imgs/schools/musanze/s8.jpg",
      ],
    },
    
  ];

  return (
    <div className="w-full bg-gray-50 py-12">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-12">
        Our School Branches
      </h1>
      {schoolData.map((school, index) => (
        <div key={index} className="mb-20">
          <div className="flex flex-col md:flex-row md:justify-between md:px-20 px-5 mb-10">
            {/* School Information */}
            <div className="w-full md:w-1/2 md:pr-10 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{school.name}</h2>
              <p className="text-lg text-gray-600 mb-3">{school.address}</p>
              <iframe
                src={school.mapUrl}
                width="100%"
                height="300"
                className="rounded-lg shadow-md"
                allowFullScreen
              ></iframe>
              <div className="mt-5">
                <p className="text-lg font-bold text-gray-800">Principal:</p>
                <p className="text-lg text-gray-600">{school.principal.name}</p>
                <p className="text-lg text-gray-600">Contact: {school.principal.contact}</p>
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-gray-800">Courses Offered:</p>
                <ul className="list-disc list-inside text-gray-600">
                  {school.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* School Photos Slider */}
            <div className="w-full md:w-1/2">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full h-[400px] shadow-lg rounded-lg"
              >
                {school.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={image}
                      alt={`${school.name} Image ${i + 1}`}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="text-center mt-5">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View More Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolsPage;
