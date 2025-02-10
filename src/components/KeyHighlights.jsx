

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const KeyHighlights = () => {
  const highlights = [
    {
      title: 'Interdisciplinary Sessions',
      description: 'Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.',
    },
    {
      title: 'Expert Keynote Speakers',
      description: 'Learn from renowned experts who will share their insights and experiences.',
    },
    {
      title: 'Paper Presentations',
      description: 'Present your research findings and contribute to discussions on a wide range of topics.',
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with peers, researchers, and industry professionals to build collaborations and partnerships.',
    },
    {
      title: 'Publication Opportunities',
      description: 'Selected papers will have the opportunity to be published in Scopus-indexed journals.',
    },
    {
      title: 'CERADA Awards',
      description: 'Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.',
    },
  ];


  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: 'block', background: 'green', height: '30px', width: '30px', borderRadius: '50%', left: '-30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={onClick}
      />
    );
  };


  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: 'block', background: 'green', height: '30px', width: '30px', borderRadius: '50%', right: '-30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={onClick}
      />
    );
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='flex justify-center'>
      <section className="w-11/12 my-12">
        <motion.h2
          className="text-3xl font-bold text-[#03503B] text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Key Highlights
        </motion.h2>

        <Slider {...settings}>
          {highlights.map((highlight, index) => (
            <div key={index} className="p-4">
              <motion.div
                className="w-full bg-[#EDFFF7] rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-[#03503B]">{highlight.title}</h3>
                <p className="mt-4 text-gray-600">{highlight.description}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default KeyHighlights;