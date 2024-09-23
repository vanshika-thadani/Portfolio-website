import React from 'react';
import { Link } from 'react-router-dom';
import { BtnList } from '../data';
import useScreenSize from '../hooks/useScreenSize';

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  const radius = isLarge
    ? "calc(20vw - 1rem)"
    : isMedium
    ? "calc(25vw - 1rem)"
    : "calc(35vw - 1rem)";

  return (
    <div className='relative w-full h-screen flex  items-center justify-center z-50 '>
      {size >= 480 ? (
        <div className="w-max flex items-center justify-center  relative hover:pause animate-spin-slow group">
          {BtnList.map((btn, index) => {
            const angleRad = (index * angleIncrement * Math.PI) / 180;
            const x = `calc(${radius} * ${Math.cos(angleRad)})`;
            const y = `calc(${radius} * ${Math.sin(angleRad)})`;

            return (
              <div
                key={btn.label}
                className='absolute cursor-pointer z-50'
                style={{
                  transform: `translate(${x}, ${y})`,
                  color: 'white',
                }}
              >
                <Link to={btn.link} className='rounded-full flex items-center justify-center border border-solid backdrop-blur-[6px] hover:shadow-glass-sm'>
                  <span className='relative w-14 h-14 p-5 group-hover:pause'>
                    {btn.icon}
                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 text-sm rounded-md shadow-lg whitespace-nowrap'>
                      {btn.label}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='flex w-full' >
          <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative group xs:hidden">
            {BtnList.slice(0, Math.ceil(BtnList.length / 2)).map((btn, index) => (
              <div key={btn.label} className='cursor-pointer text-white z-50'>
                <Link to={btn.link} className='rounded-full flex items-center justify-center border border-solid backdrop-blur-[6px] hover:shadow-glass-sm text-white'>
                  <span className='relative w-14 h-14 p-5 group-hover:pause'>
                    {btn.icon}
                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 text-sm rounded-md shadow-lg whitespace-nowrap'>
                      {btn.label}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden">
            {BtnList.slice(Math.ceil(BtnList.length / 2), BtnList.length).map((btn, index) => (
              <div key={btn.label} className='cursor-pointer z-50 text-white'>
                <Link to={btn.link} className='rounded-full flex items-center justify-center border border-solid backdrop-blur-[6px] hover:shadow-glass-sm text-white'>
                  <span className='relative w-14 h-14 p-5 group-hover:pause'>
                    {btn.icon}
                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 text-sm rounded-md shadow-lg whitespace-nowrap'>
                      {btn.label}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
