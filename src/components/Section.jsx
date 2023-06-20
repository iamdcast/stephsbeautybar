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

const images = imagesUrl.map((url, index) => (
  <div key={index} className='h-full w-full relative'>
    <Image
      src={url}
      alt='Steph’s Beauty Bar Logo'
      fill // this property will make the image to fill its parent div
      // this will ensure that the image's aspect ratio is preserved while it fills the parent div
    />
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
        <Ticker duration={15} className='z-0'>
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
