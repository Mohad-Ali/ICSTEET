import React from 'react';
import { motion } from 'framer-motion';

const SubmissionDeadlines = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-[#03503B] mb-6"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ amount: 0.5 }} // Trigger animation on 50% of the element's visibility
        >
          Submission Deadlines
        </motion.h2>
        
        <motion.ul
          className="list-inside space-y-4"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ amount: 0.5 }} // Trigger animation on 50% of the element's visibility
        >
          <motion.li 
            className="text-base sm:text-lg md:text-xl text-gray-700"
            variants={listItemVariants}
          >
            <strong>Early bird registration deadline:</strong> 30 April 2025
          </motion.li>
          <motion.li 
            className="text-base sm:text-lg md:text-xl text-gray-700"
            variants={listItemVariants}
          >
            <strong>Abstract submission:</strong> 1 April 2025
          </motion.li>
          <motion.li 
            className="text-base sm:text-lg md:text-xl text-gray-700"
            variants={listItemVariants}
          >
            <strong>Full paper submission:</strong> 31 May 2025
          </motion.li>
          <motion.li 
            className="text-base sm:text-lg md:text-xl text-gray-700"
            variants={listItemVariants}
          >
            <strong>Final registration:</strong> 30 June 2025
          </motion.li>
        </motion.ul>
        
        <div className="text-center mt-6">
          <a
            href="/submission"
            className="inline-block text-[#03503B] font-semibold underline text-base sm:text-lg md:text-xl"
          >
            For detailed submission guidelines, please visit the Submission Page.
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubmissionDeadlines;
