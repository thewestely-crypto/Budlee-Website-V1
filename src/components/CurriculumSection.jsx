import React from 'react';
import { curriculumData } from '../data/mock';

const CurriculumSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl text-gray-700 font-medium">
            {curriculumData.title}{' '}
            <span className="text-green-600 font-bold">{curriculumData.highlight}</span>{' '}
            {curriculumData.subtitle}
          </h3>
        </div>

        {/* Class Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {curriculumData.classes.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl px-8 py-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 cursor-pointer min-w-[140px] transform hover:-translate-y-1"
            >
              <h4 className="text-green-600 font-bold text-lg md:text-xl mb-1 group-hover:text-green-700 transition-colors">
                {item.class}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                {item.subject}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#4CAF50" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#4CAF50" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
