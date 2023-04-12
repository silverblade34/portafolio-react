import React from 'react';
import Image from '../assets/michellavatar.png'
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] px-5 flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)} initial='hidden'
            whileInView={'show'} viewportince={{ once: false, amount: 0.7 }}
            className='text-[50px] font-bold leading-[0.8] lg:text-[90px]'>
            MARCOS <span>PACHECO</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)} initial='hidden'
            whileInView={'show'} viewportince={{ once: false, amount: 0.7 }}
            className='mb-6 text-[32px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Soy </span>
            <TypeAnimation sequence={[
              'Desarrollador Full Stack',
              2000,
              'Fotógrafo',
              2000
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)} initial='hidden'
            whileInView={'show'} viewportince={{ once: false, amount: 0.7 }}
            className='mb-8 text-[15px] md:text-[20px] lg:text-[20px] max-w-lg mx-auto lg:mx-0'>
            Soy un apasionado por la tecnología y la programación. Me encanta trabajar en proyectos desafiantes y estoy constantemente aprendiendo nuevas habilidades y tecnologías para mejorar mis habilidades.
          </motion.p>
          <motion.div 
          variants={fadeIn('up', 0.6)} initial='hidden'
          whileInView={'show'} viewportince={{ once: false, amount: 0.7 }}
          className='flex max-w-max gap-x-6 items-center 
          mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg btn-sm text-sm'>Contáctame</button>
            <a href='#' className='text-gradient btn-link text-sm'>Mi portafolio</a>
          </motion.div>
          {/* Redes sociales */}
          <motion.div
           variants={fadeIn('up', 0.7)} initial='hidden'
           whileInView={'show'} viewportince={{ once: false, amount: 0.7 }}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto
         lg:mx-0'>
            <a href='#'>
              <FaGithub />
            </a>
            <a href='#'>
              <FaDribbble />
            </a>
            <a href='#'>
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
        variants={fadeIn('down', 0.8)} initial='hidden'
        whileInView={'show'}
        className='hidden lg:flex flex-1 max-w-[320px] 
        lg:max-w-[475px]'>
          <img src={Image} />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
