import React, { useEffect, useRef, useState } from 'react';
import './TestiCarousel.css';

import Richard from "../images/testimonials/richard.jpeg"
import Airrick from "../images/testimonials/airrick.jpeg"
import Eunsong from "../images/testimonials/eunsong.jpeg"

const testimonials = [
    {
        quote: "Yooran is an exceptional student, a fast learner who quickly grasps complex concepts and applies them with ease. Her work exemplifies both her technical abilities and creativity, showcasing a keen eye for detail and innovative thinking. She consistently goes above and beyond to support others, fostering a collaborative and positive learning environment. I am certain she will excel in any future endeavors she pursues in the field of web development.",
        name: "Richard Te",
        title: "Instructor, BCIT",
        image: Richard
    },
    {
        quote: 'Yooran has been an exceptional student across all the terms I have taught her in the New Media and Web Development program here at BCIT. As a primarily coding and portfolio instructor, I have consistently watched her go above and beyond the requirements in building strong, scalable projects. Beyond technical skills, Yooran’s inquisitive attitude is a key component to her success. Often, as I worked one-on-one with her on her code, she would ask, "Why though?" to new concepts she was applying and new challenges she was overcoming. This inquisitive nature and her commitment to understanding what she builds has led her to take on larger projects, teach herself new concepts, and advance her learning in our program. I have no doubt Yooran will be successful in any team she joins.',
        name: "Airrick Dunfield",
        title: "Instructor, BCIT",
        image: Airrick
    },
    {
        quote: "Yooran is not only highly skilled in development but also a great mood-maker who brightens up the atmosphere around her. She is always considerate and has a kind nature that prioritizes the well-being of others. In the team project, I worked on with her, I was able to learn detailed aspects of development, and we could freely exchange ideas and collaborate effectively. Moreover, she consistently shows a willingness to upgrade her development skills by adopting and mastering new technologies. Yooran is an excellent developer who finds solutions by exploring various examples when she has questions.",
        name: "Eunsong Choi",
        title: "Graphic Design Student, BCIT",
        image: Eunsong 
    }
  ];
  const items = [
    { p: "Yooran is a standout talent in frontend development. Their passion, problem-solving skills, and proactive approach make them a valuable asset. With their technical prowess and collaborative spirit, they're destined for success in the field.", person: 'Richard', status:"BCIT Instructor" },
    { p: "Their dedication, creativity, and ability to tackle complexity make them a top student. I have no doubt they'll excel in their future endeavors.", person: 'Kimia Ashrafi', status:"Student" },
    { p: "Having witnessed Yooran's journey in frontend development, I'm truly impressed. Their knack for problem-solving and passion for coding set them apart. With their drive and skills, success is inevitable.", person: 'Eunsong Choi', status:"Student" },
    { p: "Having witnessed Yooran's journey in frontend development, I'm truly impressed. Their knack for problem-solving and passion for coding set them apart. With their drive and skills, success is inevitable.", person: 'Eunsong Choi', status:"Student" },
    { p: "Having witnessed Yooran's journey in frontend development, I'm truly impressed. Their knack for problem-solving and passion for coding set them apart. With their drive and skills, success is inevitable.", person: 'Eunsong Choi', status:"Student" },
    { p: "Having witnessed Yooran's journey in frontend development, I'm truly impressed. Their knack for problem-solving and passion for coding set them apart. With their drive and skills, success is inevitable.", person: 'Eunsong Choi', status:"Student" },
  ];
const TestiCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const resetAnimations = () => {
    const items = document.querySelectorAll('.item');
    const btns = document.querySelectorAll('.btn');
    for (let i = 0; i < items.length; i++) {
      btns[i].classList.remove('expand');
      items[i].classList.remove('animation');
    }
  };

  const animate = (index) => {
    const items = document.querySelectorAll('.item');
    const btns = document.querySelectorAll('.btn');
    btns[index].classList.add('expand');
    items[index].classList.add('animation');
  };

  const scrollTo = (index) => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-index * sliderRef.current.offsetWidth}px)`;
    }
    resetAnimations();
    animate(index);
    setActiveIndex(index);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollTo(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollTo(newIndex);
  };

  useEffect(() => {
    animate(0);
  }, []);

  return (
    <main className=' flex flex-col justify-center items-center overflow-hidden gap-y-10 '>

      {/* carousel */}
      <ul className="slider w-10/12 xl:w-1/2 flex  items-center gap-x-4 " ref={sliderRef}>
        {testimonials.map((testimonial, index) => (

          <li className="item flex flex-col-reverse lg:flex-row items-center bg-white rounded-2xl py-4 gap-y-4  lg:px-8 xl:h-[26rem]" key={index}>
            
            <div className="testimonial lg:pr-10">
              <p className='text-sm md:text-base xl:text-lg'>"{testimonial.quote}"</p>
              <p className='xl:text-xl'>{testimonial.name}</p>
              <p className='xl:text-base'>{testimonial.title}</p>
            </div>
            
            <img className="image z-10  w-1/5 object-cover" src={testimonial.image} alt={`${testimonial.name}'s testimonial`} />
          
          </li>

        ))}
      </ul>

      {/* button */}
      <nav className="navigation flex items-center">
        <button className="nav-btn bg-blue cursor-pointer text-white px-4 rounded-full mr-4 xl:px-5 xl:text-lg hover:bg-gray" onClick={handlePrev}>Prev</button>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`btn bg-gray w-2 h-2  mx-0.5 rounded-full ${index === activeIndex ? 'w-6' : ''} `}
            data-index={index}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
        <button className="nav-btn bg-blue cursor-pointer text-white  px-4 rounded-full ml-4 xl:px-5 xl:text-lg hover:bg-gray" onClick={handleNext}>Next</button>
      </nav>
    </main>
  );
};


export default TestiCarousel;
