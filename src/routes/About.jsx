import React, {  useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faCss3Alt, faSquareJs, faReact, faPhp} from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const tl = useRef();

  useGSAP(() => {
    gsap.fromTo([".greet",".name"], { duration: 1, x: -100, opacity: 0.5 }, { duration: 1, x: 0, opacity: 1 });
    gsap.fromTo(".prjBtn", {opacity: 0.1 }, { duration: 1,  opacity: 1 });

    const underlines = gsap.utils.toArray('.underline');
    tl.current = gsap
      .timeline({
        repeat: -1
      })
      .to(underlines[0], { duration:1, width:"100%"})
      .to(underlines[1], { duration:1, width:"100%"})
    
    gsap.from("#about",{
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "100 bottom",
        end: "150 center",
        scrub: true,
        markers:true
      },
      xPercent:-100
    });

    gsap.from([".info",".info02"],{
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "150 bottom",
        end: "150 center",
        scrub: true,
        markers:true
      },
      yPercent:-100
    });

    gsap.from("#skill",{
      scrollTrigger: {
        trigger: "#skillSection",
        start: "100 bottom",
        end: "150 center",
        scrub: true,
        markers:true
      },
      xPercent:-100
    });
    gsap.from(".skills",{
      scrollTrigger: {
        trigger: "#skillSection",
        start: "150 bottom",
        end: "150 center",
        scrub: true,
        markers:true
      },
      yPercent:200
    });

    gsap.from("#value",{
      scrollTrigger: {
        trigger: "#valueSection",
        start: "100 bottom",
        end: "150 center",
        scrub: true,
        markers:true
      },
      xPercent:-100
    });

    gsap.from("#hobby",{
      scrollTrigger: {
        trigger: "#hobbySection",
        start: "100 bottom",
        end: "150 center",
        scrub: true,
        markers:true
      },
      xPercent:-100
    });

    gsap.to('#hobbySection', {
      scrollTrigger: {
        pin: '#hobbySection',
        end: '+=3000',
        pinSpacing: true,
      },
    });

    gsap.to("#hobby01", {
      scrollTrigger: {
        trigger: '#hobby01',
        toggleActions: 'play reverse play reverse',
        start: '0s',
        end: '+=1000s',
      },
      opacity: 1,
    });
    gsap.to("#hobby02", {
      scrollTrigger: {
        trigger: '#hobby02',
        toggleActions: 'play reverse play reverse',
        start: '+=1000s',
        end: '+=1000s',
      },
      opacity: 1,
    });
    gsap.to("#hobby03", {
      scrollTrigger: {
        trigger: '#hobby03',
        toggleActions: 'play reverse play reverse',
        start: '+=2000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

  })
    
  return (
    <div className='flex flex-col gap-y-56'>
      {/* Banner */}
      <section className='flex flex-col justify-center items-center gap-y-8 text-center pt-32 pb-10 md:grid md:grid-cols-2 '>
            <article className='flex flex-col items-center gap-y-6'>
              <p className='greet font-head'>Hi, my name is</p>
              <div  className='font-head'>
                  <h1 className='name font-black text-4xl'>Yooran Kim</h1>
                  <p className='prjBtn text-blue font-bold'>A Front-End Developer</p>
              </div>
              <div className='font-head text-m text-left'>
                  <p>I love<span className='relative'> CODING<span className='underline'></span></span></p>
                  <p>Because it has<span className='relative'> ANSWER<span className='underline'></span></span></p>
              </div>
              <button className='bg-blue h-10 w-1/4 rounded-full text-white transition ease-in-out hover:bg-gray cursor-pointer'>Project <FontAwesomeIcon icon={faChevronRight} /></button>
            </article>
            <div className='flex justify-center relative'>
              <img src="src/images/headShot.png" alt="Head Shot" className='w-1/2 z-10'/>
              <div className='blob w-2/3 h-4/5 absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-lightBlue to-blue shadow-lg shadow-blue-500 animate-[morpheus_8s_ease-in-out_infinite]'></div>
            </div>
        </section>

      {/* About Me */}
      <section id='aboutSection' className='flex flex-col items-center gap-y-6'>
        <h2 id="about" className='font-head font-black text-2xl'>About Me</h2>

        <div className='flex flex-col items-center gap-y-6 md:flex-row md:w-8/12 md:items-start'>
          <article className='flex text-center gap-x-4 md:flex-col md:gap-y-12 md:w-1/4 md:text-right'>
            <div className='overflow-hidden'>
              <p className='info text-gray'>Born</p>
              <strong className='info02 text-lg'>June 23, 1998</strong>
            </div>
            <div className='overflow-hidden'>
              <p className='info text-gray'>Nationality</p>
              <strong className='info02 text-lg'>South Korea</strong>
            </div>
            <div className='overflow-hidden'>
              <p className='info text-gray'>MBTI</p>
              <strong className='info02 text-lg'>ISTJ</strong>
            </div>
          </article>
          <div className='flex items-center justify-center md:w-6 md:h-96'>
              <p className='border-dashed border-r-2 border-lightBlue  h-full md:transform  md:h-full'></p>
          </div>
          <article className='w-11/12'>
            <h3 className='font-black'>I have an unlimited love for <span className='text-red'>CODING</span> because, to me, it's not just lines of text; it's the pursuit of <span className='text-red'>ANSWER</span>.</h3>
            <br/>
            <p>
              As a front-end developer, I thrive on the challenge of transforming concepts into tangible, interactive solutions. Coding isn't just a skill for me; it's a journey where I put together all the knowledge that I have stacked and discover the answers with the insight I've honed. Coding is always wait for me at the finish line with the answer.
              <br/><br/>In addition to my technical skills, I'm always open to talking and sharing other solutions, new technologies and design trends with people to enhance my skill set. I am interested and curious about new knowledge because it will expand my point of view and allow me to find more ways to find a solution. To do that, I usually go to seminars and workshops to meet people who are in the same industry.
              <br/><br/>Let's embark on this coding journey together and create meaningful, seamless, and visually appealing :)
            </p>        
          </article>
        </div>
        <button className='bg-red text-white h-10 w-1/4 rounded-full transition duration-200 ease-in-out hover:bg-gray'>Resume <FontAwesomeIcon icon={faChevronRight} /></button>
      </section>

      {/* Skills */}
      <section id='skillSection' className='flex flex-col items-center gap-y-8'>
          <h2 id='skill' className='font-head font-black text-2xl'>Skills</h2>
          <div className='overflow-hidden grid grid-cols-5 gap-4 text-blue text-4xl md:text-5xl'>
            <FontAwesomeIcon icon={faHtml5} className='skills'/>
            <FontAwesomeIcon icon={faCss3Alt} className='skills'/>
            <FontAwesomeIcon icon={faSquareJs} className='skills'/>
            <FontAwesomeIcon icon={faReact}  className='skills'/>
            <FontAwesomeIcon icon={faPhp} className='skills'/>
          </div>
      </section>

      {/* Values */}
      <section id='valueSection' className='flex flex-col items-center gap-y-8 md:gap-y-14'>
          <h2 id="value" className='font-head font-black text-2xl text-center'>Values</h2>
          <article className='flex flex-col w-11/12 items-center justify-center md:flex-row md:gap-x-8'>
            <h3 className='text-red text-center text-xl font-black mb-4'>"WHY?"</h3>
            <div>
              <p>I tend to ask <span className='text-red'>"WHY"</span> to everything.
              <br/>Whatever I see and hear, in my mind, I think <span className='text-red'>"WHY?"</span>
              <br/>Consequently, all my values come from <span className='text-red'>"WHY?"</span></p>
            </div>
          </article>
          <article className='w-11/12 flex flex-col gap-y-8 md:flex-row md:w-8/12 md:gap-x-8'>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Logical Thinking</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> did I make that decision?</p>
              <p>
              Questioning the reasons behind actions, decisions, or beliefs fosters critical thinking skills by prompting to evaluate information critically. It encourages to assess the validity, reliability, and relevance of information before forming conclusions or making decisions.
              </p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Efficient</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> is this needed?</p>
              <p>
                Through questioning, it enables to uncover inefficiencies, bottlenecks, and redundancies that may be hindering productivity or effectiveness. This allows to streamline workflows, eliminate unnecessary steps, and allocate resources more efficiently.
              </p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Problem-Solving</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> does this happen?</p>
              <p>
                Understanding why something occurred enables to develop targeted and sustainable solutions. By addressing the root cause, rather than merely treating symptoms, I can implement strategies that are more likely to resolve the problem effectively in the long term.
              </p>
            </div>
          </article>
      </section>

      {/* Hobbies */}
      <section id='hobbySection' className='flex flex-col gap-y-8 items-center mb-40'>
        <h2 id='hobby' className='font-head font-black text-2xl text-center'>Hobbies</h2>
        <article className='w-11/12 md:w-8/12'>
          <p>
          Beyond coding, in my free time, I thrive on diverse interests that keep life exciting and balanced between as a developer and as myself.
          <br/><br/>Also, I find solace and inspiration in various hobbies that complement my passion for front-end development. Here are a few activities that fuel my creativity and balance.
          </p>
        </article>
        <article className='md:w-8/12 relative'>
          <div id='hobby01' className="absolute opacity-0 bg-[url('src/images/hobby-cycle.jpg')] bg-cover bg-center py-10 px-4 h-full w-full md:h-80 md:flex md:justify-center md:items-center">
            <p className='text-white z-50 md:w-11/12'>
              <span className='text-xl'>Cycling</span> is not just a way to stay active; it's my therapy, exploring new routes and enjoying the beauty of nature. The feeling of the wind in my hair and the thrill of riding the open road helped me refresh. It’s one of my favorite ways to release my stress and pressure to have space in my mind.
            </p>
            <div className='absolute -inset-0 bg-black opacity-30'></div>
          </div>
          <div id='hobby02' className="absolute opacity-0 bg-[url('src/images/hobby-cycle.jpg')] bg-cover bg-center py-10 px-4 h-full w-full md:h-80 md:flex md:justify-center md:items-center">
            <p className='text-white z-50 md:w-11/12'>
              <span className='text-xl'>Video Game</span> is not just a way to stay active; it's my therapy, exploring new routes and enjoying the beauty of nature. The feeling of the wind in my hair and the thrill of riding the open road helped me refresh. It’s one of my favorite ways to release my stress and pressure to have space in my mind.
            </p>
            <div className='absolute -inset-0 bg-black opacity-30'></div>
          </div>
          <div id='hobby03' className="absolute opacity-0 bg-[url('src/images/hobby-cycle.jpg')] bg-cover bg-center py-10 px-4 h-full w-full md:h-80 md:flex md:justify-center md:items-center">
            <p className='text-white z-50 md:w-11/12'>
              <span className='text-xl'>Art</span> is not just a way to stay active; it's my therapy, exploring new routes and enjoying the beauty of nature. The feeling of the wind in my hair and the thrill of riding the open road helped me refresh. It’s one of my favorite ways to release my stress and pressure to have space in my mind.
            </p>
            <div className='absolute -inset-0 bg-black opacity-30'></div>
          </div>
        </article>

      </section>
    </div>
  )
}

export default About;