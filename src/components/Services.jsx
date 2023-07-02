"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const lineAnim = {
    hidden: { width: "0%" },
    show: { width: "100%", transition: { duration: 1 } },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={inView ? "show" : "hidden"}
      className='h-full w-full text-primary py-5 bg-secondary'
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
        className=' box-border flex-shrink-0 w-full h-min flex flex-col justify-center items-center lg:p-14 p-5 md:p-12 relative content-start md:content-center flex-nowrap gap-10'
      >
        <motion.div
          variants={fadeIn}
          className=' flex-shrink-0 w-full h-auto whitespace-pre-wrap max-w-screen relative  md:text-6xl text-5xl font-magtis text-left'
        >
          <h1 className=''>Our Amazing Services</h1>
        </motion.div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "show" : "hidden"}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 font-sans'
        >
          <motion.div variants={fadeIn} className=''>
            <div className='flex items-center gap-3 text-2xl font-medium lg:text-3xl'>
              <p className='uppercase leading-snug'>01</p>
              <h3 className=' leading-10'>Brow Lamination</h3>
            </div>
            <span className='text-base font-light'>
              Achieve fuller, perfectly groomed brows that stay in place for up
              to 8 weeks.
            </span>
          </motion.div>
          <motion.div
            variants={lineAnim}
            className='w-full h-0.5 bg-primary md:hidden md:absolute'
          />
          <motion.div variants={fadeIn} className=''>
            <div className='flex items-center gap-3 font-medium text-2xl lg:text-3xl'>
              <div className=' uppercase leading-snug'>02</div>
              <div className='leading-10'>Brow Tinting</div>
            </div>
            <div className='text-base font-light'>
              Enhance your natural eyebrows with our long-lasting, smudge-proof
              tint.
            </div>
          </motion.div>
          <motion.div
            variants={lineAnim}
            className='w-full h-0.5 bg-primary hidden md:block'
          />
          <motion.div variants={lineAnim} className='w-full h-0.5 bg-primary' />
          <motion.div variants={fadeIn} className=''>
            <div className='flex items-center gap-3 font-medium text-2xl lg:text-3xl'>
              <div className='uppercase leading-snug'>03</div>
              <div className='leading-10'>Lip Fillers</div>
            </div>
            <div className='text-base font-light'>
              Add volume and definition to your lips for a stunning and youthful
              pout.
            </div>
          </motion.div>
          <motion.div
            variants={lineAnim}
            className='w-full h-0.5 bg-primary md:hidden md:absolute'
          />
          <motion.div variants={fadeIn} className=''>
            <div className='flex items-center gap-3 font-medium text-2xl lg:text-3xl'>
              <div className='uppercase leading-snug'>04</div>
              <div className=' leading-10'>Easy Booking</div>
            </div>
            <div className='text-base font-light '>
              Schedule your treatment online in a few quick clicks and prepare
              for fabulous results.
            </div>
          </motion.div>
          <motion.div variants={lineAnim} className='w-full h-0.5 bg-primary' />
          <motion.div
            variants={lineAnim}
            className='w-full h-0.5 bg-primary hidden md:block'
          />
          <motion.div variants={fadeIn} className=''>
            <div className='flex items-center gap-3 font-medium text-2xl lg:text-3xl'>
              <div className='uppercase leading-snug'>05</div>
              <div className='leading-10'>Certified Experts</div>
            </div>
            <div className='text-base font-light '>
              Our skilled professionals use the latest techniques to deliver
              stunning results.
            </div>
          </motion.div>
          <motion.div
            variants={lineAnim}
            className='w-full h-0.5 bg-primary md:hidden md:absolute'
          />
          <motion.div variants={fadeIn} className=''>
            <div className='flex items-center gap-3 font-medium text-2xl lg:text-3xl'>
              <div className='uppercase leading-snug'>06</div>
              <div className=' leading-10'>Satisfaction Guaranteed</div>
            </div>
            <div className=' text-base font-light '>
              We’re more than just beauty: we’re committed to helping you feel
              fabulous.
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
        className='h-min py-10 flex-col justify-center items-center gap-2.5 flex lg:p-14 p-5 md:p-12'
      >
        <motion.div
          variants={fadeIn}
          className='flex-shrink-0 w-full h-auto whitespace-pre-wrap max-w-screen relative  md:text-6xl text-5xl font-magtis text-center'
        >
          <h2 className=''>Ready Yet?</h2>
        </motion.div>
        <motion.span
          variants={fadeIn}
          className='text-base font-light text-center '
        >
          Don’t wait another day to elevate your beauty game. <br />
          Book an appointment today and let the magic happen.
        </motion.span>
        <motion.div
          variants={fadeIn}
          className='flex items-center justify-center w-full h-min md:flex-row flex-col my-5 flex-nowrap content-center'
        >
          <a
            className='btn btn-outline btn-block md:btn-wide text-primary hover:bg-primary hover:text-secondary hover:border-secondary font-normal'
            href='https://stephsbeautybar.setmore.com'
          >
            Book Now
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
