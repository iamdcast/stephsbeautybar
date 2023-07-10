"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
};

const Faq = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.aside
      className=' flex flex-col min-w-screen w-full md:h-screen h-min lg:py-14 py-3 md:py-5 md:px-24 px-5'
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={inView ? "show" : "hidden"}
    >
      <motion.div
        className='w-full h-fit font-magtis md:text-6xl text-5xl flex item-center py-5 justify-center'
        variants={itemVariants}
      >
        <h2 className='w-full max-w-5xl'>Have Questions?</h2>
      </motion.div>
      <motion.div
        className='h-full w-full max-w-full flex flex-col gap-5 justify-center items-center'
        variants={containerVariants}
      >
        <motion.div
          className='h-full w-full flex items-center justify-center'
          variants={itemVariants}
        >
          <div className='h-full w-full flex gap-5 max-w-5xl flex-col md:flex-row '>
            <div className='w-full flex flex-col font-sans'>
              <h4 className='text-2xl font-medium lg:text-3xl'>
                How long do treatments take?
              </h4>
              <p>
                For Brown Lamination, you can expect the results to last between
                6 to 8 weeks, while Brow Tint typically lasts for a period of 3
                to 4 weeks. Both treatments are smudge-proof, ensuring that you
                can enjoy long-lasting and well-defined eyebrows.
              </p>
            </div>
            <div className='w-full flex flex-col font-sans justify-center'>
              <h4 className='text-2xl font-medium lg:text-3xl max-h-16'>
                How soon can I book?
              </h4>
              <p className='h-full'>
                You can book your appointment instantly. Simply click on our
                &apos;Book Now&apos; button, which will display all available
                services. You will then have the opportunity to choose a date
                that suits you using our convenient calendar tool.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='h-full w-full flex items-center justify-center'
          variants={itemVariants}
        >
          <div className='h-full w-full flex gap-5 max-w-5xl flex-col md:flex-row '>
            <div className='w-full  flex flex-col font-sans'>
              <h5 className='text-2xl font-medium lg:text-3xl'>
                How long do lip fillers last?
              </h5>
              <p>
                The longevity of lip fillers varies and can last anywhere from 3
                to 12 months, with proper maintenance. Each individual&apos;s
                response to fillers can differ, so we recommend a consultation
                to discuss your personal expectations and care routine.
              </p>
            </div>
            <div className='w-full flex flex-col font-sans'>
              <h6 className='text-2xl font-medium lg:text-3xl'>
                Do you offer consultation?
              </h6>
              <p>
                Absolutely, we believe in the importance of understanding your
                beauty goals and requirements. That&apos;s why we offer
                complimentary consultations to discuss your needs and to answer
                any questions you may have about our services.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <footer class='footer bg-primary text-secondary flex items-center justify-center flex-col h-min md:py-5 py-3 md:px-24 px-5 '>
        <div class='h-full flex bottom-0'>
          <a href='https://www.instagram.com/_stephsbeautybar/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              class='fill-current'
            >
              <path d='M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z'></path>
              <circle cx='11.994' cy='11.979' r='3.003'></circle>
            </svg>
          </a>
        </div>
        <div class='flex h-full bottom-0 '>
          <p>Steph&apos;s Beauty Bar © 2023 - All right reserved</p>
        </div>
      </footer>
    </motion.aside>
  );
};

export default Faq;
