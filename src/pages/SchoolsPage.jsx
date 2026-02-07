import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FlaskConical, GraduationCap, Users, School } from 'lucide-react';
import { curriculumData } from '../data/mock.js';

const SchoolsPage = () => {
  useEffect(() => {
    mixpanel.track('Schools Page Viewed');
  }, []);

  const benefits = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Clear understanding of concepts, practice with feedback, and learning that encourages curiosity",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      title: "Teachers",
      description: "Clear view of how the class is learning, student progress tracking, and chapter-aligned teacher notes",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: School,
      title: "School & Parents",
      description: "Visibility into learning progress and academic growth over time",
      color: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-88px)] flex flex-col relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"></div>
          
          {/* Main Content */}
          <div className="flex-grow flex items-center justify-center px-4 md:px-12 lg:px-20 py-12 md:py-16 relative z-10">
            <div className="max-w-6xl mx-auto w-full">
              
              {/* Tag */}
              <div className="text-center mb-6">
                <span className="inline-block text-xs md:text-sm text-emerald-700 font-medium uppercase tracking-[0.2em] bg-emerald-100/80 px-4 py-1.5 rounded-full">
                  For Schools & Partners
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-tagline text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center mb-6">
                What Budlee Brings to Schools
              </h1>
              
              {/* Subtext */}
              <p className="text-gray-600 text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16">
                Budlee supports schools by improving learning clarity, helping teachers guide students better, and keeping parents informed without adding pressure.
              </p>

              {/* Benefit Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Budlee Character */}
              <div className="flex justify-center mt-10 md:mt-12">
                <div className="relative">
                  <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2 shadow-lg whitespace-nowrap">
                    <span className="text-gray-700 font-semibold text-sm md:text-base">Let's transform learning together!</span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                  <img 
                    src="/images/budlee.png" 
                    alt="Budlee" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain animate-bounce-gentle"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CBSE Curriculum Section - Same as Landing Page */}
          <div className="w-full bg-white/80 backdrop-blur-sm py-4 md:py-5 px-4 md:px-12 lg:px-20 border-t border-gray-100 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-6">
                {/* Title + Science Label */}
                <div className="flex items-center gap-3 md:gap-6">
                  {/* Title */}
                  <span className="text-gray-500 font-medium text-sm md:text-base whitespace-nowrap">
                    Aligned with <span className="gradient-text font-bold">CBSE</span> Curriculum
                  </span>
                  
                  {/* Separator - Hidden on mobile */}
                  <div className="hidden md:block w-px h-6 bg-gray-200"></div>

                  {/* Science Label with Icon */}
                  <div className="flex items-center gap-1.5 md:gap-2 text-gray-600">
                    <FlaskConical className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                    <span className="font-semibold text-sm md:text-base">Science</span>
                  </div>
                </div>

                {/* Separator - Hidden on mobile */}
                <div className="hidden md:block w-px h-6 bg-gray-200"></div>

                {/* Class Pills - Horizontal scroll on mobile */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide max-w-full">
                  {curriculumData.classes.map((item, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 text-white font-bold text-xs md:text-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-sm hover:shadow-md hover:from-green-500 hover:via-emerald-600 hover:to-teal-500 transition-all duration-300 cursor-pointer"
                    >
                      {item.class}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolsPage;
