import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact, faPhp, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';

const iconArr = [
  faHtml5, faCss3Alt, faSquareJs, faReact, faPhp, faNode, faGithub
];

const SkillCarousel = () => {
  return (
    <div className='overflow-hidden w-96 md:w-[30rem] lg:w-[40rem] xl:w-[48rem] h-24 relative flex justify-center items-center'>
      <div 
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 10%,  rgba(255,255,255,0.8) 70%, rgba(255,255,255,0.1) 100%)',
        }}
        className='absolute -left-3 bg-white blur w-14 xl:w-20 h-full z-10'
      ></div>
      <div 
        style={{
          background: 'linear-gradient(to left, rgba(255,255,255,1) 10%,  rgba(255,255,255,0.8) 70%, rgba(255,255,255,0.1) 100%)',
        }}
        className='absolute -right-3 bg-white blur w-14 xl:w-20 h-full z-10'
      ></div>
      <div 
        className='logos absolute left-0 flex justify-around text-blue text-4xl w-full md:text-5xl 2xl:text-6xl animate-[moveLogo_7s_linear_infinite]'
      >
        {iconArr.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} className='skills'/>
        ))}
      </div>
      <div 
        className='logos absolute left-96 md:left-[480px] lg:left-[640px] xl:left-[768px] flex justify-around text-blue w-full text-4xl md:text-5xl 2xl:text-6xl animate-[moveLogo_7s_linear_infinite]'
      >
        {iconArr.map((icon, index) => (
          <FontAwesomeIcon key={index + iconArr.length} icon={icon} className='skills'/>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
