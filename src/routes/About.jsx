import {  useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faCss3Alt, faSquareJs, faReact, faPhp} from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import headshot from "../images/headShot.png";
import hobby01 from "../images/hobby-cycle.jpg";
import hobby02 from "../images/hobby-game.jpeg";
import hobby03 from "../images/hobby-photo.jpeg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const tl = useRef();

  useGSAP(() => {

    const underlines = gsap.utils.toArray('#aboutUnder');
    tl.current = gsap
      .timeline({
        repeat: -1
      })
      .to(underlines[0], { duration:1, width:"110%"})
      .to(underlines[1], { duration:1, width:"110%"})
    

      let mm = gsap.matchMedia();

      mm.add("(max-width: 770px)", () => {
        gsap.from("#about",{
          scrollTrigger: {
            trigger: "#aboutSection",
            start: "100 bottom",
            end: "150 center",
            scrub: true,
          },
          xPercent:-100
        });
    
        gsap.from([".info",".info02"],{
          scrollTrigger: {
            trigger: "#aboutSection",
            start: "200 bottom",
            end: "150 center",
            scrub: true,
          },
          yPercent:-200
        });
    
        gsap.from("#skill",{
          scrollTrigger: {
            trigger: "#skillSection",
            start: "100 bottom",
            end: "150 center",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from(".skills",{
          scrollTrigger: {
            trigger: "#skillSection",
            start: "150 bottom",
            end: "150 center",
            scrub: true
          },
          yPercent:200
        });
    
        gsap.from("#value",{
          scrollTrigger: {
            trigger: "#valueSection",
            start: "150 bottom",
            end: "150 center",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from(".whyP",{
          scrollTrigger: {
            trigger: "#valueSection",
            start: "170 bottom",
            end: "150 center",
            scrub: true,
          },
          yPercent:-150
        });
    
        gsap.from(".whyA",{
          scrollTrigger: {
            trigger: "#valueSection",
            start: "400 bottom",
            end: "bottom bottom",
            scrub: true,
          },
          opacity:0
        });
    
        gsap.from("#hobby",{
          scrollTrigger: {
            trigger: "#hobbySection",
            start: "200 bottom",
            end: "center bottom",
            scrub: true,
          },
          xPercent:-100
        });
    
        gsap.to('#hobbySection', {
          scrollTrigger: {
            pin: '#hobbySection',
            end: '+=2400',
            pinSpacing: true,
          },
        });
    
        gsap.to("#hobby01", {
          scrollTrigger: {
            trigger: '#hobby01',
            toggleActions: 'play reverse play reverse',
            start: '-400s',
            end: '+=1200s',
          },
          opacity: 1,
        });
        gsap.to("#hobby02", {
          scrollTrigger: {
            trigger: '#hobby02',
            toggleActions: 'play reverse play reverse',
            start: '+=800s',
            end: '+=800s',
    
          },
          opacity: 1,
        });
        gsap.to("#hobby03", {
          scrollTrigger: {
            trigger: '#hobby03',
            toggleActions: 'play reverse play reverse',
            start: '+=1600s',
            end: '+=800s',
          },
          opacity: 1,
        });
      })   

      mm.add("(min-width: 769px)", () => {
        gsap.from("#about",{
          scrollTrigger: {
            trigger: "#aboutSection",
            start: "100 bottom",
            end: "150 center",
            scrub: true,
          },
          xPercent:-100
        });
    
        gsap.from([".info",".info02"],{
          scrollTrigger: {
            trigger: "#aboutSection",
            start: "200 bottom",
            end: "150 center",
            scrub: true,
          },
          yPercent:-200
        });
    
        gsap.from("#skill",{
          scrollTrigger: {
            trigger: "#skillSection",
            start: "100 bottom",
            end: "150 center",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from(".skills",{
          scrollTrigger: {
            trigger: "#skillSection",
            start: "150 bottom",
            end: "150 center",
            scrub: true
          },
          yPercent:200
        });
    
        gsap.from("#value",{
          scrollTrigger: {
            trigger: "#valueSection",
            start: "150 bottom",
            end: "150 center",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from(".whyP",{
          scrollTrigger: {
            trigger: "#valueSection",
            start: "170 bottom",
            end: "150 center",
            scrub: true,
          },
          yPercent:-150
        });
    
        gsap.from(".whyA",{
          scrollTrigger: {
            trigger: "#valueSection",
            start: "400 bottom",
            end: "bottom bottom",
            scrub: true,
          },
          opacity:0
        });
    
        gsap.from("#hobby",{
          scrollTrigger: {
            trigger: "#hobbySection",
            start: "200 bottom",
            end: "center bottom",
            scrub: true,


          },
          xPercent:-100
        });
    
        gsap.to('#hobbySection', {
          scrollTrigger: {
            pin: '#hobbySection',
            end: '+=2400',
            pinSpacing: true,
          },
        });
    
        gsap.to("#hobby01", {
          scrollTrigger: {
            trigger: '#hobby01',
            toggleActions: 'play reverse play reverse',
            start: '-400s',
            end: '+=1200s',
          },
          opacity: 1,
        });
        gsap.to("#hobby02", {
          scrollTrigger: {
            trigger: '#hobby02',
            toggleActions: 'play reverse play reverse',
            start: '+=800s',
            end: '+=800s',
    
          },
          opacity: 1,
        });
        gsap.to("#hobby03", {
          scrollTrigger: {
            trigger: '#hobby03',
            toggleActions: 'play reverse play reverse',
            start: '+=1600s',
            end: '+=800s',
          },
          opacity: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hobbySection",
            scrub: true,
            end: '+=3200',
            pinSpacing: true,
          }
        })
        tl
        .to("#hobbyLine", {width:"5%"})
        .to("#hobbyLine", {width:"20%"})
        .to("#hobbyLine", {width:"50%"})
        .to("#hobbyLine", {width:"90%"})

        
    })   
    
    

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
                  <p>I love<span className='relative'> CODING<span id='aboutUnder' className='underline'></span></span></p>
                  <p>Because it has<span className='relative'> ANSWER<span id='aboutUnder' className='underline'></span></span></p>
              </div>
              <a href={`/projects`} className='flex justify-center items-center gap-x-4 bg-blue h-10 px-6 rounded-full text-white transition ease-in-out hover:bg-gray cursor-pointer'>Project <FontAwesomeIcon icon={faChevronRight} /></a>
            </article>
            <div className='flex justify-center relative'>
              <img src={headshot} alt="Head Shot" className='w-1/2 z-10'/>
              <div className='blob w-2/3 h-4/5 absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-lightBlue to-blue shadow-lg shadow-blue-500 animate-[morpheus_8s_ease-in-out_infinite]'></div>
            </div>
        </section>

      {/* About Me */}
      <section id='aboutSection' className='flex flex-col items-center gap-y-6'>
        <h2 className='font-head font-black text-2xl overflow-hidden'><p  id="about">About Me</p></h2>

        <div className='flex flex-col items-center gap-y-6 md:flex-row md:w-8/12 md:items-start'>
          <article className='flex justify-between w-10/12 gap-x-4 text-left md:flex-col md:gap-y-12 md:w-1/4 md:text-right'>
            <div className='overflow-hidden'>
              <p className='info text-gray'>Born</p>
              <strong className='info02 block text-lg'>June 23, 1998</strong>
            </div>
            <div className='overflow-hidden'>
              <p className='info text-gray'>Nationality</p>
              <strong className='info02 block text-lg'>South Korea</strong>
            </div>
            <div className='overflow-hidden'>
              <p className='info text-gray'>MBTI</p>
              <strong className='info02 block text-lg'>ISTJ</strong>
            </div>
          </article>
          <div className='flex items-center justify-center md:w-6 md:h-96'>
              <p className='border-dashed border-r-2 border-lightBlue  h-full md:transform  md:h-full'></p>
          </div>
          <article className='w-10/12'>
            <h3 className='font-black'>I have an unlimited love for <span className='text-red'>CODING</span> because, to me, it&#39;s not just lines of text; it&#39;s the pursuit of <span className='text-red'>ANSWER</span>.</h3>
            <br/>
            <p>
              As a front-end developer, I thrive on the challenge of transforming concepts into tangible, interactive solutions. Coding isn&#39;t just a skill for me; it&#39;s a journey where I put together all the knowledge that I have stacked and discover the answers with the insight I&#39;ve honed. Coding is always wait for me at the finish line with the answer.
              <br/><br/>In addition to my technical skills, I&#39;m always open to talking and sharing other solutions, new technologies and design trends with people to enhance my skill set. I am interested and curious about new knowledge because it will expand my point of view and allow me to find more ways to find a solution. To do that, I usually go to seminars and workshops to meet people who are in the same industry.
              <br/><br/>Let&#39;s embark on this coding journey together and create meaningful, seamless, and visually appealing : &#x29;
            </p>        
          </article>
        </div>
        <a href='src/assets/[Resume]_Yooran_Kim.pdf' target='_blank' className='flex items-center justify-center gap-x-2 bg-red text-white h-10 px-6 rounded-full transition duration-200 ease-in-out hover:bg-gray'>Resume <FontAwesomeIcon icon={faChevronRight} /></a>
      </section>

      {/* Skills */}
      <section id='skillSection' className='flex flex-col items-center gap-y-8'>
          <h2 className='font-head font-black text-2xl overflow-hidden'><p id='skill'>Skills</p></h2>
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
          <article className='overflow-hidden flex flex-col w-11/12 items-center justify-center md:flex-row md:gap-x-8'>
            <h3 className='whyP text-red text-center text-xl font-black mb-4'>&#34;WHY?&#34;</h3>
            <div className='overflow-hidden'>
              <p className='whyP'>
                  I tend to ask <span className='text-red'>&#34;WHY&#34;</span> to everything.
                <br/>I think <span className='text-red'>&#34;WHY?&#34;</span> this happened?
                <br/>Consequently, all my values come from <span className='text-red'>&#34;WHY?&#34;</span>
              </p>
            </div>
          </article>
          <article className='whyA w-11/12 flex flex-col gap-y-8 md:flex-row md:w-8/12 md:gap-x-8'>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Logical Thinking</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> did I make that decision?</p>
              <p>
              Questioning the reasons behind actions, decisions, or beliefs fosters critical thinking skills by prompting to evaluate information critically. It encourages to assess the validity, reliability, and relevance of information before forming conclusions or making decisions.
              </p>
            </div>
            <div className='whyA flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Efficient</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> is this needed?</p>
              <p>
                Through questioning, it enables to uncover inefficiencies, bottlenecks, and redundancies that may be hindering productivity or effectiveness. This allows to streamline workflows, eliminate unnecessary steps, and allocate resources more efficiently.
              </p>
            </div>
            <div className='whyA flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Problem-Solving</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> does this happen?</p>
              <p>
                Understanding why something occurred enables to develop targeted and sustainable solutions. By addressing the root cause, rather than merely treating symptoms, I can implement strategies that are more likely to resolve the problem effectively in the long term.
              </p>
            </div>
          </article>
      </section>

      {/* Hobbies */}
      <section id='hobbySection' className='flex flex-col gap-y-8 justify-center items-center mb-40 h-screen'>
        <h2 className='font-head font-black text-2xl text-center overflow-hidden w-1/2 md:w-1/12 '><span id='hobby' className='block' >Hobbies</span></h2>
        <article className='w-11/12 md:w-8/12'>
          <p>
          Beyond coding, in my free time, I thrive on diverse interests that keep life exciting and balanced between as a developer and as myself.
          <br/><br/>Also, I find solace and inspiration in various hobbies that complement my passion for front-end development. Here are a few activities that fuel my creativity and balance.
          </p>
        </article>
        <div className='md:w-8/12 flex gap-x-4 items-center'><span className='text-blue text-sm font-black'>Scroll Down</span><p id='hobbyLine' className='border-blue h-1 bg-blue rounded-full'></p></div>
        <article className='w-full h-96 md:w-8/12 relative flex flex-col items-center md:h-80'>
          <div id='hobby01' className="absolute opacity-0 bg-cover bg-center py-10 px-4 h-full w-full flex justify-center items-center" style={{ backgroundImage: `url(${hobby01})` }}>
            <p className='text-white z-50 md:w-11/12 text-sm'>
              <span className='text-lg md:text-xl'>Cycling</span> is not just a way to stay active; it&#34;s my therapy, exploring new routes and enjoying the beauty of nature. The feeling of the wind in my hair and the thrill of riding the open road helped me refresh. It’s one of my favorite ways to release my stress and pressure to have space in my mind.
            </p>
            <div className='absolute -inset-0 bg-black opacity-50'></div>
          </div>
          <div id='hobby02' className="absolute opacity-0 bg-cover bg-center py-10 px-4 h-full w-full flex justify-center items-center"  style={{ backgroundImage: `url(${hobby02})` }}>
            <p className='text-white z-50 md:w-11/12 text-sm'>
            I enjoy <span className='text-lg md:text-xl'>FPS games</span> such as Fortnite with my friends. The whole journey of choosing the right weapon and devising a strategy with my friends to achieve the one goal of eliminating the opponent is so interesting. While talking about which strategy is better, the diversity of roles that sometimes I become a leader and a follower is also intrigue. If defeated, giving feedback and improving together is also a factor that prevents the game from being boring. 
            By playing video game with people, it help me cultivate teamwork, communication, and problem-solving abilities essential for success in the dynamic field of front-end development.
            </p>
            <div className='absolute -inset-0 bg-black opacity-50'></div>
          </div>
          <div id='hobby03' className="absolute opacity-0 bg-cover bg-center py-10 px-4 h-full w-full flex justify-center items-center"  style={{ backgroundImage: `url(${hobby03})` }}>
            <p className='text-white z-50 md:w-11/12 text-sm'>
              I like <span className='text-lg md:text-xl'>taking pictures</span>  in my free time. I feel calm and peaceful when I am just focusing on the landscape through a camera lens. It not only fulfills my desire for art and inspiration but also enlightens me with new ideas and insights expanding my point of view. 
              Moreover, it allows me to communicate smoothly with the designers on the team, empathizing with them in terms of art, not sharing opinions only as a developer. <br/><br/>* The background image is taken by me :&#41;
            </p>
            <div className='absolute -inset-0 bg-black opacity-50'></div>
          </div>
        </article>

      </section>
    </div>
  )
}

export default About;