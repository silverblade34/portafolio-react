import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const services = [
  {
    name: 'BACKEND',
    description: 'Desarrollo de servicios backend, como Node.js, Express.js y MongoDB. Me encanta crear APIs robustas y escalables.',
    link: 'Ver Más'
  },
  {
    name: 'FRONTEND',
    description: 'Como desarrollador frontend, me encanta trabajar con tecnologías como React.js y Next.js para crear interfaces de usuario interactivas y elegantes',
    link: 'Ver Más'
  },
  {
    name: 'UX/UI',
    description: 'Me apasiona crear diseños de usuario efectivos y atractivos que maximicen la usabilidad y la accesibilidad.',
    link: 'Ver Más'
  }
]

const Services = () => {
  return <section className='section px-5 mt-10 lg:mt-0' id='services'>
    <div className='container mt-10 lg:mt-0 mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* Texto e imagen */}
        <motion.div
          variants={fadeIn('right', 0.3)} initial='hidden'
          whileInView={'show'} viewportince={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 mb-6'>¿Que realizó?</h2>
          <h3 className='h3 text-accent max-w-[455px] text-[18px] md:text-[21px] lg:text-[24px] mb-6 lg:mb-16'>"La tecnología suficiente es indistinguible de la magia"</h3>
          <button className='btn btn-sm'>Ver mi trabajo</button>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)} initial='hidden'
          whileInView={'show'} viewportince={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          <div>
            {services.map((service, index) => {
              const { name, description, link } = service
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href='#' className='text-gradient text-[15px] lg:text-[18px]'>{link}</a>
                  </div>
                </div>);
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
