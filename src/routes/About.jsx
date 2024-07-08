import {  useRef,useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faAnglesDown} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faCss3Alt, faSquareJs, faReact, faPhp} from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { StateContext } from '../routes/StateContext';

import hobby01 from "../images/hobby-cycle.jpg";
import hobby02 from "../images/hobby-game.jpeg";
import hobby03 from "../images/hobby-photo.jpeg";
import about01 from "../images/about01.jpg";
import about02 from "../images/about02.jpg";
import about03 from "../images/about03.jpg";

import SEO from '../components/Seo';



gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const tl = useRef();
  const { sharedState } = useContext(StateContext);


  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    { id: 1, src: about01, descrp:"Vancouver, Canada :)" },
    { id: 2, src: about02, descrp:"Paris, France :)" },
    { id: 3, src: about03, descrp:"Seoul, Korea :)" }
    // add more images to the array
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images]);


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'src/images/[Resume]_Yooran_Kim.pdf';
    link.target = "_blank"
    link.click();
}

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
        .to("#hobbyLine", {width:"72%"})
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
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
          },
          opacity:0
        });
    
        gsap.from("#hobby",{
          scrollTrigger: {
            trigger: "#hobbySection",
            start: "top bottom",
            end: "center bottom",
            scrub: true,

          },
          xPercent:-100
        });
    
        gsap.to('#hobbySection', {
          scrollTrigger: {
            pin: '#hobbySection',
            start:"center center",
            end: '+=1000',
            pinSpacing: true,
            scrub:true,
          },
        });
    
        gsap.to("#hobby01", {
          scrollTrigger: {
            trigger: '#hobby01',
            toggleActions: 'play reverse play reverse',
            start: '-1000s',
            end: '+=400s',
          },
          opacity: 1,
        });
        gsap.to("#hobby02", {
          scrollTrigger: {
            trigger: '#hobby02',
            toggleActions: 'play reverse play reverse',
            start: '-600s',
            end: '+=600s',
    
          },
          opacity: 1,
        });
        gsap.to("#hobby03", {
          scrollTrigger: {
            trigger: '#hobby03',
            toggleActions: 'play reverse play reverse',
            start: '0s',
            end: '+=500s',
          },
          opacity: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hobbySection",
            scrub: true,
            // start:"center center",
            end: '+=1600',
            pinSpacing: true,
          }
        })
        tl
        .to("#hobbyLine", {width:"0%"})
        .to("#hobbyLine", {width:"20%"})
        .to("#hobbyLine", {width:"93%"})

        
    })   
    
    

  })
    
  return (
    <div className={`flex flex-col transition-[width] lg:gap-y-40
    ${sharedState == "true" ? 
    "md:w-[calc(100%-8rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-11rem)] 2xl:w-[calc(100%-13rem)] 3xl:w-[calc(100%-16rem)]":
    "md:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] 2xl:w-[calc(100%-7rem)] 3xl:w-[calc(100%-8rem)]"} `} 
    >
        <SEO
          title='Yooran KIM_ABOUT'
          description="Learn more about Yooran Kim, a frontend developer with a passion for creating beautiful and intuitive web experiences. Discover Yooran's journey into web development, expertise in HTML, CSS, JavaScript, and frameworks like React, and commitment to staying updated with the latest technologies and best practices."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, HTML, CSS, JavaScript, React, about"
          url="https://yoorankim.com/about"
        />
      {/* Banner */}
      <section className='flex flex-col-reverse justify-center items-center gap-y-20 pt-32 pb-10 md:flex-row md:gap-x-32 lg:h-[44rem] 2xl:h-[44rem] '>
          <article className='flex flex-col items-start gap-y-6 3xl:gap-y-10'>
            <p className='greet font-head 2xl:text-xl 3xl:text-2xl'>Hi, my name is</p>
            <div  className='font-head'>
                <h1 className='name font-black text-4xl 2xl:text-5xl 3xl:text-6xl'>Yooran Kim</h1>
                <p className='text-blue 2xl:text-xl 3xl:text-2xl font-bold'>A Front-End Developer</p>
            </div>
            <div className='font-head text-base 2xl:text-lg 3xl:text-xl text-left'>
                <p>I love<span className='relative'> CODING<span id='aboutUnder' className='underline'></span></span></p>
                <p>Because it has<span className='relative'> ANSWER<span id='aboutUnder' className='underline'></span></span></p>
            </div>
            <a href={`/projects`} 
                className='flex justify-center items-center gap-x-4 bg-blue text-sm  py-1 md:px-4 lg:px-6 2xl:px-8 2xl:py-2 rounded-full text-white transition ease-in-out hover:bg-gray cursor-pointer lg:text-xl 3xl:text-2xl'>
                  Project <FontAwesomeIcon icon={faChevronRight} />
                </a> 
           </article>

          <div className='relative'>
            <div className='absolute -top-5 left-24 2xl:left-32 3xl:left-40 z-50 w-32 h-8 bg-blue opacity-30 drop-shadow-md'></div>
            <div className='flex flex-col justify-between items-end drop-shadow-lg w-80 h-96 bg-white p-4 rounded 2xl:w-96 2xl:h-[30rem] 2xl:w-[28rem] 2xl:h-[34rem]'>
              <img src={images[currentIndex].src} alt={images[currentIndex].id} 
                className='rounded'
              />
              <p className='text-gray 2xl:text-xl'>{images[currentIndex].descrp}</p>
            </div>
          </div>
      </section>

      <p className='flex justify-center'><FontAwesomeIcon icon={faAnglesDown} className='animate-bounce text-gray md:text-xl lg:text-2xl'/></p>
      

      {/* About Me */}
      <section id='aboutSection' className='flex flex-col items-center gap-y-6 3xl:gap-y-20'>
        <h2 className='font-head font-black text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl overflow-hidden'><p id="about">About Me</p></h2>

        <div className='flex flex-col items-center gap-y-6 md:flex-row md:w-8/12 md:items-start'>
          <article className='flex justify-between w-10/12 gap-x-4 text-left md:flex-col md:gap-y-12 md:w-1/4 md:text-right'>
            <div className='overflow-hidden'>
              <p className='info text-gray lg:text-base 2xl:text-lg 3xl:text-xl'>Born</p>
              <strong className='info02 block text-lg lg:text-xl 3xl:text-2xl'>June 23, 1998</strong>
            </div>
            <div className='overflow-hidden'>
              <p className='info text-gray lg:text-base 2xl:text-lg 3xl:text-xl'>Nationality</p>
              <strong className='info02 block text-lg lg:text-xl 3xl:text-2xl'>South Korea</strong>
            </div>
            <div className='overflow-hidden'>
              <p className='info text-gray lg:text-base 2xl:text-lg 3xl:text-xl'>MBTI</p>
              <strong className='info02 block text-lg lg:text-xl 3xl:text-2xl'>ISTJ</strong>
            </div>
          </article>

          <div className='flex items-center justify-center md:w-6 md:h-96 3xl:h-[32rem]'>
              <p className='border-dashed border-r-2 border-lightBlue h-full md:transform '></p>
          </div>

          <article className='w-10/12 lg:text-base 2xl:text-xl 3xl:text-2xl'>
            <h3 className='font-black'>I have an unlimited love for <span className='text-red'>CODING</span> because, to me, it&#39;s not just lines of text; it&#39;s the pursuit of <span className='text-red'>ANSWER</span>.</h3>
            <br/>
            <p>
              As a front-end developer, I thrive on the challenge of transforming concepts into tangible, interactive solutions. Coding isn&#39;t just a skill for me; it&#39;s a journey where I put together all the knowledge that I have stacked and discover the answers with the insight I&#39;ve honed. Coding is always wait for me at the finish line with the answer.
              <br/><br/>In addition to my technical skills, I&#39;m always open to talking and sharing other solutions, new technologies and design trends with people to enhance my skill set. I am interested and curious about new knowledge because it will expand my point of view and allow me to find more ways to find a solution. To do that, I usually go to seminars and workshops to meet people who are in the same industry.
              <br/><br/>Let&#39;s embark on this coding journey together and create meaningful, seamless, and visually appealing : &#x29;
            </p>        
          </article>
        </div>
        <a href='#'  onClick={handleDownload} target='_blank' className='flex items-center justify-center gap-x-2 bg-red text-white h-10 px-6 3xl:px-10 3xl:py-6 lg:text-lg 2xl:text-xl 3xl:text-2xl rounded-full transition duration-200 ease-in-out hover:bg-gray'>Resume <FontAwesomeIcon icon={faChevronRight} /></a>
      </section>

      {/* Skills */}
      <section id='skillSection' className='flex flex-col items-center gap-y-8 2xl:gap-y-14'>
          <h2 className='font-head font-black text-2xl overflow-hidden lg:text-3xl 2xl:text-4xl 3xl:text-5xl'><p id='skill'>Skills</p></h2>
          <div className='overflow-hidden grid grid-cols-5 gap-4 text-blue text-4xl md:text-5xl 2xl:text-6xl'>
            <FontAwesomeIcon icon={faHtml5} className='skills'/>
            <FontAwesomeIcon icon={faCss3Alt} className='skills'/>
            <FontAwesomeIcon icon={faSquareJs} className='skills'/>
            <FontAwesomeIcon icon={faReact}  className='skills'/>
            <FontAwesomeIcon icon={faPhp} className='skills'/>
          </div>
      </section>

      {/* Values */}
      <section id='valueSection' className='flex flex-col items-center gap-y-8 md:gap-y-14 2xl:gap-y-20'>
          <h2 id="value" className='font-head font-black text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl text-center'>Values</h2>
          <article className='overflow-hidden flex flex-col w-11/12 items-center justify-center md:flex-row md:gap-x-8'>
            <h3 className='whyP text-red text-center text-xl lg:text-3xl font-black mb-4'>&#34;WHY?&#34;</h3>
              <p className='whyP lg:text-lg 2xl:text-xl 3xl:text-2xl'>
                  I tend to ask <span className='text-red'>&#34;WHY&#34;</span> to everything.
              </p>
          </article>
          <article className='whyA w-11/12 flex flex-col gap-y-8 md:flex-row md:w-8/12 md:gap-x-8'>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-black'>Logical Thinking</h3>
              <p className='text-gray lg:text-lg 2xl:text-xl 3xl:text-2xl'><span className='text-red'>WHY</span> did I make that decision?</p>
              <p className='2xl:text-xl 3xl:text-2xl'>
              Questioning the reasons behind actions, decisions, or beliefs fosters critical thinking skills by prompting to evaluate information critically. It encourages to assess the validity, reliability, and relevance of information before forming conclusions or making decisions.
              </p>
            </div>
            <div className='whyA flex flex-col gap-y-2'>
              <h3 className='text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-black'>Efficient</h3>
              <p className='text-gray lg:text-lg 2xl:text-xl 3xl:text-2xl'><span className='text-red'>WHY</span> is this needed?</p>
              <p className='2xl:text-xl 3xl:text-2xl'>
                Through questioning, it enables to uncover inefficiencies, bottlenecks, and redundancies that may be hindering productivity or effectiveness. This allows to streamline workflows, eliminate unnecessary steps, and allocate resources more efficiently.
              </p>
            </div>
            <div className='whyA flex flex-col gap-y-2'>
              <h3 className='text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-black'>Problem-Solving</h3>
              <p className='text-gray lg:text-lg 2xl:text-xl 3xl:text-2xl'><span className='text-red'>WHY</span> did the problem happen?</p>
              <p className='2xl:text-xl 3xl:text-2xl'>
                Understanding why something occurred enables to develop targeted and sustainable solutions. By addressing the root cause, rather than merely treating symptoms, I can implement strategies that are more likely to resolve the problem effectively in the long term.
              </p>
            </div>
          </article>
      </section>

      {/* Hobbies */}
      <section id='hobbySection' className='flex flex-col gap-y-8 justify-center items-center mb-40'>
        <h2 className='font-head font-black text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl text-center overflow-hidden w-1/2 md:w-2/12 lg:w-1/12'><span id='hobby' className='block' >Hobbies</span></h2>
        
        <article className='w-11/12 md:w-8/12 lg:text-base 2xl:text-2xl'>
          <p>
          Beyond coding, in my free time, I thrive on diverse interests that keep life exciting and balanced between as a developer and as myself.
          <br/><br/>Also, I find solace and inspiration in various hobbies that complement my passion for front-end development. Here are a few activities that fuel my creativity and balance.
          </p>
        </article>

        <div className='w-11/12 md:w-8/12 flex gap-x-4 justify-stretch items-center'><span className='text-blue text-sm lg:text-lg 2xl:text-xl font-black w-28'>Scroll Down</span><p id='hobbyLine' className='border-blue h-0.5 md:h-1 bg-blue rounded-full'></p></div>
        
        <article className='w-full h-96 md:w-8/12 relative flex flex-col items-center md:h-80 lg:h-64 2xl:h-96 3xl:h-[30rem]'>
          <div id='hobby01' className="absolute opacity-0 bg-cover bg-center py-10 px-4 h-full w-full lg:h-[32rem] 2xl:h-[30rem] 3xl:h-[34rem] flex justify-center items-center" style={{ backgroundImage: `url(${hobby01})` }}>
            <p className='text-white z-50 md:w-11/12 text-sm md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-5'>
              <span className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-red'>Cycling</span> is not just a way to stay active. it&#34;s my therapy, exploring new routes and enjoying the beauty of nature. The feeling of the wind in my hair and the thrill of riding the open road helped me refresh. It’s one of my favorite ways to release my stress and pressure to have space in my mind.
            </p>
            <div className='absolute -inset-0 bg-black opacity-70'></div>
          </div>
          <div id='hobby02' className="absolute opacity-0 bg-cover bg-center py-10 px-4 h-full w-full lg:h-[32rem] 2xl:h-[30rem] 3xl:h-[34rem] flex justify-center items-center"  style={{ backgroundImage: `url(${hobby02})` }}>
            <p className='text-white z-50 md:w-11/12 text-sm md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-5'>
            I enjoy <span className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-red'>FPS games</span> such as Fortnite with my friends. The whole journey of choosing the right weapon and devising a strategy with my friends to achieve the one goal of eliminating the opponent is so interesting. While talking about which strategy is better, the diversity of roles that sometimes I become a leader and a follower is also intrigue. If defeated, giving feedback and improving together is also a factor that prevents the game from being boring. 
            By playing video game with people, it help me cultivate teamwork, communication, and problem-solving abilities essential for success in the dynamic field of front-end development.
            </p>
            <div className='absolute -inset-0 bg-black opacity-70'></div>
          </div>
          <div id='hobby03' className="absolute opacity-0 bg-cover bg-bottom py-10 px-4 h-full w-full lg:h-[32rem] 2xl:h-[30rem] 3xl:h-[34rem] flex justify-center items-center"  style={{ backgroundImage: `url(${hobby03})` }}>
            <p className='text-white z-50 md:w-11/12 text-sm md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-5'>
              I like <span className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-red'>taking pictures</span>  in my free time. I feel calm and peaceful when I am just focusing on the landscape through a camera lens. It not only fulfills my desire for art and inspiration but also enlightens me with new ideas and insights expanding my point of view. 
              Moreover, it allows me to communicate smoothly with the designers on the team, empathizing with them in terms of art, not sharing opinions only as a developer. <br/><br/>* The background image is taken by me :&#41;
            </p>
            <div className='absolute -inset-0 bg-black opacity-70'></div>
          </div>
        </article>

      </section>
    </div>
  )
}

export default About;