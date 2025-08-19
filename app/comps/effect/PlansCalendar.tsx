"use client";
import { useState } from "react";

const plansData = [
  {
    id: 1,
    title: "Basic Plan",
    price: "150,000 RWF",
    description: "Tailoring Startup Level 1 no materials included",
    sessions: "1 - 3 months",
    requirements: ["Basic tailoring tools", "Notebook"],
    bonus: "Free access to sewing machines for practice",
    icon: "bi-star",
    popular: false,
  },
  {
    id: 2,
    title: "Intermediate Plan",
    price: "250,000 RWF",
    description: "1-6 months comprehensive training",
    sessions: "Monday to Friday, 9 AM - 1 PM",
    requirements: ["Tailoring tools", "Notebook", "Fabric materials"],
    bonus: "Access to design software and advanced techniques workshop",
    icon: "bi-star-fill",
    popular: true,
  },
  {
    id: 3,
    title: "Advanced Plan",
    price: "350,000 RWF",
    description: "Training for advanced tailoring techniques",
    sessions: "1 - 6 months",
    requirements: ["Everything is included"],
    bonus: "One-on-one mentorship and free materials for final projects",
    icon: "bi-award",
    popular: false,
  },
];

const calendarData = [
  {
    month: "October",
    year: "2024",
    events: [
      { date: "3rd", event: "Start of new session", type: "important" },
      { date: "10th", event: "Intermediate level workshop", type: "workshop" },
      { date: "25th", event: "Product Showcase", type: "event" },
    ],
  },
  {
    month: "November",
    year: "2024",
    events: [
      { date: "1st", event: "Holiday break", type: "holiday" },
      { date: "15th", event: "Level 2 assessments", type: "assessment" },
      { date: "30th", event: "Final project submissions", type: "deadline" },
    ],
  },
];

const PlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'important': return 'bi-calendar-check';
      case 'workshop': return 'bi-tools';
      case 'event': return 'bi-trophy';
      case 'holiday': return 'bi-calendar-x';
      case 'assessment': return 'bi-clipboard-check';
      case 'deadline': return 'bi-clock';
      default: return 'bi-calendar-event';
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'important': return 'from-green-100 to-emerald-100 text-green-700';
      case 'workshop': return 'from-blue-100 to-cyan-100 text-blue-700';
      case 'event': return 'from-yellow-100 to-orange-100 text-orange-700';
      case 'holiday': return 'from-purple-100 to-violet-100 text-purple-700';
      case 'assessment': return 'from-red-100 to-pink-100 text-red-700';
      case 'deadline': return 'from-gray-100 to-slate-100 text-gray-700';
      default: return 'from-yellow-100 to-orange-100 text-orange-700';
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <i className="bi bi-calendar-event text-2xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"></i>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-yellow-800 to-orange-800 bg-clip-text text-transparent mb-4">
            Our Plans & Calendar
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your fashion journey and stay updated with our upcoming events and sessions.
          </p>
        </div>

        {/* Payment Plans Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Choose Your Plan</h2>
            <p className="text-gray-600">Flexible payment options designed for every skill level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plansData.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 relative ${
                  plan.popular ? 'ring-2 ring-yellow-500 ring-opacity-50' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-orange-500 ring-opacity-50' : ''}`}
                onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}

                {/* Card Header */}
                <div className="relative p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <div className="flex items-center space-x-3">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full p-1">
                        <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                          <i className={`${plan.icon} text-white text-lg sm:text-xl`}></i>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{plan.title}</h3>
                      <p className="text-2xl font-bold text-orange-600">{plan.price}</p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-700 mb-4">{plan.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <i className="bi bi-clock text-orange-500 text-sm"></i>
                        <h4 className="text-sm font-semibold text-gray-800">Sessions</h4>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{plan.sessions}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <i className="bi bi-list-check text-orange-500 text-sm"></i>
                        <h4 className="text-sm font-semibold text-gray-800">Requirements</h4>
                      </div>
                      <ul className="text-sm text-gray-600 ml-6 space-y-1">
                        {plan.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <i className="bi bi-check2 text-orange-500 text-xs"></i>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <i className="bi bi-gift text-orange-500 text-sm"></i>
                        <h4 className="text-sm font-semibold text-gray-800">Bonus</h4>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{plan.bonus}</p>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center space-x-2">
                      <span>Choose Plan</span>
                      <i className="bi bi-arrow-right text-sm"></i>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar of Events Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
            <p className="text-gray-600">Stay updated with our training schedule and important dates</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {calendarData.map((monthData, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Month Header */}
                <div className="relative p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <div className="flex items-center space-x-3">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full p-1">
                        <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                          <i className="bi bi-calendar3 text-white text-lg sm:text-xl"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{monthData.month}</h3>
                      <p className="text-sm text-gray-600">{monthData.year}</p>
                    </div>
                  </div>
                </div>

                {/* Events List */}
                <div className="p-6">
                  <div className="space-y-3">
                    {monthData.events.map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${getEventColor(event.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <i className={`${getEventIcon(event.type)} text-xs`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-semibold text-gray-800">{event.date}</span>
                            <span className={`inline-block bg-gradient-to-r ${getEventColor(event.type)} text-xs px-2 py-1 rounded-full border border-current border-opacity-20`}>
                              {event.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{event.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;