"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [footerFormData, setFooterFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFooterFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFooterFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    // Validate required fields
    if (!footerFormData.name.trim() || !footerFormData.email.trim() || !footerFormData.message.trim()) {
      setResponseMessage("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // Prepare form data for API
    const apiData = {
      name: footerFormData.name.trim(),
      email: footerFormData.email.trim(),
      phone: "", // Not collected in footer form
      subject: "Footer Contact Form",
      message: footerFormData.message.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        // Clear form on success
        setFooterFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setResponseMessage(
          result.error || 
          result.message || 
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error('Footer contact form error:', error);
      setResponseMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-4 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-4 sm:left-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            DROP US A LINE
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-0.5 w-4 sm:w-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            <p className="text-gray-300 text-xs font-medium px-2">We would like to hear from you</p>
            <div className="h-0.5 w-4 sm:w-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Address Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <h4 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3"></span>
                ADDRESS
              </h4>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="group flex items-start space-x-3 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300 flex-shrink-0">
                    <i className="bi bi-telephone text-yellow-400 text-xs sm:text-sm"></i>
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm">
                    +250 788 282 252
                  </div>
                </div>
                
                <div className="group flex items-start space-x-3 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300 flex-shrink-0">
                    <i className="bi bi-at text-orange-400 text-xs sm:text-sm"></i>
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm break-all">
                    info@biafricantouch.com
                  </div>
                </div>
                
                <div className="group flex items-start space-x-3 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300 flex-shrink-0">
                    <i className="bi bi-geo-alt text-yellow-400 text-xs sm:text-sm"></i>
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm">
                    <div className="space-y-1">
                      <div>• Giporoso, Remera, Kigali</div>
                      <div>• Youth center, Muhoza, Musanze</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1">
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3"></span>
              SEND MESSAGE
            </h4>
            
            <form onSubmit={handleFooterFormSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full names *"
                  value={footerFormData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm text-xs sm:text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={footerFormData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 transition-all duration-300 backdrop-blur-sm text-xs sm:text-sm"
                  required
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Your message *"
                rows={3}
                value={footerFormData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm resize-none text-xs sm:text-sm"
                required
              ></textarea>
              
              <button 
                type="submit"
                disabled={isSubmitting || !footerFormData.name.trim() || !footerFormData.email.trim() || !footerFormData.message.trim()}
                className="group relative w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden text-xs sm:text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Submit Message'
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>

              {responseMessage && (
                <div className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm ${
                  responseMessage.includes('successfully') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  <div className="flex items-center">
                    <i className={`${responseMessage.includes('successfully') ? 'bi bi-check-circle' : 'bi bi-exclamation-circle'} mr-2`}></i>
                    {responseMessage}
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3"></span>
              FOLLOW US
            </h4>
            
            <div className="flex flex-wrap gap-3 sm:grid sm:grid-cols-5 sm:gap-3">
              <Link href="#" className="group relative w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
                <i className="bi bi-facebook text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors"></i>
              </Link>
              <Link href="#" className="group relative w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
                <i className="bi bi-twitter text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors"></i>
              </Link>
              <Link href="#" className="group relative w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
                <i className="bi bi-instagram text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors"></i>
              </Link>
              <Link href="#" className="group relative w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
                <i className="bi bi-linkedin text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors"></i>
              </Link>
              <Link href="#" className="group relative w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
                <i className="bi bi-whatsapp text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-50 to-orange-50 p-1 rounded-full shadow-md">
                  <Image src="/logo/favicon.ico" width={24} height={24} alt="Logo" className="object-cover w-full h-full" />
                </div>
              </div>
              <span className="text-gray-400 text-xs text-center">© Copyright 2024. All rights reserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
      >
        <i className="bi bi-chevron-up text-xs sm:text-sm group-hover:text-sm sm:group-hover:text-base transition-all duration-300"></i>
      </button>
    </footer>
  );
};

export default Footer;