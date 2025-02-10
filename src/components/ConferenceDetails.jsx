import React from 'react';
import { motion } from 'framer-motion';

const ConferenceDetails = () => {
  return (
    <motion.section
      className="bg-white shadow-lg rounded-lg p-6 mb-8 mx-auto max-w-4xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className="text-2xl font-bold text-[#03503B] mb-4 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Conference Details
      </motion.h2>

      <motion.ul
        className="list-none space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {[
          { label: 'Date', value: '29-30 January, 2026' },
          { label: 'City, Country', value: 'Manila, Philippines' },
          { label: 'ISBN', value: '978-15-545371-2-9' },
          { label: 'Organized by', value: 'Confworld Educational Research and Development Association' }
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{
              duration: 0.8,
              delay: 0.5 + index * 0.2,
            }}
            className="text-base sm:text-lg md:text-xl"
          >
            <strong>{item.label}: </strong>{item.value}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default ConferenceDetails;
