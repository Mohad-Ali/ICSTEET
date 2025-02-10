import React from 'react';
import { motion } from 'framer-motion';

const WelcomeToICSTEET = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-8 sm:p-14 md:p-24 mb-8">
   
      <div className="flex justify-between items-center mb-8 px-4">
  <img 
    src="https://confworld.org/assets/logo-D7UFZTf_.png" 
    alt="Company Logo" 
    className="h-16 sm:h-20 md:h-24" 
  />
  <div className="flex space-x-4">
    <img 
      src="https://via.placeholder.com/120x50?text=Scopus+Logo" 
      alt="Scopus Logo" 
      className="h-10 sm:h-12 md:h-14" 
    />
    <img 
      src="https://via.placeholder.com/120x50?text=Clarivate+WoS" 
      alt="Clarivate WoS Logo" 
      className="h-10 sm:h-12 md:h-14" 
    />
  </div>
</div>


    
      <motion.h2
        className="text-2xl font-bold text-[#03503B]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to ICSTEET 2026
      </motion.h2>
      <p className="mt-4 text-base sm:text-lg md:text-xl">
        The International Conference on Social Sciences, Teaching & Education, Engineering, and Technology (ICSTEET) is back for its second edition, and we are excited to invite you to join us in this groundbreaking event!
        ICSTEET-2026 will bring together leading scholars, industry experts, academics, and researchers from around the world to explore the latest advancements and tackle the challenges faced by interdisciplinary fields.
      </p>
    </section>
  );
};

export default WelcomeToICSTEET;