import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

// Features data for the container unit
const containerFeatures = [
  {
    id: 1,
    title: "Structure",
    details: [
      "Steel Door with Security Lock",
      "Double Glass PVC Frame Windows",
      "Insulated Wall Panels",
      "Corner Fittings for Stability"
    ]
  },
  {
    id: 2,
    title: "Roofing",
    details: [
      "Rib Type Roof",
      "Roof Purlins",
      "Roof Insulation",
      "Roof Beam Support"
    ]
  },
  {
    id: 3,
    title: "Flooring",
    details: [
      "Vinyl Tile Flooring",
      "Fiber Cement Base",
      "Floor Beams",
      "Floor Purlins"
    ]
  },
  {
    id: 4,
    title: "Electrical",
    details: [
      "LED Lighting",
      "Light Switches",
      "Power Sockets",
      "Electrical Wiring"
    ]
  }
];

const ContainerUnitDetailsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animateDetails, setAnimateDetails] = useState(false);

  // Simulate intersection observer for scroll animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate details when category changes
  useEffect(() => {
    setAnimateDetails(false);
    const timer = setTimeout(() => setAnimateDetails(true), 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleNext = () => {
    setActiveCategory((prev) => (prev === containerFeatures.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setActiveCategory((prev) => (prev === 0 ? containerFeatures.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with fade-in animation */}
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-blue-200 text-black text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block transition-all duration-500 hover:bg-blue-300 hover:scale-105">
            TECHNICAL DETAILS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Container Unit Components
          </h2>
          <p className="text-xl text-gray-600">
            Explore the detailed components that make our container units superior
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model/Image Side with hover effects */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-lg">
                {/* Sketchfab 3D Model Embed */}
                <div className="sketchfab-embed-wrapper w-full h-80 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <iframe 
                    title="Archicad Editable House Shipping Container UPD" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    xr-spatial-tracking="true"
                    execution-while-out-of-viewport="true"
                    execution-while-not-rendered="true"
                    web-share="true"
                    src="https://sketchfab.com/models/d5d494a3a9884101af20722be864028a/embed" 
                    className="w-full h-full rounded-lg"
                  >
                  </iframe>
                </div>
                
                {/* Model attribution */}
                <div className="mt-3 text-xs text-gray-500 leading-relaxed">
                  <a 
                    href="https://sketchfab.com/3d-models/archicad-editable-house-shipping-container-upd-d5d494a3a9884101af20722be864028a?utm_medium=embed&utm_campaign=share-popup&utm_content=d5d494a3a9884101af20722be864028a" 
                    target="_blank" 
                    rel="nofollow noopener"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  > 
                    Archicad Editable House Shipping Container UPD 
                  </a> 
                  {' '}by{' '}
                  <a 
                    href="https://sketchfab.com/architect47?utm_medium=embed&utm_campaign=share-popup&utm_content=d5d494a3a9884101af20722be864028a" 
                    target="_blank" 
                    rel="nofollow noopener"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  > 
                    VRA 
                  </a> 
                  {' '}on{' '}
                  <a 
                    href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d5d494a3a9884101af20722be864028a" 
                    target="_blank" 
                    rel="nofollow noopener"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Sketchfab
                  </a>
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-20 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-75"></div>
              </div>
            </div>
          </div>

          {/* Features Navigation Side */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header with navigation */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 transition-all duration-300">
                  {containerFeatures[activeCategory].title}
                </h3>
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrevious}
                    className="border border-blue-500 text-blue-500 hover:bg-blue-50 hover:scale-105 p-2 rounded-md transition-all duration-200 active:scale-95"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="sr-only">Previous category</span>
                  </button>
                  <button 
                    onClick={handleNext}
                    className="border border-blue-500 text-blue-500 hover:bg-blue-50 hover:scale-105 p-2 rounded-md transition-all duration-200 active:scale-95"
                  >
                    <ArrowRight className="h-5 w-5" />
                    <span className="sr-only">Next category</span>
                  </button>
                </div>
              </div>
              
              {/* Animated separator */}
              <div className="h-px bg-gray-200 my-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-full animate-pulse"></div>
              </div>
              
              {/* Animated feature list */}
              <ul className="space-y-4 mb-8">
                {containerFeatures[activeCategory].details.map((detail, index) => (
                  <li 
                    key={`${activeCategory}-${index}`}
                    className={`flex items-start transition-all duration-500 transform ${
                      animateDetails 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms` 
                    }}
                  >
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-500 transition-all duration-300 hover:text-blue-600 hover:scale-110" />
                    </div>
                    <p className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
              
              {/* Bottom navigation and CTA */}
              <div className="flex justify-between items-center mt-8">
                {/* Pagination dots */}
                <div className="flex space-x-2">
                  {containerFeatures.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === activeCategory 
                          ? "bg-blue-500 scale-110" 
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to category ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group">
                  <span className="flex items-center">
                    View More Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Progress</span>
            <span>{activeCategory + 1} of {containerFeatures.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeCategory + 1) / containerFeatures.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerUnitDetailsSection;