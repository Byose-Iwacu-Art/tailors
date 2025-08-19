"use client";

import { useState, useEffect } from "react";

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState(6);

  const testimonials = [
    {
      id: 1,
      name: "Uwimana Grace",
      role: "Fashion Design Graduate",
      image: "/testimonials/grace.jpg",
      content: "African Touch College gave me the skills to start my own boutique in Kigali. The practical training and mentorship were exceptional.",
      rating: 5,
      course: "Advanced Fashion Design",
      location: "Kigali"
    },
    {
      id: 2,
      name: "Mukamana Divine",
      role: "Textile Entrepreneur",
      image: "/testimonials/divine.jpg",
      content: "Learning traditional and modern techniques here helped me create unique designs that celebrate our Rwandan heritage.",
      rating: 5,
      course: "Traditional & Modern Tailoring",
      location: "Musanze"
    },
    {
      id: 3,
      name: "Nyirahabimana Solange",
      role: "Sustainable Fashion Designer",
      image: "/testimonials/solange.jpg",
      content: "The sustainable fashion program opened my eyes to eco-friendly practices. I now run a successful sustainable clothing line.",
      rating: 5,
      course: "Sustainable Fashion Design",
      location: "Kigali"
    },
    {
      id: 4,
      name: "Uwizeyimana Marie",
      role: "Pattern Making Specialist",
      image: "/testimonials/marie.jpg",
      content: "The precision I learned in pattern making has made me highly sought after. I work with top fashion houses in East Africa.",
      rating: 5,
      course: "Advanced Pattern Making",
      location: "Huye"
    },
    {
      id: 5,
      name: "Niyonsaba Claudette",
      role: "Fashion Business Owner",
      image: "/testimonials/claudette.jpg",
      content: "African Touch didn't just teach me to sew - they taught me how to build a business. My fashion house employs 15 people now.",
      rating: 5,
      course: "Fashion Business & Entrepreneurship",
      location: "Kigali"
    },
    {
      id: 6,
      name: "Mukashyaka Angeline",
      role: "Embroidery Specialist",
      image: "/testimonials/angeline.jpg",
      content: "The embroidery and decoration techniques I learned help me create stunning traditional and contemporary pieces.",
      rating: 5,
      course: "Embroidery & Garment Decoration",
      location: "Musanze"
    },
    {
      id: 7,
      name: "Nyiramugwera Vestine",
      role: "Costume Designer",
      image: "/testimonials/vestine.jpg",
      content: "My training in costume design has taken me to work on films and theater productions across Rwanda and beyond.",
      rating: 5,
      course: "Costume & Theater Design",
      location: "Kigali"
    },
    {
      id: 8,
      name: "Uwamahoro Esperance",
      role: "Fashion Merchandiser",
      image: "/testimonials/esperance.jpg",
      content: "The business skills and fashion knowledge I gained help me manage one of Kigali's most successful fashion retail stores.",
      rating: 5,
      course: "Fashion Merchandising",
      location: "Kigali"
    },
    {
      id: 9,
      name: "Nyiraneza Immaculee",
      role: "Wedding Dress Designer",
      image: "/testimonials/immaculee.jpg",
      content: "Specializing in bridal wear has been my dream. The college helped me master the intricate techniques needed for luxury gowns.",
      rating: 5,
      course: "Bridal & Formal Wear Design",
      location: "Musanze"
    }
  ];

  const loadMoreCards = () => {
    setVisibleCards(prev => Math.min(prev + 3, testimonials.length));
  };

  const showLessCards = () => {
    setVisibleCards(6);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Student Success Stories
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="h-0.5 w-4 sm:w-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            <p className="text-xs sm:text-sm text-gray-600 px-2">Transforming dreams into successful careers</p>
            <div className="h-0.5 w-4 sm:w-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {testimonials.slice(0, visibleCards).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Card Header */}
              <div className="relative p-4 sm:p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="absolute top-2 right-2 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-yellow-500 text-xs"></i>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full p-1">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                        <i className="bi bi-person text-gray-500 text-lg sm:text-xl"></i>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <i className="bi bi-check text-white text-xs"></i>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <i className="bi bi-geo-alt text-orange-500 text-xs"></i>
                      <span className="text-xs text-orange-600">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                    {testimonial.course}
                  </span>
                </div>
                
                <blockquote className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    <span className="text-xs text-gray-500">Graduate</span>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full flex items-center justify-center group-hover:from-yellow-500/20 group-hover:to-orange-500/20 transition-all duration-300">
                    <i className="bi bi-quote text-orange-500 text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More/Show Less Button */}
        <div className="text-center">
          {visibleCards < testimonials.length ? (
            <button
              onClick={loadMoreCards}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
            >
              <span>Load More Stories</span>
              <i className="bi bi-chevron-down group-hover:translate-y-0.5 transition-transform duration-300 text-xs"></i>
            </button>
          ) : (
            <button
              onClick={showLessCards}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
            >
              <span>Show Less</span>
              <i className="bi bi-chevron-up group-hover:-translate-y-0.5 transition-transform duration-300 text-xs"></i>
            </button>
          )}
        </div>

        {/* Statistics Section */}
        <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300">
                <i className="bi bi-people text-orange-600 text-sm sm:text-base"></i>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">500+</div>
              <div className="text-xs text-gray-600">Graduates</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300">
                <i className="bi bi-briefcase text-orange-600 text-sm sm:text-base"></i>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">95%</div>
              <div className="text-xs text-gray-600">Employment</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300">
                <i className="bi bi-shop text-orange-600 text-sm sm:text-base"></i>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">150+</div>
              <div className="text-xs text-gray-600">Businesses Started</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300">
                <i className="bi bi-star text-orange-600 text-sm sm:text-base"></i>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">4.9</div>
              <div className="text-xs text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;