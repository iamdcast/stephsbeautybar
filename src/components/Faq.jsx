import React from "react";

const Faq = () => {
  return (
    <aside className=' flex flex-col min-w-screen w-full h-screen lg:py-14 py-5 md:py-12 md:px-24 px-5'>
      <div className='w-full h-fit font-magtis md:text-6xl text-5xl flex item-center py-5'>
        <h2>Have Questions?</h2>
      </div>
      <div className='h-full w-full max-w-full flex flex-col gap-5'>
        <div className='h-min w-full flex'>
          <div className='h-full w-full flex gap-5'>
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
          </div>
        </div>
        <div className='h-full w-full flex'>
          <div className='w-full flex flex-col'>
            <h6>3</h6>
          </div>
          <div className='w-full flex flex-col'>
            <h7>4</h7>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Faq;
