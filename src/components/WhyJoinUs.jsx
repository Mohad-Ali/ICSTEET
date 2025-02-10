import React from 'react';
import { motion } from 'framer-motion';

const WhyJoinUs = () => {
  const points = [
    {
      title: "Explore Cutting-Edge Research and Innovations",
      description: "At ICSTEET-2026, you’ll have the opportunity to engage with the latest research and technological innovations across social sciences, education, engineering, and technology. Our carefully curated sessions and keynote addresses will showcase groundbreaking work that is shaping the future of these diverse fields."
    },
    {
      title: "Foster Global Networking and Collaborations",
      description: "Connect with leading experts, academics, and industry professionals from around the world. ICSTEET-2026 provides a platform to engage in meaningful discussions, explore potential collaborations, and create lasting professional relationships that can impact your future projects and research."
    },
    {
      title: "Gain Diverse Perspectives",
      description: "As we bring together a diverse set of disciplines, you’ll gain valuable insights from different fields of study. The interdisciplinary nature of the conference encourages participants to view challenges and solutions through various lenses, enhancing the depth of knowledge and understanding."
    },
    {
      title: "Interactive and Engaging Sessions",
      description: "With workshops, panel discussions, and ample Q&A time, ICSTEET-2026 is designed to be an interactive conference. We focus on creating an engaging environment where participants can ask questions, exchange ideas, and delve deep into the subjects that matter most."
    },
    {
      title: "Contribute to Global Challenges",
      description: "The theme of 'Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology' invites you to contribute to solutions that address global challenges. By joining us, you’ll be part of a forward-thinking community focused on fostering positive change."
    },
    {
      title: "Professional Development",
      description: "Attendees of ICSTEET-2026 will gain new insights, develop essential skills, and stay up-to-date on the latest trends in their fields. Whether you're a researcher, academic, industry leader, or student, this conference offers valuable learning and professional development opportunities."
    },
    {
      title: "Share Your Expertise",
      description: "If you are a researcher, educator, or professional, ICSTEET-2026 provides the perfect platform to present your work and exchange ideas with others. Share your research findings, contribute to discussions, and engage with experts in your field to elevate your academic and professional journey."
    },
    {
      title: "Celebrate Interdisciplinary Innovation",
      description: "ICSTEET-2026 is all about bridging gaps between different disciplines. It’s an opportunity to witness how engineering, technology, education, and social sciences can work together to find creative solutions to the world’s most pressing problems."
    },
    {
      title: "Publication Opportunities",
      description: "Publish your research in prestigious journals and conference proceedings. ICSTEET-2026 offers an excellent platform for researchers to have their work published and contribute to the advancement of knowledge in their respective fields."
    },
    {
      title: "CERADA Awards",
      description: "Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field. ICSTEET-2026 will honor those who have made significant impacts in education, social sciences, engineering, and technology."
    }
  ];

  return (
    <section className="mt-10 py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#03503B] mb-6">Why Join Us at ICSTEET-2026?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-200"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              whileHover={{ scale: 1.05 }} 
            >
              <h3 className="text-xl font-semibold text-[#03503B] mb-4">{point.title}</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
