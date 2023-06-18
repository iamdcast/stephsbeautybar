"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='w-full h-fit border  flex flex-col items-center py-8 gap-3'
    >
      <div className='text-center'>
        <h1 className=' font-serif text-9xl'>UNVIEL YOUR GLOW</h1>
      </div>
      <div className='text-center px-44'>
        <p className=' text-2xl'>
          Unleash your inner radiance with Steph’s Beauty Bar, the pinnacle
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
    </motion.section>
  );
};

export default Section;
