import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Header = () => {
  useEffect(() => {
    gsap.to('.scrolling-text', {
      x: '-100%',
      duration: 10,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <header className="bg-[#009D2E] text-white py-8 mix-blend-target">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold px-4">
          2nd International Conference on Social Sciences, Teaching & Education, Engineering and Technology (ICSTEET)
        </h1>
        <p className="scrolling-text text-sm sm:text-base md:text-lg lg:text-xl px-4 whitespace-nowrap overflow-hidden">
          HYBRID EVENT - You can participate in person in the Philippines or Virtually from your home or office.
        </p>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl px-4">
          Theme: "Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology"
        </p>
      </motion.div>
    </header>
  );
}

export default Header;

