import React from 'react';
import { motion } from 'framer-motion';

const AboutICSTEET = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <motion.h2
        className="text-2xl font-bold text-[#03503B]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About ICSTEET
      </motion.h2>
      <p className="mt-4 text-lg">
        ICSTEET unites top academic scientists, researchers, and scholars to exchange experiences and share groundbreaking research. This conference offers an interdisciplinary platform to present new advances in Education, Engineering & Technology, Social Sciences, and Humanities.
        Join us to explore cutting-edge research, foster interdisciplinary collaborations, and network with peers worldwide. ICSTEET provides a platform for academic exchange and knowledge sharing in diverse fields, helping to push the boundaries of innovation and research.
      </p>
    </section>
  );
};

export default AboutICSTEET;