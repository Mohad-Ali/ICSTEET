import React from 'react';
import { motion } from 'framer-motion';

const ConferenceTheme = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <motion.h2
        className="text-2xl font-bold text-[#03503B]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Conference Theme
      </motion.h2>
      <p className="mt-4 text-lg">
        "Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology"
        ICSTEET-2026 aims to bring together scholars, researchers, and industry experts to explore how innovations in social sciences, teaching and education, and engineering and technology can bridge gaps in knowledge, industry practices, and global challenges. This conference will emphasize interdisciplinary approaches that address contemporary challenges, inspire future research, and encourage collaboration for global sustainability.
      </p>
      <p className="mt-4 text-lg">
        The conference is dedicated to the dissemination of cutting-edge knowledge, groundbreaking discoveries, and innovative practices in areas such as emerging educational technologies, innovative teaching methods, industry-academia collaboration, and advancements in sociology, psychology, humanities, engineering, and technology.
        It offers a platform for expert researchers to showcase their work, connect with peers, and publish their findings in Scopus-indexed journals. Attendees will gain inspiration from the experiences and insights shared by distinguished keynote speakers, industry leaders, and session presenters.
      </p>
    </section>
  );
}

export default ConferenceTheme;