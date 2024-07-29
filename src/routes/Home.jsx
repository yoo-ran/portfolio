import { useRef,useState, useContext, useEffect }  from 'react';
import { StateContext } from '../routes/StateContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare,faArrowRight,faAnglesDown,
  faBrain, faMagnifyingGlassChart,faChartLine,faCode, faQuoteRight,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import { projectData } from '../data/projectData';

import TestiCarousel from '../components/TestiCarousel';
import SEO from '../components/Seo';
import Loading from '../components/Loading';

import headshot from "../images/headshot.webp"


const workflowObj = [
  {icon:faBrain, keyword:"Think", words:{
    id: 'flow01',
    title: 'Think',
    description: 'I start by clearly understanding and defining the problem or challenge I am facing. I break it down into manageable components. I engage in creative thinking to brainstorm potential solutions and think broadly without evaluating ideas.'
  }},
  {icon:faMagnifyingGlassChart, keyword:"Gather", words:{
    id: 'flow02',
    title: 'Gather',
    description: 'I gather relevant information and resources related to the problem. This includes data, research findings, or insights from others who have faced similar challenges. I usually google a lot and look through other\'s codes and to instructors and colleagues to get a sense of how they approach the problem and to gain different perspectives on the issue.'
  }},
  {icon:faChartLine, keyword:"Analyze", words:{
    id: 'flow03',
    title: 'Analyze',
    description: 'Then, it\'s time to assess the feasibility and potential effectiveness of each solution generated during the thinking and gathering phase. I consider each option\'s resources required, possible risks, and benefits. I sort out the potential solutions based on their impact and feasibility and identify the most suitable options to move forward with.'
  }},
  {icon:faCode, keyword:"Try", words:{
    id: 'flow04',
    title: 'Try',
    description: 'I take action by trying out the chosen solution. In this step, I keep in mind any potential risks or challenges. I monitor the implementation results. If the solution works well, great! If not, use the experience as a learning opportunity. I iterate on my approach by adjusting or trying alternative solutions based on outcomes.'
  }},
]

