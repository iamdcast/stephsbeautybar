import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className='flex justify-center items-center h-32 min-w-screen px-10 gap-10'>
      <div className='flex flex-grow justify-start items-center relative'>
        <div className='flex-grow'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 2000 200'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='0'
              y1='100'
              x2='100%'
              y2='100'
              stroke='#F10E0E'
              stroke-width='20'
            />
          </svg>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src='/Logo/STEPHSBEAUTYBAR.png'
          alt='Steph’s Beauty Bar Logo'
          width={200}
          height={200}
          objectFit='contain'
        />
      </div>
      <div className='flex flex-grow justify-end items-center relative'>
        <div className='flex-grow'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 2000 200'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='0'
              y1='100'
              x2='100%'
              y2='100'
              stroke='#F10E0E'
              stroke-width='20'
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
