"use client";

import Link from "next/link";
import { useState } from "react";

interface Principal {
  name: string;
  contact: string;
}

interface School {
  id: number;
  name: string;
  location: string;
  mapUrl: string;
  address: string;
  principal: Principal;
  courses: string[];
  images: string[];
  features: string[];
  students: string;
  established: string;
}

interface ImageIndex {
  [key: number]: number;
}

const SchoolsPage: React.FC = () => {
  const [activeSchool, setActiveSchool] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<ImageIndex>({});

  const schoolData: School[] = [
    {
      id: 1,
      name: "Kigali Branch",
      location: "Opposite Cyizere Fruits, Kimironko",
      mapUrl: "https://maps.google.com/maps?q=29+KG+40+St+Kimironko+Kigali+Rwanda&t=&z=15&ie=UTF8&iwloc=&output=embed",
      address: "29 KG 40 St, Kigali, Rwanda",
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
        "/gallery/DSC_0783.JPG",
        "/gallery/DSC_0744.JPG",
        "/gallery/DSC_0768.JPG",
        "/gallery/DSC_0776.JPG",
        "/gallery/DSC_0772.JPG"
      ],
      features: ["Modern Equipment", "Experienced Instructors", "Flexible Schedules"],
      students: "150+ Students",
      established: "2018"
    },
    {
      id: 2,
      name: "Musanze Branch",
      location: "Near Youth Center",
      mapUrl: "https://maps.google.com/maps?q=musanze+muhoza+sector+youth+center&t=&z=15&ie=UTF8&iwloc=&output=embed",
      address: "Youth center, Muhoza, Musanze District",
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
      features: ["State-of-the-art Facilities", "Small Class Sizes", "Community Focus"],
      students: "120+ Students",
      established: "2020"
    },
  ];

  const nextImage = (schoolId: number): void => {
    const school = schoolData.find(s => s.id === schoolId);
    if (!school) return;
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [schoolId]: ((prev[schoolId] || 0) + 1) % school.images.length
    }));
  };

  const prevImage = (schoolId: number): void => {
    const school = schoolData.find(s => s.id === schoolId);
    if (!school) return;
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [schoolId]: ((prev[schoolId] || 0) - 1 + school.images.length) % school.images.length
    }));
  };

  const getCurrentImage = (schoolId: number): number => {
    return currentImageIndex[schoolId] || 0;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTIwSDIyNVYxNDBIMjA1VjE2MEgxOTVWMTQwSDE3NVYxMjBaTTIwNSAxNDBIMjI1VjE2MEgyMDVWMTQwWiIgZmlsbD0iIzlDQTNBRiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0cHgiPlNjaG9vbCBJbWFnZTwvdGV4dD4KPHN2Zz4K';
  };

  const setImageByIndex = (schoolId: number, index: number): void => {
    setCurrentImageIndex(prev => ({ ...prev, [schoolId]: index }));
  };

  const handleSchoolToggle = (schoolId: number): void => {
    setActiveSchool(activeSchool === schoolId ? null : schoolId);
  };

  return (
    <div className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <i className="bi bi-building text-2xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"></i>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-yellow-800 to-orange-800 bg-clip-text text-transparent mb-4">
            Our School Branches
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our modern campuses equipped with state-of-the-art facilities and experienced instructors across Rwanda.
          </p>
        </div>

        {/* Schools Grid */}
        <div className="space-y-8">
          {schoolData.map((school, index) => (
            <div
              key={school.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 cursor-pointer ${
                activeSchool === school.id ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
              }`}
              onClick={() => handleSchoolToggle(school.id)}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                {/* School Information */}
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                  {/* Card Header */}
                  <div className="relative p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative group-hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full p-1">
                            <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                              <i className="bi bi-geo-alt-fill text-white text-lg sm:text-xl"></i>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{school.name}</h2>
                          <p className="text-sm text-gray-600">{school.location}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                          Est. {school.established}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white bg-opacity-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <i className="bi bi-people text-orange-500 text-sm"></i>
                          <span className="text-xs font-medium text-gray-700">{school.students}</span>
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <i className="bi bi-award text-orange-500 text-sm"></i>
                          <span className="text-xs font-medium text-gray-700">Certified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Address */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="bi bi-geo-alt text-orange-500 text-sm"></i>
                          <h4 className="text-sm font-semibold text-gray-800">Address</h4>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">{school.address}</p>
                      </div>

                      {/* Principal */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="bi bi-person-badge text-orange-500 text-sm"></i>
                          <h4 className="text-sm font-semibold text-gray-800">Principal</h4>
                        </div>
                        <div className="ml-6">
                          <p className="text-sm text-gray-700 font-medium">{school.principal.name}</p>
                          <p className="text-sm text-gray-600">{school.principal.contact}</p>
                        </div>
                      </div>

                      {/* Courses */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="bi bi-book text-orange-500 text-sm"></i>
                          <h4 className="text-sm font-semibold text-gray-800">Courses Offered</h4>
                        </div>
                        <ul className="text-sm text-gray-600 ml-6 space-y-1">
                          {school.courses.map((course, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <i className="bi bi-check2 text-orange-500 text-xs"></i>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="bi bi-star text-orange-500 text-sm"></i>
                          <h4 className="text-sm font-semibold text-gray-800">Key Features</h4>
                        </div>
                        <div className="ml-6 flex flex-wrap gap-2">
                          {school.features.map((feature, idx) => (
                            <span key={idx} className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <Link 
                        href="mailto:info@biafricantouch.com" 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-center space-x-1">
                          <i className="bi bi-telephone text-xs"></i>
                          <span>Contact</span>
                        </div>
                      </Link>
                      <Link 
                        href="/contact" 
                        className="bg-white border border-orange-200 text-orange-600 font-semibold py-2 px-4 rounded-lg hover:shadow-md transition-all duration-300 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-center space-x-1">
                          <i className="bi bi-calendar-check text-xs"></i>
                          <span>Visit</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* School Images and Map */}
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'} bg-gray-100`}>
                  <div className="h-full">
                    {/* Image Carousel */}
                    <div className="relative h-64 lg:h-80">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                      <img
                        src={school.images[getCurrentImage(school.id)]}
                        alt={`${school.name} Image ${getCurrentImage(school.id) + 1}`}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                      
                      {/* Navigation Buttons */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(school.id);
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 z-20"
                        aria-label="Previous image"
                      >
                        <i className="bi bi-chevron-left text-gray-700 text-sm"></i>
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(school.id);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 z-20"
                        aria-label="Next image"
                      >
                        <i className="bi bi-chevron-right text-gray-700 text-sm"></i>
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {school.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setImageByIndex(school.id, idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              getCurrentImage(school.id) === idx ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Map Section */}
                    <div className="h-48 lg:h-64 p-4">
                      <div className="bg-white rounded-lg shadow-sm h-full overflow-hidden">
                        <iframe
                          src={school.mapUrl}
                          width="100%"
                          height="100%"
                          className="border-0"
                          allowFullScreen
                          loading="lazy"
                          title={`${school.name} Location`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-100">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Start Your Fashion Journey?</h3>
              <p className="text-gray-600 mb-4">Visit any of our branches or contact us for more information about our programs.</p>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300" onClick={() => {window.location.href = '/apply'}}>
                <div className="flex items-center justify-center space-x-2">
                  <i className="bi bi-chat-dots text-sm"></i>
                  <span>Get Started Today</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;