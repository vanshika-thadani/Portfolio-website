import React from 'react'
import  "./About.css"
import { slideInFromLeft, slideInFromTop } from '../utils/motion'
import { inView, motion } from 'framer-motion'


const About = () => {
  return (
    <div>
      <img src="https://static.vecteezy.com/system/resources/previews/002/196/227/large_2x/abstract-technology-futuristic-digital-concept-square-pattern-with-lighting-glowing-particles-square-elements-on-dark-blue-background-free-vector.jpg"  alt="bg-img-projects"  className=" fixed  -z-50 w-full h-full bg-cover bg-center bg-no-repeat " /> 
      <div className='relative w-full h-screen flex flex-col items-center justify-center'>
        <div className=' content absolute flex flex-col items-center text-center top-[20%] left-1/2  md:top-[70%] md:left-1/3 -translate-y-1/2 -translate-x-1/2 '>
        <h1 className=' text font-bold text-3xl  md:text-6xl text-white z-50' data-text="Vanshika Thadani">Vanshika Thadani</h1>
        <p className='font-normal text-lg text-gray-400'>Meet the traveller behind this portfolio</p>
        </div>

        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto "
          src="assets/public_encryption.webm"
        />
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto absolute top-[38%]">
          <img
            src="assets/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 z-30"
          />
          <img
            src="assets/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>
          <div className="w-full flex items-start justify-center absolute z-50">
        
      </div>
        </div>
      </div>

      <section className='p-10 md:p-20 w-full '>
        <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate={inView?"visible":"hidden"}
        className=' flex flex-col md:grid md:grid-cols-12 gap-8 w-full'>
          <motion.div 
          variants={slideInFromLeft(0.5)
          }
          className='custom-bg col-span-8 row-span-2 p-8 rounded-xl flex flex-col items-start justify-center'>
            <h2 className=' font-semibold text-2xl text-left w-full capitalize text-white'>Embark on a Journey Through the Stars with Me</h2>
            <p className='font-normal text-gray-300 '>Welcome, fellow digital pioneer! I'm your navigator through the ever-expanding frontier of web development, where code meets creativity. Armed with the power of HTML, CSS, and JavaScript, I chart courses across the digital universe, crafting immersive experiences that dazzle like supernovas. With Tailwind CSS, I forge adaptive designs that seamlessly flow across the cosmos, ensuring every creation is as responsive as it is radiant.In the domain of interactive applications, I wield React to construct dynamic, user-focused interfaces that are as intuitive as they are innovative. For those who crave a touch of the extraordinary, I deploy Three.js to bring forth stunning 3D visuals and immersive environments, transporting users to new dimensions.Join me as I continue to push the boundaries of technology, exploring uncharted territories in the digital cosmos. Whether you’re here to witness the future of web design or to embark on a collaborative mission, I invite you to explore my portfolio and discover how I fuse timeless expertise with cutting-edge innovation.</p>
          </motion.div>

          <div className=' custom-bg col-span-4 p-8 rounded-xl flex items-center justify-center text-black'>
            <p className='font-semibold w-full text-left text-5xl text-white'>2+ <sub className='font-semibold text-base'>years of experience</sub></p>
          </div>

          <div className='custom-bg col-span-4 p-8 rounded-xl flex items-center justify-center text-black'>
            <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=vanshika-thadani&hide_progress=false&theme=transparent&hide_border=true&title_color=ffffff&text_color=ffffff&text_bold=false' loading='lazy'/>
          </div>

          <div className='custom-bg col-span-full p-8 rounded-xl flex items-center justify-center text-black'>
            <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,discord,figma,github,html,react,redux,tailwind,firebase,linux,mysql,vscode' loading='lazy'/>
          </div>
        </motion.div>
      </section>
      
    </div>
  )
}

export default About;
