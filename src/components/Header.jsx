"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } },
  };

  return (
    <header
      ref={ref}
      className='flex justify-center items-center md:flex-row md:h-min md:gap-5 min-w-screen flex-shrink-0 '
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
        className='flex flex-grow justify-start items-center relative'
      >
        <motion.div className='flex-grow ' variants={itemVariants}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 2000 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='0'
              y1='10'
              x2='100%'
              y2='10'
              stroke='#F10E0E'
              strokeWidth={9}
            />
          </svg>
        </motion.div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
        className='flex items-center justify-center md:min-w-[200px] md:min-h-[78px] min-w-[150px] h-auto '
      >
        <Image
          src='/Logo/STEPHSBEAUTYBAR.png'
          alt='Steph’s Beauty Bar Logo'
          width={200}
          height={200}
          contain
        />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
        className='flex flex-grow justify-end items-center relative'
      >
        <motion.div className='flex-grow ' variants={itemVariants}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 2000 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='0'
              y1='10'
              x2='100%'
              y2='10'
              stroke='#F10E0E'
              strokeWidth={9}
            />
          </svg>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
