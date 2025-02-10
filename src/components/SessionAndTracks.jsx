import React from 'react';

const SessionAndTracks = () => {
  const sessions = [
    'Emerging Technologies & Education',
    'New Trends & Modern Approaches',
    'Education & Industry Co-operation',
    'Education & International Cooperation',
    'Teaching - Learning Relationship',
    'Sociology and Anthropology',
    'Psychology',
    'Social Science & Humanities',
    'Engineering & Technology',
  ];

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
     
      <h2 className="text-3xl font-bold text-[#03503B] text-center mb-8">
        Dive into the Future with ICSTEET 2026
      </h2>

      <p className="text-lg text-gray-700 mb-8 text-center">
        Our diverse sessions and tracks are designed to spark insightful discussions, foster collaboration, and drive transformative advancements across social sciences, teaching, education, engineering, and technology. We invite researchers, academicians, and professionals to submit their papers. Topics of interest include, but are not limited to:
      </p>

   
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {sessions.map((session, index) => (
          <div
            key={index}
            className={`bg-[#EDFFF7] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mix-blend-target ${
              index === sessions.length - 1 ? 'md:col-span-2 md:mx-auto' : ''
            }`}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#03503B]">{`Session ${index + 1}: ${session}`}</h3>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-[#03503B] mb-4">
          Call for Papers
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          We invite authors to submit papers on the topics mentioned in each session. Selected papers will have the opportunity to be presented at the conference and published in renowned journals.
        </p>
        <button className="px-6 py-2 bg-[#03503B] text-white rounded-lg shadow-lg hover:bg-[#02805b] transition duration-300 mix-blend-target">
          Submit Your Paper
        </button>
      </div>
    </div>
  );
};

export default SessionAndTracks;
