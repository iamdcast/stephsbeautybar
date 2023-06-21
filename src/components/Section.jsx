"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";

const imagesUrl = [
  "/ticker/IMG_5737.JPEG",
  "/ticker/582BBE61-E7F4-47A0-A2C4-6CB6F81948A8.JPEG",
  "/ticker/IMG_5743.JPEG",
  "/ticker/IMG_7923.JPEG",
  "/ticker/IMG_8343.JPEG",
];

const maskShapes = [
  '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_238_1284)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z" fill="url(#paint0_linear_238_1284)"/> </g> <defs> <linearGradient id="paint0_linear_238_1284" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_238_1284"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>',
  '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_221_10)"> <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z" fill="url(#paint0_linear_221_10)"/> </g> <defs> <linearGradient id="paint0_linear_221_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_221_10"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>',
  '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 47.4235C0 38.0237 6.53608 29.9057 15.7703 28.1488C36.4827 24.2081 73.3424 18 100 18C126.658 18 163.517 24.2081 184.23 28.1488C193.464 29.9057 200 38.0237 200 47.4235V150.374C200 159.424 193.931 167.333 185.12 169.396C164.683 174.181 127.351 181.934 100 181.934C72.6487 181.934 35.3172 174.181 14.8798 169.396C6.06883 167.333 0 159.424 0 150.374V47.4235Z" fill="url(#paint0_linear_105_435)"/> <defs> <linearGradient id="paint0_linear_105_435" x1="100" y1="18" x2="100" y2="181.934" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> </defs> </svg>',
];

const images = imagesUrl.map((url, index) => (
  <div key={index} className='h-full w-full relative bg-cli'>
    <Image src={url} alt='Steph’s Beauty Bar Logo' fill />
  </div>
));
const imageFilter = [];

const Section = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{ opacity: 1 }}
      className='w-full h-full flex flex-col items-center py-8 gap-3'
    >
      <div className='text-center'>
        <h1 className=' font-serif text-9xl'>UNVIEL YOUR GLOW</h1>
      </div>
      <div className='text-center px-44'>
        <p className=' text-2xl'>
          Unleash your inner radiance with Steph’s Beauty Bar, the ultimate
          destination for premium eyebrow lamination and lip filler services.
          Experience the liberation of your natural beauty, magnified.
        </p>
      </div>
      <div className='flex items-center h-fit gap-5 py-5'>
        <a
          className='btn btn-outline btn-wide text-secondary hover:bg-secondary hover:text-white hover:border-secondary font-normal'
          href='https://stephsbeautybar.setmore.com'
        >
          Book Now
        </a>
        <a className='btn btn-outline text-secondary btn-wide hover:bg-secondary hover:text-white hover:border-secondary font-normal'>
          Our Services
        </a>
      </div>
      <div className='flex w-full h-full justify-center items-center'>
        <Ticker duration={20} className='z-0'>
          {images.map((item, index) => (
            <div
              key={index}
              className='aspect-square min-h-fit m-3 w-96 rounded-3xl bg-opacity-60 bg-white overflow-hidden'
            >
              {item}
            </div>
          ))}
        </Ticker>
        <div className='absolute bottom-0 left-0 h-1/2 w-1/6 bg-gradient-to-r from-primary to-transparent mx-36' />
        <div className='absolute bottom-0 right-0 h-1/2 w-1/6 bg-gradient-to-l from-primary to-transparent mx-36' />
      </div>
    </motion.section>
  );
};

export default Section;
