"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const images = [
    "/ticker/IMG_8375.JPEG",
    "/ticker/IMG_8379.JPEG",
    "/ticker/IMG_8348.JPEG",
    "/ticker/IMG_7945.JPEG",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } },
  };

  return (
    <motion.div
      className='relative grid grid-cols-1 md:grid-cols-2  lg:p-14 p-5 md:p-12  gap-4 content-center items-center w-full min-h-screen max-w-screen h-min'
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={inView ? "show" : "hidden"}
    >
      <motion.h1
        className='col-span-full text-center md:text-6xl text-4xl font-magtis mb-10 '
        variants={itemVariants}
      >
        Stunning Transformations
      </motion.h1>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className='relative aspect-square bg-cover bg-center rounded-3xl w-auto'
          style={{ backgroundImage: `url(${image})` }}
          variants={itemVariants}
        >
          <div className='absolute inset-0 bg-secondary opacity-[15%] rounded-3xl' />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Work;
