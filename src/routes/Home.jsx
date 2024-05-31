import { useRef,useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare,faArrowRight,
  faBrain, faMagnifyingGlassChart,faChartLine,faCode, faQuoteRight,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import multistep from "../images/multistep.png"
import headshot from "../images/headShot.png"
import petlist from "../images/petlist.png"
import weather from "../images/weather.png"

import SEO from '../components/Seo';


gsap.registerPlugin(useGSAP, ScrollTrigger);




function Home() {
  const greet = useRef(null);
  const name = useRef(null);
  const prjBtn = useRef(null);
  const container = useRef(null);
  const tl = useRef();

  useGSAP(()=>{
    gsap.fromTo([greet.current, name.current], { duration: 1, x: -100, opacity: 0.5 }, { duration: 1, x: 0, opacity: 1 });
    gsap.fromTo(prjBtn.current, {opacity: 0.1 }, { duration: 1,  opacity: 1 });
    // Select all elements within the container
    const whos = gsap.utils.toArray('.who');
    const underlines = gsap.utils.toArray('.homeUnder');
    console.log(underlines);
    tl.current = gsap
      .timeline({
        repeat: -1
      })
      .fromTo(whos[0], {y:100 }, {y:0})
      .to(underlines[0], { width:"100%"})
      .to(whos[0], {duration:1.5, y:100, delay:1})
      .fromTo(whos[1], {y:100 }, {y:0})
      .to(underlines[1], { width:"100%"})
      .to(whos[1], {duration:1.5, y:100 , delay:1})
      .fromTo(whos[2], {y:100 }, {y:0})
      .to(underlines[2], { width:"100%"})
      .to(whos[2], {duration:1.5,y:100, delay:1})


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
              start: "2800 bottom",
              end: "3000 bottom",
              scrub: true,
            },
            xPercent:-100
          });
          gsap.from(".quote",{
            scrollTrigger: {
              trigger: "#testiSection",
              start: "2800 bottom",
              end: "3000 bottom",
              scrub: true,
            },
            xPercent:100
          });
          gsap.to("#testi",{
            scrollTrigger: {
              trigger: "#testiSection",
              start: "2800 bottom",
              end: "3000 bottom",
              scrub: true,
            },
            opacity:1
          });
          gsap.from("#contact",{
            scrollTrigger: {
              trigger: "#contactSection",
              start: "2600 bottom",
              end: "2800 bottom",
              scrub: true,
            },
            xPercent:-100
          });
          gsap.from(".cLink",{
            scrollTrigger: {
              trigger: "#contactSection",
              start: "2600 bottom",
              end: "2800 bottom",
              scrub: true,
            },
            yPercent: -300
          });
          gsap.to('#workSection', {
            scrollTrigger: {
              pin: '#workSection',
              start:"center center",
              end: '+=2600',
              scrub: true,
              pinSpacing: true,
            },
          });
          gsap.to(['#flow01',"#fIcon01"], {
            scrollTrigger: {
              trigger: '#flow01',
              toggleActions: 'play reverse play reverse',
              start: '-600s',
              end: '+=600s',
            },
            opacity: 1
          });
          gsap.to(".stepTxt01", {
            scrollTrigger: {
              trigger: '#flow01',
              toggleActions: 'play reverse play reverse',
              start: '-600s',
              end: '+=600s',
            },
            color:"#9dcadc"
          });
          
        
          gsap.to(['#flow02',"#fIcon02"], {
            scrollTrigger: {
              trigger: '#flow02',
              toggleActions: 'play reverse play reverse',
              start: '800s',
              end: '+=600s',

            },
            opacity: 1,
          });
  
          gsap.to(".stepTxt02", {
            scrollTrigger: {
              trigger: '#flow02',
              toggleActions: 'play reverse play reverse',
              start: '800s',
              end: '+=600s',
            },
            color:"#9dcadc"
          });
        
          gsap.to(['#flow03',"#fIcon03"], {
            scrollTrigger: {
              trigger: '#flow03',
              toggleActions: 'play reverse play reverse',
              start: '1400s',
              end: '+=600s',
            },
            opacity: 1,
          });
  
          gsap.to(".stepTxt03", {
            scrollTrigger: {
              trigger: '#flow03',
              toggleActions: 'play reverse play reverse',
              start: '1400s',
              end: '+=600s',
  
            },
            color:"#9dcadc"
          });
  
          gsap.to(['#flow04',"#fIcon04"], {
            scrollTrigger: {
              trigger: '#flow04',
              toggleActions: 'play reverse play reverse',
              start: '2000s',
              end: '+=600s',
            },
            opacity: 1,
          });
  
          gsap.to(".stepTxt04", {
            scrollTrigger: {
              trigger: '#flow04',
              toggleActions: 'play reverse play reverse',
              start: '2000s',
              end: '+=600s',
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
          start: "3000 bottom",
          end: "3400 bottom",
          scrub: true,
        },
        xPercent:-100
      });
      gsap.from(".quote",{
        scrollTrigger: {
          trigger: "#testiSection",
          start: "3000 bottom",
          end: "3400 bottom",
          scrub: true,
        },
        xPercent:100
      });
      gsap.to("#testi",{
        scrollTrigger: {
          trigger: "#testiSection",
          start: "3200 bottom",
          end: "3400 bottom",
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


// gsap animation & scrolltrigger

  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [
    { p: "Yooran is a standout talent in frontend development. Their passion, problem-solving skills, and proactive approach make them a valuable asset. With their technical prowess and collaborative spirit, they're destined for success in the field.", person: 'Richard', status:"BCIT Instructor" },
    { p: "Yooran is a standout talent in frontend development. Their dedication, creativity, and ability to tackle complexity make them a top student. I have no doubt they'll excel in their future endeavors.", person: 'Kimia Ashrafi', status:"Student" },
    { p: "Having witnessed Yooran's journey in frontend development, I'm truly impressed. Their knack for problem-solving and passion for coding set them apart. With their drive and skills, success is inevitable.", person: 'Eunsong Choi', status:"Student" },
  ];

  


  return(
    <>
        <SEO
          title='Yooran KIM'
          description="Welcome to the portfolio of Yooran Kim, a skilled frontend developer passionate about creating responsive and user-friendly web experiences. Explore a collection of projects showcasing expertise in HTML5, CSS3, JavaScript, React, and more. From engaging user interfaces to seamless interactions, each project demonstrates a commitment to quality and innovation. "
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, HTML, CSS, JavaScript, React, portfolio"
          url="https://yoorankim.com/"
        />
        <main className='flex flex-col items-center gap-y-40'>

          {/* Banner */}
          <section className=' flex justify-center items-end w-full pt-32 bg-white md:flex-row md:h-[40rem] lg:h-[64rem]'>
            <div className='flex flex-col justify-between items-center flex-wrap md:items-end gap-y-8 md:flex-row md:h-full md:w-6/12 lg:w-6/12 lg:gap-x-20 '>
              <article className='flex flex-col md:items-start justify-center gap-y-6 lg:gap-y-12 w-8/12 md:h-full md:w-1/2 lg:w-1/3'>
                <p className='font-head lg:text-3xl w-full' ref={greet}>Hi, my name is</p>
                <div className='font-head flex flex-col items-start w-full' ref={name}>
                    <h1 className='font-black text-2xl md:text-3xl lg:text-6xl'>Yooran Kim</h1>
                    <p className='text-blue font-bold md:text-lg lg:text-2xl'>A Front-End Developer</p>
                </div>
                <div className='font-head text-m flex w-full md:justify-end '>
                    <p className='overflow-hidden w-full text-left relative md:text-lg lg:text-2xl' ref={container}>Who &nbsp;
                      <span className='who absolute'> Thinks Logically <span className='underline homeUnder'></span></span>
                      <span className='who absolute'> Loves Solving Problem <span className='underline homeUnder'></span></span>
                      <span className='who absolute'> Makes Efficient Code  <span className='underline homeUnder'></span></span>
                    </p>
                </div>
                <a href={`/projects`} className='flex justify-center items-center gap-x-4 bg-blue h-10 px-6 rounded-full text-white transition ease-in-out hover:bg-gray cursor-pointer lg:text-xl'>Project <FontAwesomeIcon icon={faChevronRight} /></a>
              </article>

              <article className='flex justify-center relative md:items-end md:w-6/12 lg:w-5/12 md:h-full'>
                <img src={headshot} alt="Head Shot" className='w-1/2 z-10 md:w-full lg:w-full object-contain'/>
                <div className='blob w-2/3 h-4/5 absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-lightBlue to-blue shadow-lg shadow-blue-500 animate-[morpheus_8s_ease-in-out_infinite]'></div>
              </article>
            </div>
          </section>

          {/* Projects */}
          <section id='projSection' className='flex flex-col items-center gap-y-16 md:gap-y-32 md:w-10/12 lg:w-8/12'>
            <div className='grid grid-cols-4 gap-2.5 justify-between items-center w-10/12 md:w-8/12 overflow-hidden'>
              <h2 id='project' className='col-span-3 font-head font-black text-2xl md:text-2xl lg:text-5xl'>Project Features</h2>
              <a href={`/projects`} id='more' className='text-red md:col-end-5 text-end text-sm md:text-lg lg:text-2xl'>More +</a>
            </div>

            <article className='overflow-hidden flex flex-col justify-center items-center gap-y-20 md:flex-row md:w-10/12 md:gap-x-8 pb-5 relative'>
              
              <div id='prj' className="prj01 flex flex-col justify-between items-center w-3/4 h-full md:w-1/3 rounded-xl overflow-hidden shadow-lg md:h-[30rem] lg:h-[32rem]">
                <img className="w-full" src={weather} alt="Weather API"/>
                <div className="p-6 flex flex-col h-full gap-y-3">
                  <div className="font-bold text-xl mb-1 font-head">Weather API</div>
                  <div>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">API</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">Tailwind</span>
                  </div>
                  <p className="text-gray-700 text-base">
                      The weather app project allows users to check the weather now and the weather forecast.</p>
                  <hr className='border-gray opacity-40 py-2'/>
                  <div className="flex flex-row justify-between items-center md:h-full">
                    <a href='https://github.com/yoo-ran/weather_app' target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href={`/weather`} className="inline-block bg-red rounded-full p-2 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">More +</a>
                  </div>
                </div>
              </div>

              <div id='prj' className="prj02 flex flex-col justify-between w-3/4 h-full md:w-1/3 rounded-xl overflow-hidden shadow-lg md:h-[30rem]  lg:h-[32rem]">
                <img className="w-full" src={petlist} alt="pet list"/>
                <div className="p-6 flex flex-col h-full gap-y-3">
                  <div className="font-bold text-xl mb-1 font-head">Pet List Filter</div>
                  <div>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">HTML</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">CSS</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">JS</span>
                  </div>
                  <p className="text-gray-700 text-base ">
                    The filter project is to create a filter for the pet lists by the categories that users have chosen. 
                  </p>
                  <hr className='border-gray opacity-40 py-2'/>
                  <div className="flex flex-row justify-between items-center md:h-full">
                    <a href='https://github.com/yoo-ran/pet-list-filter' target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-4 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='https://petlistfilter.yoorankim.com/' target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-4 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href={`/petlist`}  className="inline-block bg-red rounded-full p-2 md:px-4 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">More +</a>
                  </div>
                </div>
              </div>

              <div id='prj' className="prj03 flex flex-col justify-between  w-3/4 h-full md:w-1/3 rounded-xl overflow-hidden shadow-lg md:h-[30rem]lg:h-[32rem]">
                <img className="w-full" src={multistep} alt="Multistep Form"/>
                <div className="p-6 flex flex-col h-full gap-y-3">
                  <div className="font-bold text-xl mb-1 font-head">Multistep Form</div>
                  <div>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">MUI</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">JS</span>
                  </div>
                  <p className="text-gray-700 text-base">
                    It is a sign-up form the user needs to go through 3~4 steps to sign up, filling out the form. 
                  </p>
                  <hr className='border-gray opacity-40 py-2'/>
                  <div className="flex flex-row justify-between items-center md:h-full">
                    <a href='https://github.com/yoo-ran/multistep_form' target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='https://multistepform.yoorankim.com/' target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href={`/multistep`} className="inline-block bg-red rounded-full p-2 md:px-4 text-sm text-center text-white mb-2 md:text-sm hover:opacity-70">More +</a>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Work Flow */}
          <section id='workSection' className='flex flex-col justify-start items-center h-screen md:h-[42rem] gap-y-36 w-full md:justify-center md:w-10/12 lg:w-8/12'>
            <div className='w-10/12 md:w-8/12 overflow-hidden'>
              <h2 id='workFlow' className='font-head font-black text-2xl md:text-2xl lg:text-5xl'>Work Flow</h2>
            </div>
            <article className='flex flex-col items-center md:flex-row md:justify-center md:gap-x-10 md:w-/12 md:h-72 lg:w-full'>
              <div className=" relative rounded-2xl overflow-hidden shadow-lg bg-lightBlue flex justify-center items-center mb-8 h-52 md:h-72 w-72 md:w-80 lg:h-96 text-6xl lg:text-9xl">
                <FontAwesomeIcon icon={faBrain} id='fIcon01' className='absolute opacity-0 text-black'/>
                <FontAwesomeIcon icon={faMagnifyingGlassChart} id='fIcon02' className='absolute opacity-0 text-black'/>
                <FontAwesomeIcon icon={faChartLine} id='fIcon03' className='absolute opacity-0 text-black'/>
                <FontAwesomeIcon icon={faCode} id='fIcon04' className='absolute opacity-0 text-black'/>
              </div>

              <div className='flex flex-col items-center justify-start gap-y-8 md:w-1/2 lg:w-1/3'>
                <ol className="flex justify-between items-center w-full  font-medium text-center text-gray text-sm md:text-base lg:text-xl">
                  <li className="flex items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 dark:after:border-gray-700">
                      <span className="stepTxt01 font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <p><span>1.&nbsp;</span></p>
                        <span>Think</span>
                      </span>
                  </li>
                  <li className="flex  items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <span className="stepTxt02 font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                          <p>2.&nbsp;</p>
                          <span>Gather</span>
                      </span>
                  </li>
                  <li className="flex items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <span className="stepTxt03 font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                          <p>3.&nbsp;</p>
                          <span>Analyze</span>
                      </span>
                  </li>
                  <li className="flex items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <span className="stepTxt04 font-head flex items-center dark:after:text-gray-500">
                          <p>4.&nbsp;</p>
                          <span>Try</span>
                      </span>
                  </li>
                </ol>
                <div className='relative w-full md:h-56'>
                  <div id='flow01' className='absolute opacity-0'>
                    <strong className='font-head text-2xl lg:text-4xl' >Think</strong>
                    <p className='text-sm md:text-base lg:text-xl mt-4'>I start by clearly understanding and defining the problem or challenge I am facing. I break it down into manageable components. I engage in creative thinking to brainstorm potential solutions and think broadly without evaluating ideas.</p>
                  </div>
                  <div id='flow02' className='absolute opacity-0'>
                    <strong className='font-head text-2xl lg:text-4xl'>Gather</strong>
                    <p className='text-sm md:text-base lg:text-xl mt-4'>I gather relevant information and resources related to the problem. This includes data, research findings, or insights from others who have faced similar challenges. I usually google a lot and look through other&#39;s codes and to instructors and colleagues to get a sense of how they approach the problem and to gain different perspectives on the issue.</p>
                  </div>
                  <div id='flow03' className='absolute opacity-0'>
                    <strong className='font-head text-2xl lg:text-4xl'>Analyze</strong>
                    <p className='text-sm md:text-base lg:text-xl mt-4'>Then, it&#39;s time to assess the feasibility and potential effectiveness of each solution generated during the thinking and gathering phase. I consider each option&#39;s resources required, possible risks, and benefits.
                      I sort out the potential solutions based on their impact and feasibility and identify the most suitable options to move forward with.</p>
                  </div>
                  <div id='flow04' className='absolute opacity-0'>
                    <strong className='font-head text-2xl lg:text-4xl'>Try</strong>
                    <p className='text-sm md:text-base lg:text-xl mt-4'>I take action by trying out the chosen solution. In this step, I keep in mind any potential risks or challenges. I monitor the implementation results. If the solution works well, great! If not, use the experience as a learning opportunity. I iterate on my approach by adjusting or trying alternative solutions based on outcomes.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Testimonials */}
          <section id='testiSection' className='bg-lightBlue px-4 flex items-center justify-center w-full py-10 lg:h-[36rem]'>
            <div className='flex flex-col  justify-center items-center md:flex-row md:gap-x-8 md:w-10/12'>
              <div className='flex flex-row gap-2.5 justify-between items-center w-full overflow-hidden md:w-1/4 md:flex-col-reverse md:items-start'>
                <h2 id='testimonial' className='font-head font-black text-2xl md:row-start-2 md:text-2xl lg:text-5xl'>Testimonials</h2>
                <FontAwesomeIcon icon={faQuoteRight} className='quote text-blue text-8xl md:row-start-1 md:text-center md:col-start-1 md:text-10xl'/>
              </div>
              <div id='testi' className=' md:w-1/3 opacity-0'>
                  <div className='flex flex-col items-center md:w-full '>
                    {items.map((item, index) => (
                      <div key={index} style={{ display: index === currentSlide ? 'block' : 'none',}} className='bg-white rounded-xl min-h-44 w-80 p-4 flex justify-center items-center md:w-full h-64 lg:h-72'>
                        <div className='flex flex-col justify-between h-full'>
                          <p className='text-sm md:text-base lg:text-2xl h-1/2'>{item.p}</p>
                          <div>
                            <h6 className='font-black text-md text-right lg:text-lg'>{item.person}</h6>
                            <span className='block font-thin text-sm text-right lg:text-lg'>{item.status}</span>
                          </div>
                        </div>
                      </div>
                  ))}
                  <div className='flex justify-center gap-x-24 mt-6'>
                    <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length)}><FontAwesomeIcon icon={faChevronLeft}className='text-red text-xl lg:text-4xl' /></button>
                    <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length)}><FontAwesomeIcon icon={faChevronRight}className='text-red text-xl lg:text-4xl' /></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id='contactSection' className='text-center pb-40 px-10 flex flex-col items-center lg:h-[40rem]'>
              <h2 className='font-head font-black text-2xl pb-10 md:pb-20 md:text-2xl lg:text-5xl w-1/2 lg:w-3/4 overflow-hidden'><p id='contact'>Contact</p></h2>
              <div className='grid grid-cols-2 gap-8 text-blue  md:grid-cols-2 md:w-10/12'>
                <a href="https://www.linkedin.com/in/yooran/" target="_blank" className='overflow-hidden h-8 w-32 flex justify-center relative hover:text-black'><p className='absolute cLink md:text-lg lg:text-3xl'>LinkedIn</p></a>
                <a href="https://github.com/yoo-ran" target="_blank" className='overflow-hidden h-8 flex justify-center relative hover:text-black'><p className='absolute cLink md:text-lg lg:text-3xl'>Github</p></a>
              </div>
              
          </section>
        </main>

    </>
  )
}

export default Home;