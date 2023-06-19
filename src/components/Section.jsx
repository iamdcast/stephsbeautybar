"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";

const imagesUrl = [
  "/ticker/IMG_5737.JPEG",
  "/ticker/582BBE61-E7F4-47A0-A2C4-6CB6F81948A8.JPEG",
];

const newImage = () => {
  return (
    <Image
      src={imagesUrl.map(value)}
      alt='Steph’s Beauty Bar Logo'
      width={200}
      height={200}
    />
  );
};

const imageFilter = [];

const images = ["11", "2"];

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
      <div className='flex w-full h-full justify-center items-center border border-secondary '>
        <Ticker duration={5}>
          {images.map((item, index) => (
            <div
              key={index}
              className=' aspect-square min-h-fit m-3 w-96 rounded-3xl border-secondary border bg-opacity-60 bg-white'
              style={{
                backgroundColor: item,
              }}
            />
          ))}
        </Ticker>
      </div>
    </motion.section>
  );
};

export default Section;