function Home() {

  const greet = useRef(null);
  const name = useRef(null);
  const container = useRef(null);
  const tl = useRef();
  const [category,setCategory] = useState(projectData)
  const { sharedState } = useContext(StateContext);



  useGSAP(()=>{
    gsap.fromTo([greet.current, name.current], { duration: 1, x: -100, opacity: 0.5 }, { duration: 1, x: 0, opacity: 1 });
    // Select all elements within the container
    const whos = gsap.utils.toArray('.who');
    const underlines = gsap.utils.toArray('.homeUnder');
    tl.current = gsap
      .timeline({
        repeat: -1,
      })
      .fromTo(whos[0], {y:100 }, {y:0})
      .to(underlines[0], { width:"100%"})
      .to(whos[0], {duration:1, y:100, delay:0.5})
      .fromTo(whos[1], {y:100 }, {y:0})
      .to(underlines[1], { width:"100%"})
      .to(whos[1], {duration:1, y:100 , delay:0.5})
      .fromTo(whos[2], {y:100 }, {y:0})
      .to(underlines[2], { width:"100%"})
      .to(whos[2], {duration:1,y:100, delay:0.5})


    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // Desktop setup with ScrollTrigger
          gsap.from("#project",{
            scrollTrigger: {
              trigger: "#projSection",
              start: "top bottom",
              end: "center bottom",
              scrub: true,
            },
            xPercent:-100
          });
          gsap.from("#more",{
            scrollTrigger: {
              trigger: "#projSection",
              start: "top bottom",
              end: "center bottom",
              scrub: true,
            },
            xPercent:100
          });
        
          gsap.from("#prj",{
            scrollTrigger: {
              trigger: "#projSection",
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
            yPercent:200
          });
          gsap.from("#workFlow",{
            scrollTrigger: {
              trigger: "#workSection",
              start: "100 bottom",
              end: "150 center",
              scrub: true,
            },
            xPercent:-100
          });
          gsap.from("#testimonial",{
            scrollTrigger: {
              trigger: "#testiSection",
              start: "2100 bottom",
              end: "2300 bottom",
              scrub: true,
            },
            xPercent:-100
          });
          gsap.from(".quote",{
            scrollTrigger: {
              trigger: "#testiSection",
              start: "2100 bottom",
              end: "2300 bottom",
              scrub: true,
            },
            xPercent:100
          });
          gsap.to("#testi",{
            scrollTrigger: {
              trigger: "#testiSection",
              start: "2100 bottom",
              end: "2300 bottom",
              scrub: true,
            },
            opacity:1
          });
          gsap.from("#contact",{
            scrollTrigger: {
              trigger: "#contactSection",
              start: "2000 bottom",
              end: "2200 bottom",
              scrub: true,
            },
            xPercent:-100
          });
          gsap.from(".cLink",{
            scrollTrigger: {
              trigger: "#contactSection",
              start: "2000 bottom",
              end: "2200 bottom",
              scrub: true,
            },
            yPercent: -300
          });
          gsap.to('#workSection', {
            scrollTrigger: {
              pin: '#workSection',
              start:"center center",
              end: '+=1600',
              scrub: 0.5,
              pinSpacing: true,
            },
          });
          gsap.to(['#flow01',"#fIcon01"], {
            scrollTrigger: {
              trigger: '#flow01',
              toggleActions: 'play reverse play reverse',
              start: '-500s',
              end: '+=500s',
            },
            opacity: 1
          });
          gsap.to(".stepTxt01", {
            scrollTrigger: {
              trigger: '#flow01',
              toggleActions: 'play reverse play reverse',
              start: '-500s',
              end: '+=500s',
            },
            color:"#9dcadc"
          });
          
        
          gsap.to(['#flow02',"#fIcon02"], {
            scrollTrigger: {
              trigger: '#flow02',
              toggleActions: 'play reverse play reverse',
              start: '0s',
              end: '+=500s',
            },
            opacity: 1,
          });
  
          gsap.to(".stepTxt02", {
            scrollTrigger: {
              trigger: '#flow02',
              toggleActions: 'play reverse play reverse',
              start: '0s',
              end: '+=500s',
            },
            color:"#9dcadc"
          });
        
          gsap.to(['#flow03',"#fIcon03"], {
            scrollTrigger: {
              trigger: '#flow03',
              toggleActions: 'play reverse play reverse',
              start: '500s',
              end: '+=500s',
            },
            opacity: 1,
          });
  
          gsap.to(".stepTxt03", {
            scrollTrigger: {
              trigger: '#flow03',
              toggleActions: 'play reverse play reverse',
              start: '500s',
              end: '+=500s',
  
            },
            color:"#9dcadc"
          });
  
          gsap.to(['#flow04',"#fIcon04"], {
            scrollTrigger: {
              trigger: '#flow04',
              toggleActions: 'play reverse play reverse',
              start: '1000s',
              end: '+=500s',
            },
            opacity: 1,
          });
  
          gsap.to(".stepTxt04", {
            scrollTrigger: {
              trigger: '#flow04',
              toggleActions: 'play reverse play reverse',
              start: '1000s',
              end: '+=500s',
            },
            color:"#9dcadc"
          });
    });

    mm.add("(max-width: 768px)", () => {
      // Mobile setup with ScrollTrigger
      gsap.from("#project",{
        scrollTrigger: {
          trigger: "#projSection",
          start: "200 bottom",
          end: "600 bottom",
          scrub: true,

        },
        xPercent:-100
      });
      gsap.from("#more",{
        scrollTrigger: {
          trigger: "#projSection",
          start: "200 bottom",
          end: "600 bottom",
          scrub: true,
        },
        xPercent:100
      });
      gsap.from(".prj01",{
        scrollTrigger: {
          trigger: "#projSection",
          start: "200 bottom",
          end: "700 bottom",
          scrub: true,
        },
        xPercent:200,
        opacity:0
      });
      gsap.from(".prj02",{
        scrollTrigger: {
          trigger: "#projSection",
          start: "700 bottom",
          end: "1300 bottom",
          scrub: true,
        },
        xPercent:200,
        opacity:0
      });
      gsap.from(".prj03",{
        scrollTrigger: {
          trigger: "#projSection",
          start: "1300 bottom",
          end: "1900 bottom",
          scrub: true,
        },
        xPercent:200,
        opacity:0
      });
      gsap.from("#workFlow",{
        scrollTrigger: {
          trigger: "#workSection",
          start: "100 bottom",
          end: "150 center",
          scrub: true,
        },
        xPercent:-100
      });
      gsap.from("#testimonial",{
        scrollTrigger: {
          trigger: "#testiSection",
          start: "3100 bottom",
          end: "3400 bottom",
          scrub: true,
        },
        xPercent:-100
      });
      gsap.from(".quote",{
        scrollTrigger: {
          trigger: "#testiSection",
          start: "3100 bottom",
          end: "3400 bottom",
          scrub: true,
        },
        xPercent:100
      });
      gsap.to("#testi",{
        scrollTrigger: {
          trigger: "#testiSection",
          start: "3000 bottom",
          end: "end bottom",
          scrub: true,
        },
        opacity:1
      });
      gsap.from("#contact",{
        scrollTrigger: {
          trigger: "#contactSection",
          start: "3000 bottom",
          end: "3400 bottom",
          scrub: true,
        },
        xPercent:-100
      });
      gsap.from(".cLink",{
        scrollTrigger: {
          trigger: "#contactSection",
          start: "3200 bottom",
          end: "3300 bottom",
          scrub: true,
        },
        yPercent: -300
      });
      gsap.to('#workSection', {
        scrollTrigger: {
          pin: '#workSection',
          start:"400 center",
          end: '+=3000',
          scrub: true,
          pinSpacing: true,

        },
      });
      gsap.to(['#flow01',"#fIcon01"], {
        scrollTrigger: {
          trigger: '#flow01',
          toggleActions: 'play reverse play reverse',
          start: '-1000s',
          end: '+=1000s',
        },
        opacity: 1
      });
      gsap.to(".stepTxt01", {
        scrollTrigger: {
          trigger: '#flow01',
          toggleActions: 'play reverse play reverse',
          start: '-1000s',
          end: '+=1000s',
        },
        color:"#9dcadc"
      });
      
    
      gsap.to(['#flow02',"#fIcon02"], {
        scrollTrigger: {
          trigger: '#flow02',
          toggleActions: 'play reverse play reverse',
          start: '0s',
          end: '+=1000s',
        },
        opacity: 1,
      });

      gsap.to(".stepTxt02", {
        scrollTrigger: {
          trigger: '#flow02',
          toggleActions: 'play reverse play reverse',
          start: '0s',
          end: '+=1000s',
        },
        color:"#9dcadc"
      });
    
      gsap.to(['#flow03',"#fIcon03"], {
        scrollTrigger: {
          trigger: '#flow03',
          toggleActions: 'play reverse play reverse',
          start: '1000s',
          end: '+=1000s',
        },
        opacity: 1,
      });

      gsap.to(".stepTxt03", {
        scrollTrigger: {
          trigger: '#flow03',
          toggleActions: 'play reverse play reverse',
          start: '1000s',
          end: '+=1000s',

        },
        color:"#9dcadc"
      });

      gsap.to(['#flow04',"#fIcon04"], {
        scrollTrigger: {
          trigger: '#flow04',
          toggleActions: 'play reverse play reverse',
          start: '2000s',
          end: '+=1000s',
        },
        opacity: 1,
      });

      gsap.to(".stepTxt04", {
        scrollTrigger: {
          trigger: '#flow04',
          toggleActions: 'play reverse play reverse',
          start: '2000s',
          end: '+=1000s',
        },
        color:"#9dcadc"
      });
    });
 }, []);

 useEffect(() => {
  const ellipses = document.querySelectorAll('ellipse');

  ellipses.forEach(ellipse => {
    animateEllipse(ellipse);
  });
}, []);

