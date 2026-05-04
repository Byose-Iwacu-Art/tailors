"use client";

import { useState } from "react";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      id: 1,
      icon: "bi-geo-alt-fill",
      title: "Visit Our Campus",
      primary: "29 KG 40 St, Kigali",
      secondary: "Opposite Cyizere Fruits, Kimironko",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      icon: "bi-telephone-fill",
      title: "Call Us Now",
      primary: "+250 788 282 252",
      secondary: "Available 24/7",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      icon: "bi-envelope-fill",
      title: "Email Support",
      primary: "info@biafricantouch.com",
      secondary: "Quick response guaranteed",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(""); // Clear previous messages

    // Validate required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setResponseMessage("Please fill in all required fields (Name, Email, and Message).");
      setIsSubmitting(false);
      return;
    }

    // Prepare form data
    const formData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject || "General Inquiry",
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.");
        // Clear form on success
        setMessage("");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
      } else {
        // Handle API error responses
        setResponseMessage(
          result.error || 
          result.message || 
          "Something went wrong. Please try again or contact us directly."
        );
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setResponseMessage("Network error. Please check your connection and try again, or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs? We're here to help you start your fashion journey.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="relative p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="flex items-center space-x-3">
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full p-1">
                      <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <i className={`${method.icon} text-white text-lg`}></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-1">{method.title}</h4>
                    <p className="text-sm text-gray-700">{method.primary}</p>
                    <p className="text-xs text-gray-600">{method.secondary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="relative p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full p-1">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <i className="bi bi-envelope-paper text-white text-lg"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Send us a Message</h3>
                  <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="visit">Campus Visit</option>
                      <option value="financial">Financial Aid</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your interests and questions... *"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !email.trim() || !message.trim()}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Send Message
                      <i className="bi bi-arrow-right ml-2"></i>
                    </div>
                  )}
                </button>

                {responseMessage && (
                  <div className={`p-4 rounded-lg ${responseMessage.includes('successfully') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    <div className="flex items-center">
                      <i className={`${responseMessage.includes('successfully') ? 'bi bi-check-circle' : 'bi bi-exclamation-circle'} mr-2`}></i>
                      {responseMessage}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;