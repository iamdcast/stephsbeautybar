"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";

const imagesUrl = [
  "/ticker/IMG_7937.JPEG",
  "/ticker/IMG_8348.JPEG",
  "/ticker/IMG_8978.JPEG",
  "/ticker/IMG_9526.jpeg",
  "/ticker/IMG_8368.JPEG",
];

const maskShapes = [
  '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_238_1284)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z" fill="url(#paint0_linear_238_1284)"/> </g> <defs> <linearGradient id="paint0_linear_238_1284" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_238_1284"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>',
  '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_221_10)"> <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z" fill="url(#paint0_linear_221_10)"/> </g> <defs> <linearGradient id="paint0_linear_221_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_221_10"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>',
  '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 47.4235C0 38.0237 6.53608 29.9057 15.7703 28.1488C36.4827 24.2081 73.3424 18 100 18C126.658 18 163.517 24.2081 184.23 28.1488C193.464 29.9057 200 38.0237 200 47.4235V150.374C200 159.424 193.931 167.333 185.12 169.396C164.683 174.181 127.351 181.934 100 181.934C72.6487 181.934 35.3172 174.181 14.8798 169.396C6.06883 167.333 0 159.424 0 150.374V47.4235Z" fill="url(#paint0_linear_105_435)"/> <defs> <linearGradient id="paint0_linear_105_435" x1="100" y1="18" x2="100" y2="181.934" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> </defs> </svg>',
];

const images = imagesUrl.map((url, index) => (
  <div key={index} className='h-full w-full relative'>
    <Image
      src={url}
      alt='Steph’s Beauty Bar Logo'
      fill
      style={{ objectFit: "cover" }}
    />
  </div>
));

const Section = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={inView ? "show" : "hidden"}
      className='relative w-full h-full  flex flex-col justify-between items-center md:py-8 py-2 gap-5'
    >
      <motion.div
        className='flex flex-col h-full item-center justify-between max-w-[2000px] content-center gap-4 md:gap-7 flex-nowrap'
        variants={itemVariants}
      >
        <motion.div
          className='text-center w-full max-w-[1600px] relative font-magtis lg:text-9xl md:text-8xl text-7xl h-auto '
          variants={itemVariants}
        >
          <h1>Unviel Your Glow</h1>
        </motion.div>
        <motion.div
          className='text-center text-lg md:text-2xl break-words whitespace-pre-wrap w-full'
          variants={itemVariants}
        >
          <p>
            Unleash your inner radiance with Steph’s Beauty Bar, the ultimate
            destination for premium eyebrow lamination and lip filler services.
            Experience the liberation of your natural beauty, magnified.
          </p>
        </motion.div>
        <motion.div
          className='flex items-center justify-center w-full h-min md:flex-row flex-col md:gap-5 gap-3 flex-nowrap content-center'
          variants={itemVariants}
        >
          <a
            className='btn btn-outline btn-block md:btn-wide text-secondary hover:bg-secondary hover:text-white hover:border-secondary font-normal'
            href='https://stephsbeautybar.setmore.com'
          >
            Book Now
          </a>
          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='btn btn-outline btn-block text-secondary md:btn-wide hover:bg-secondary hover:text-white hover:border-secondary font-normal'
          >
            Our Services
          </ScrollLink>
        </motion.div>
      </motion.div>
      <motion.div
        className='relative w-full h-full flex  justify-center items-center'
        variants={itemVariants}
      >
        <Ticker duration={20} className='z-0 flex h-full relative '>
          {images.map((item, index) => (
            <div
              key={index}
              className='aspect-square  flex flex-grow justify-center mx-3 h-full md:w-96 max-w-96 w-64 rounded-3xl bg-opacity-60 bg-white overflow-hidden'
            >
              {item}
            </div>
          ))}
        </Ticker>
        <div className='absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-primary to-transparent' />
        <div className='absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-primary to-transparent' />
      </motion.div>
    </motion.section>
  );
};

export default Section;