const animateEllipse = (ellipse) => {
  gsap.to(ellipse, {
    duration: 3, // Random duration between 1 and 4 seconds
    x: Math.random() * 500 - 250, // Random x position
    y: Math.random() * 500 - 250, // Random y position
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Reverse on each repeat
    ease: 'power1.inOut', // Smooth easing
    onComplete: () => animateEllipse(ellipse) // Recursively animate
  });
};



  return(
    <main id='home' className={`-z-50 gap-y-20 md:gap-y-30`} >
        {/* <Loading/> */}

        <SEO
          title='Yooran KIM'
          description="Welcome to the portfolio of Yooran Kim, a skilled frontend developer passionate about creating responsive and user-friendly web experiences. Explore a collection of projects showcasing expertise in HTML5, CSS3, JavaScript, React, and more. From engaging user interfaces to seamless interactions, each project demonstrates a commitment to quality and innovation. "
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, HTML, CSS, JavaScript, React, portfolio"
          url="https://yoorankim.com/"
        />
       
          {/* Banner */}
          <section className='relative flex w-full justify-center items-end pt-24 md:h-[30rem] lg:h-[40rem] 2xl:h-[50rem] 3xl:h-[52rem]'>
            <svg className='absolute ' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
              <defs>
                <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feGaussianBlur stdDeviation="40" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                </filter>
              </defs>
              <g filter="url(#bbblurry-filter)" className='border'>
                <ellipse className='fill-lightBlue' rx="277.5" ry="277.5" cx="200.12996573722796" cy="400.88549932509818"></ellipse>
                <ellipse className='fill-white' rx="277.5" ry="277.5" cx="500.1986694335938" cy="600.5460072462471"></ellipse>
                <ellipse className='fill-lightBlue' rx="277.5" ry="277.5" cx="800.74947912405923" cy="710.0054717538245"></ellipse>
              </g>
            </svg> 
            <div className='flex flex-col justify-between items-center md:items-end gap-y-8 md:flex-row md:h-full md:w-[38rem] lg:w-[50rem]   lg:gap-x-20'>
              <article className='z-10 flex flex-col md:items-start justify-center gap-y-4 md:gap-y-6 lg:gap-y-12 w-8/12 md:h-full md:w-1/2  lg:w-1/2'>
                <p className='font-head text-sm lg:text-lg 2xl:text-2xl 3xl:text-3xl w-full' ref={greet}>Hi, my name is</p>
                <div className='font-head flex flex-col items-start w-full' ref={name}>
                    <h1 role="heading" aria-level="2" className='font-black text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl'>Yooran Kim</h1>
                    <p className='text-red drop-shadow	 font-bold md:text-base lg:text-xl 3xl:text-2xl'>A Front-End Developer</p>
                </div>
                <div className='font-head text-m flex w-full md:justify-end'>
                    <p className='overflow-hidden w-full text-left relative md:text-lg lg:text-xl 3xl:text-2xl' ref={container}>Who &nbsp;
                      <span role='heading' className='who absolute'> Thinks Logically <span role="presentation" className='underline homeUnder'></span></span>
                      <span role='heading' className='who absolute'> Loves Solving Problem <span role="presentation" className='underline homeUnder'></span></span>
                      <span role='heading' className='who absolute'> Makes Efficient Code  <span role="presentation" className='underline homeUnder'></span></span>
                    </p>
                </div>
                <a href={`/projects`} 
                className='flex justify-center items-center gap-x-4 bg-blue drop-shadow text-pale text-sm  py-1 md:px-4 lg:px-6 2xl:px-8 xl:py-2 rounded-full transition ease-in-out hover:bg-gray cursor-pointer lg:text-base 3xl:text-2xl'>
                  Project <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </article>

              <article className='group relative flex relative justify-center items-end relative  md:w-6/12  xl:w-4/12'>
                <img src={headshot} alt="Head Shot" className='w-1/2 md:w-full z-10 object-contain'/>
              </article>

            </div>

          </section>

          <p><FontAwesomeIcon icon={faAnglesDown} className='animate-bounce text-gray md:text-xl lg:text-2xl'/></p>

          {/* Projects */}
          <section id='projSection' className='flex flex-col items-center gap-y-8 lg:gap-y-16 3xl:gap-y-20 md:w-[38rem] lg:w-[60rem]'>

            <div className='flex flex-row justify-between items-center w-10/12 md:w-full overflow-hidden'>
              <h2 id='project' className='col-span-3 font-head font-black text-2xl md:text-2xl xl:text-3xl 3xl:text-4xl'>Project Features</h2>
              <a href={`/projects`} aria-label="Project Link" id='more' className='text-red md:col-end-5 text-end text-sm md:text-lg lg:text-lg 3xl:text-2xl hover:text-gray'>More +</a>
            </div>

            <article className='overflow-hidden flex flex-col justify-center items-center gap-y-20 lg:flex-row md:w-full lg:gap-x-8 relative pb-5 '>
            {category.slice(0, 3).map((item) => (
                <div key={item.id} id='prj' className={`prj0${item.id} flex flex-col justify-between items-center w-3/4 md:w-2/3  lg:w-full  h-[30rem] lg:h-[28rem]  rounded-xl overflow-hidden shadow-lg  `}>
                      <img className="w-full h-56 lg:h-1/3 3xl:h-72 object-cover object-center" src={item.img} alt={item.title}/>
                      
                      <div className="p-6 flex flex-col justify-between lg:h-2/3 gap-y-2 ">
                        
                        <div className="flex flex-col justify-center">
                          <div className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl font-head">{item.title}</div>
                          
                          <div className=" 2xl:p-0 flex justify-start gap-x-2">
                            {item.keywords.map((keyword, index) => (
                              <span key={index} className="inline-block bg-lightGray rounded-full px-2 py-1 text-pale 2xl:px-4 2xl:py-2 text-xs 2xl:text-base 3xl:text-lg 2xl:mb-0">{keyword}</span>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-base ">
                          {item.descrp}
                        </p>
                        
                        <div className="">
                        {/* <div className='md:h-16 3xl:h-20'> */}
                          <hr className='border-gray opacity-40 pt-2'/>
                          <div className="flex flex-row justify-between items-center py-2 md:h-full ">
                            <a href={item.gitLink} aria-label={`${item.title} Github`}  target='_blank' className="inline-block bg-blue rounded-full px-4 py-1 md:px-5 lg:px-2 text-sm text-center text-white md:text-sm xl:text-base  2xl:text-lg 3xl:text-xl 2xl:px-5 3xl:px-7 3xl:py-3 hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                            <a href={item.webLink} aria-label={`${item.title} Website`} target='_blank' className="inline-block bg-blue rounded-full px-4 py-1 md:px-5 lg:px-2 text-sm text-center text-white md:text-sm xl:text-base  2xl:text-lg 3xl:text-xl 2xl:px-5 3xl:px-7 3xl:py-3  hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            <a href={item.more} aria-label={`${item.title} Detail`} className="inline-block bg-red rounded-full px-4 py-1 md:px-5 lg:px-2 text-sm text-center text-white md:text-sm xl:text-base  2xl:text-lg 3xl:text-xl 2xl:px-5 3xl:px-7 3xl:py-3  hover:opacity-70">More +</a>
                          </div>
                        </div>
                      </div>
                </div>
            ))}
            </article>
          </section>

          {/* Work Flow */}
          <section id='workSection' className=' overflow-hidden flex flex-col justify-start items-center gap-y-36 md:gap-y-20 lg:gap-y-16 w-full md:justify-center md:w-[40rem] lg:w-[60rem]'>
            <div className='w-10/12 md:w-full overflow-hidden '>
              <h2 id='workFlow' className='font-head font-black text-2xl md:text-2xl xl:text-3xl 3xl:text-4xl'>Work Flow</h2>
            </div>

            <article className="flex flex-col items-center md:flex-row md:items-start lg:gap-x-20 md:gap-x-10 w-full ">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-lightBlue flex justify-center items-center mb-8 w-72 md:w-52 aspect-square	lg:w-1/4 text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl">
                {workflowObj.map((item, idx) => (
                  <FontAwesomeIcon icon={item.icon} id={`fIcon0${idx+1}`} key={idx} className="absolute opacity-0 text-black" />
                ))}
              </div>

              <div className="flex flex-col items-center justify-start gap-y-8 md:w-2/3 lg:w-3/4 2xl:w-8/12 2xl:gap-y-12">
                <ol className="flex justify-between items-center w-full font-medium text-center text-gray text-sm md:text-base lg:text-xl 2xl:text-2xl">
                  {workflowObj.map((item, idx) => (
                    <li key={idx} className="flex items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 dark:after:border-gray-700">
                      <span className="font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <p role="heading">{idx + 1}.&nbsp;</p>
                        <span role="heading">{item.keyword}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="relative w-full md:h-56 text-2xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl ">
                  {workflowObj.map((item) => (
                    <div id={item.words.id} key={item.words.id} className="absolute opacity-0">
                      <h3 className="font-head">{item.words.title}</h3>
                      <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-2xl leading-relaxed mt-4">{item.words.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>


          </section>

          {/* Testimonials */}
          <section id='testiSection' className='bg-lightBlue md:px-4 flex items-center justify-center w-full py-10 '>

            <div className='flex flex-col justify-center items-center overflow-hidden w-full md:gap-x-8 md:w-10/12 lg:w-[60rem]'>
              
              <div className='flex flex-row gap-2.5 justify-between items-center w-1/2 overflow-hidden md:w-1/2 '>
                <h2 id='testimonial' className='font-head font-black text-2xl md:row-start-2 md:text-2xl lg:text-3xl 3xl:text-4xl'>Testimonials</h2>
                <FontAwesomeIcon icon={faQuoteRight} className='quote text-blue text-7xl md:row-start-1 md:text-center md:col-start-1 md:text-10xl'/>
              </div>
              
              <div className='w-full '>
                <TestiCarousel />
              </div>

            </div>

          </section>

          {/* Contact */}
          <section id='contactSection' className='text-center pb-40 px-10 flex flex-col justify-center items-center lg:h-[30rem]'>
              <h2 className='font-head font-black text-2xl pb-10 md:pb-20 md:text-2xl lg:text-4xl 3xl:text-5xl w-1/2 lg:w-3/4 overflow-hidden'><p id='contact'>Contact</p></h2>
              <div className='grid grid-cols-2 gap-8 text-blue  md:grid-cols-2 md:w-10/12  md:text-lg lg:text-xl 3xl:text-3xl'>
                <a href="https://www.linkedin.com/in/yooran/" aria-label='LinkedIn Link' target="_blank" className='overflow-hidden h-8 w-32 flex justify-center relative hover:text-black'><p className='absolute cLink'>LinkedIn</p></a>
                <a href="https://github.com/yoo-ran" aria-label='Github Link' target="_blank" className='overflow-hidden h-8 flex justify-center relative hover:text-black'><p className='absolute cLink'>Github</p></a>
              </div>
          </section>
            {/* <Loading/> */}
    </main>
  )
}

export default Home;