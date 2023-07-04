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
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 5 } },
};

const Faq = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
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
        variants={itemVariants}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
      >
        <motion.div className='h-full w-full flex items-center justify-center'>
          <motion.div className='h-full w-full flex gap-5 max-w-5xl flex-col md:flex-row  '>
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
          </motion.div>
        </motion.div>
        <motion.div className='h-full w-full flex items-center justify-center'>
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
      <div className='flex h-full w-full'></div>
    </motion.aside>
  );
};

export default Faq;
