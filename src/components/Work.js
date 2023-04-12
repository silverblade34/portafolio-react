import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div>
        <div>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work </h2>
            <p className='max-w-sm mb-16'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.  </p>
              <button className='btn btn-sm text-sm'>View all projects</button>
          </div>
          {/* Image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1}/>
            {/* pretitle */}
            <div>UI/UX Design</div>
            {/* title */}
            <div>
              <span>Project title</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
