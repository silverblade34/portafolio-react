import React from 'react';
// Countup
import CountUp from 'react-countup';
// Intersection observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  return (
    <section className='section px-5' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
         lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mt-12 bg-about bg-contain bg-no-repeat h-[690px]
          mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
           className='flex-1'>
            <h2 className='h2 text-white'>Acerca de mí</h2>
            <h3 className='h3 mb-4'>Desarrollador FullStack Jr con 1 año de experiencia</h3>
            <p>
            Soy un estudiante de Ingeniería de software, curso el 9 ciclo de mi carrera. Me apasiona el desarrollo, y disfruto trabajar tanto en el frontend como en el backend. Si bien tengo experiencia en ambos,
             siento una especial predilección por el backend utilizando Python, Flask, Node.js, Express.js, etc.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-10'>
              <div >
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Año de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  +
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Proyectos <br />
                  Completados
                </div>
              </div>
            </div>
            <motion.div
              variants={fadeIn('up', 0.6)} initial='hidden'
              whileInView={'show'} viewportince={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center 
          mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contáctame</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
