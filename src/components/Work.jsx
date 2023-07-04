"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const images = [
    "/ticker/IMG_7926.JPEG",
    "/ticker/IMG_7937.JPEG",
    "/ticker/IMG_8348.JPEG",
    "/ticker/IMG_8368.JPEG",
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
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
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 2 } },
  };

  return (
    <motion.section className='md:h-screen  lg:py-14 py-5 md:py-12 md:px-24 px-5'>
      <motion.div
        className='relative flex flex-col gap-4 w-full h-full '
        ref={ref}
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
      >
        <motion.h1
          className='text-center md:text-6xl text-4xl font-magtis mb-10 '
          variants={itemVariants}
        >
          Stunning Transformations
        </motion.h1>
        <div className='col-span-full gap-5 grid grid-col-1 md:grid-cols-2 grid-rows-[auto],auto,auto,auto] h-full'>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className='relative bg-cover bg-center w-full h-full aspect-square rounded-3xl'
              style={{ backgroundImage: `url(${image})` }}
              variants={itemVariants}
            >
              <div className='absolute inset-0 bg-secondary opacity-[15%] rounded-3xl' />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Work;
