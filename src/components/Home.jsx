// src/components/Home.js
import React from 'react';
import Navigation from './Navigation';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import ComputersCanvas from './Computers';
import "./Home.css"
import { slideInFromRight, slideInFromTop } from '../utils/motion';
import { motion } from 'framer-motion';

function Home() {
  const [typeEffect] =useTypewriter({
    words:['Web Developer','Frontend Developer','3D developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })
  return (
    <div className=' w-full h-screen relative flex flex-col min-h-screen items-center overflow-hidden'>
      <img src="https://static.vecteezy.com/system/resources/previews/001/987/555/original/abstract-technology-futuristic-hexagon-overlapping-pattern-with-blue-light-effect-on-dark-blue-background-free-vector.jpg" className='-z-50 absolute w-full h-screen '/>
      
      <motion.div
      initial="hidden"
      animate="visible"
      className=' flex flex-col md:flex-row w-full h-screen  z-50'>
        {/* left section */}
        <div className='h-[25%] md:w-[50%] md:h-screen flex  items-center justify-center  md:p-6'>
          <motion.div 
          variants={slideInFromTop}
          className=' absolute top-2 left-2 md:left-[3%] md:top-[25%] '>
              <h1 className='text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 '>Hi,I'm<span>V</span><span>A</span><span>N</span><span>S</span><span>H</span><span>I</span><span>K</span><span>A</span></h1>
              <p className='text-white font-serif text-[26px] lg:text-[32px] mt-4'>I'm a<span className='font-bold text-violet-400 ml-[5px]'> {typeEffect}</span></p>
          </motion.div>
        </div>
        
        {/* right section */}
        <motion.div 
        variants={slideInFromRight(0.5)}
        className='w-full h-[75%] md:w-[50%] md:h-screen flex items-center justify-center relative '>
          <div className='w-full md:absolute md:left-30 '>
            <Navigation />
            <div className='w-full h-screen absolute -top-11 sm:-top-14 '>
            <ComputersCanvas/>
            </div>
          </div>

          
        </motion.div>
        
      </motion.div>
    </div>
  );
}

export default Home;
