
import React from 'react';
import { motion } from 'framer-motion';

const ConferenceAndAbout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mx-auto w-full max-w-screen-xl mix-blend-target">
    
      <motion.section
        className="group bg-white shadow-lg rounded-lg p-6 mb-8 transition-all duration-300 transform hover:scale-105 w-full md:w-9/10 hover:bg-[#03503B] hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-2xl font-bold text-[#03503B] transition-colors duration-300 group-hover:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Conference Theme
        </motion.h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          "Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology"
          ICSTEET-2026 aims to bring together scholars, researchers, and industry experts to explore how innovations in social sciences, teaching and education, and engineering and technology can bridge gaps in knowledge, industry practices, and global challenges...
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          The conference is dedicated to the dissemination of cutting-edge knowledge, groundbreaking discoveries, and innovative practices in areas such as emerging educational technologies, innovative teaching methods, industry-academia collaboration, and advancements in sociology...
        </p>
      </motion.section>

   
      <motion.section
        className="group bg-white shadow-lg rounded-lg p-6 mb-8 transition-all duration-300 transform hover:scale-105 w-full md:w-9/10 hover:bg-[#03503B] hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-2xl font-bold text-[#03503B] transition-colors duration-300 group-hover:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About ICSTEET
        </motion.h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
        ICSTEET unites top academic scientists, researchers, and scholars to exchange
experiences and share groundbreaking research. This conference offers an
interdisciplinary platform to present new advances in Education, Engineering &amp;
Technology, Social Sciences and Humanities. Join us to explore cutting-edge research,
foster interdisciplinary collaborations and network with peers worldwide.
        </p>
      </motion.section>
    </div>
  );
};

export default ConferenceAndAbout; 