import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { FlaskConical, GraduationCap, Users, School, ArrowRight } from 'lucide-react';
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
      <Header ctaText="Request a School Demo" />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-88px)] flex flex-col relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"></div>
          
          {/* Main Content */}
          <div className="flex-grow flex items-center justify-center px-4 md:px-12 lg:px-20 py-8 md:py-10 relative z-10">
            <div className="max-w-6xl mx-auto w-full">

              {/* Headline with Budlee */}
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-4 md:mb-6">
                <h1 className="hero-tagline text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center">
                  Budlee for <span className="gradient-text">Schools</span>
                </h1>
                
                {/* Budlee Character - No speech bubble */}
                <img 
                  src="/images/budlee.png" 
                  alt="Budlee" 
                  className="w-14 h-14 md:w-20 md:h-20 object-contain animate-bounce-gentle flex-shrink-0"
                />
              </div>
              
              {/* Subtext */}
              <p className="text-gray-600 text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-8 md:mb-10">
                Budlee supports schools by improving learning clarity, helping teachers guide students better, and keeping parents informed without adding pressure.
              </p>

              {/* Benefit Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    {/* Icon + Title in same row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {benefit.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CBSE Curriculum Section - Single Row Centered */}
          <div className="w-full bg-white/80 backdrop-blur-sm py-4 md:py-5 px-4 md:px-12 lg:px-20 border-t border-gray-100 relative z-10">
            <div className="max-w-6xl mx-auto flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {/* Curriculum Text */}
                <span className="text-gray-500 font-medium text-sm md:text-base">
                  Aligned with <span className="gradient-text font-bold">CBSE</span> Curriculum
                </span>
                
                <span className="text-gray-300">·</span>
                
                {/* Science with Icon */}
                <div className="flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 font-medium text-sm md:text-base">Science</span>
                </div>
                
                <span className="text-gray-300">·</span>
                
                {/* Grades Pill */}
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 text-white font-bold text-xs md:text-sm px-3 py-1 rounded-full">
                  Grades 6–10
                </span>
                
                <span className="text-gray-300">·</span>
                
                {/* CTA Button */}
                <Button 
                  className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-4 py-2 md:px-5 md:py-2.5 text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Request a School Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
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
