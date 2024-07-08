import { useEffect, useRef,useState, useContext }  from 'react';
import { StateContext } from '../routes/StateContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare,faArrowRight,faAnglesDown,
  faBrain, faMagnifyingGlassChart,faChartLine,faCode, faQuoteRight,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectData } from '../data/projectData';

import headshot from "../images/headshot.webp"


import SEO from '../components/Seo';


gsap.registerPlugin(useGSAP, ScrollTrigger);


function Home() {

  const greet = useRef(null);
  const name = useRef(null);
  const prjBtn = useRef(null);
  const container = useRef(null);
  const tl = useRef();
  const [category,setCategory] = useState(projectData)
  const { sharedState } = useContext(StateContext);



  useGSAP(()=>{
    gsap.fromTo([greet.current, name.current], { duration: 1, x: -100, opacity: 0.5 }, { duration: 1, x: 0, opacity: 1 });
    gsap.fromTo(prjBtn.current, {opacity: 0.1 }, { duration: 1,  opacity: 1 });
    // Select all elements within the container
    const whos = gsap.utils.toArray('.who');
    const underlines = gsap.utils.toArray('.homeUnder');
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
    { p: "Their dedication, creativity, and ability to tackle complexity make them a top student. I have no doubt they'll excel in their future endeavors.", person: 'Kimia Ashrafi', status:"Student" },
    { p: "Having witnessed Yooran's journey in frontend development, I'm truly impressed. Their knack for problem-solving and passion for coding set them apart. With their drive and skills, success is inevitable.", person: 'Eunsong Choi', status:"Student" },
  ];

  
  return(
    <div id='home' className={`w-screen transition-[width] 
    ${sharedState == "true" ? 
    "md:w-[calc(100%-8rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-11rem)] 2xl:w-[calc(100%-13rem)] 3xl:w-[calc(100%-16rem)]":
    "md:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] 2xl:w-[calc(100%-7rem)] 3xl:w-[calc(100%-8rem)]"} `} 
    >
        <SEO
          title='Yooran KIM'
          description="Welcome to the portfolio of Yooran Kim, a skilled frontend developer passionate about creating responsive and user-friendly web experiences. Explore a collection of projects showcasing expertise in HTML5, CSS3, JavaScript, React, and more. From engaging user interfaces to seamless interactions, each project demonstrates a commitment to quality and innovation. "
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, HTML, CSS, JavaScript, React, portfolio"
          url="https://yoorankim.com/"
        />
        <main className='flex w-full flex-col items-center -z-50 gap-y-20 md:gap-y-30'>
          {/* Banner */}
          <section className='flex w-full justify-center items-end pt-24 bg-white md:flex-row md:h-[30rem] lg:h-[40rem] 2xl:h-[50rem] 3xl:h-[52rem]'>
            <div className='flex flex-col justify-between items-center flex-wrap md:items-end gap-y-8 md:flex-row md:h-full md:w-8/12 lg:w-5/12 lg:gap-x-20'>
              <article className='flex flex-col md:items-start justify-center gap-y-4 md:gap-y-6 lg:gap-y-12 w-8/12 md:h-full md:w-1/2  lg:w-1/3'>
                <p className='font-head text-sm lg:text-xl 2xl:text-2xl 3xl:text-3xl w-full' ref={greet}>Hi, my name is</p>
                <div className='font-head flex flex-col items-start w-full' ref={name}>
                    <h1 className='font-black text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl'>Yooran Kim</h1>
                    <p className='text-blue font-bold md:text-base lg:text-xl 3xl:text-2xl'>A Front-End Developer</p>
                </div>
                <div className='font-head text-m flex w-full md:justify-end'>
                    <p className='overflow-hidden w-full text-left relative md:text-lg lg:text-xl 3xl:text-2xl' ref={container}>Who &nbsp;
                      <span className='who absolute'> Thinks Logically <span className='underline homeUnder'></span></span>
                      <span className='who absolute'> Loves Solving Problem <span className='underline homeUnder'></span></span>
                      <span className='who absolute'> Makes Efficient Code  <span className='underline homeUnder'></span></span>
                    </p>
                </div>
                <a href={`/projects`} 
                className='flex justify-center items-center gap-x-4 bg-blue text-sm  py-1 md:px-4 lg:px-6 2xl:px-8 2xl:py-2 rounded-full text-white transition ease-in-out hover:bg-gray cursor-pointer lg:text-xl 3xl:text-2xl'>
                  Project <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </article>

              <article className='group flex relative justify-center relative md:items-end md:w-6/12 lg:w-5/12 md:h-full'>
                <img src={headshot} alt="Head Shot" className='w-1/2 md:w-full z-10 object-contain'/>
              </article>
            </div>
          </section>

          <p><FontAwesomeIcon icon={faAnglesDown} className='animate-bounce text-gray md:text-xl lg:text-2xl'/></p>

          {/* Projects */}
          <section id='projSection' className='flex flex-col items-center lg:gap-y-8 3xl:gap-y-20 md:w-10/12 xl:w-8/12'>
            <div className='grid grid-cols-4 gap-2.5 justify-between items-center w-10/12 md:w-full overflow-hidden'>
              <h2 id='project' className='col-span-3 font-head font-black text-2xl md:text-2xl lg:text-3xl 3xl:text-4xl'>Project Features</h2>
              <a href={`/projects`} id='more' className='text-red md:col-end-5 text-end text-sm md:text-lg lg:text-lg 3xl:text-2xl hover:text-gray'>More +</a>
            </div>

            <article className='overflow-hidden flex flex-col justify-center items-center gap-y-20 lg:flex-row md:w-10/12 lg:w-full md:gap-x-8 pb-5 relative'>
            {category.slice(0, 3).map((item) => (
                <div key={item.id} id='prj' className={`prj0${item.id} flex flex-col justify-between items-center w-3/4 h-full md:w-full rounded-xl overflow-hidden shadow-lg md:min-h-[20rem] 3xl:h-[44rem]`}>
                      <img className="w-full md:h-52 2xl:h-56 3xl:h-72 object-cover	object-center" src={item.img} alt={item.img}/>
                      <div className="p-6 flex flex-col justify-between h-full gap-y-4 2xl:gap-y-0 md:h-[18rem] lg:h-[20rem] xl:h-[22rem] 3xl:h-[28rem]">
                        <div className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl font-head">{item.title}</div>
                        <div className="pt-2 pb-2 2xl:p-0">
                          {item.keywords.map((keyword, index) => (
                            <span key={index} className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2 3xl:mr-4 2xl:px-4 2xl:py-2 2xl:text-base 3xl:text-lg 2xl:mb-0">{keyword}</span>
                          ))}
                        </div>
                        <p className="text-gray-700 text-base pb-6 md:h-[4rem] 3xl:h-[6rem] 2xl:text-xl 3xl:text-2xl ">
                          {item.descrp}
                        </p>
                        <div className='md:h-16 3xl:h-20'>
                          <hr className='border-gray opacity-40 pt-2'/>
                          <div className="flex flex-row justify-between items-center md:h-full ">
                            <a href={item.gitLink}  target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-3 text-sm text-center text-white md:text-sm 2xl:text-lg 3xl:text-xl 2xl:px-5 3xl:px-7 3xl:py-3 hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                            <a href={item.webLink} target='_blank' className="inline-block bg-blue rounded-full p-2 md:px-3 text-sm text-center text-white md:text-sm 2xl:text-lg 3xl:text-xl 2xl:px-5 3xl:px-7 3xl:py-3  hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            <a href={item.more} className="inline-block bg-red rounded-full p-2 md:px-3 text-sm text-center text-white md:text-sm 2xl:text-lg 3xl:text-xl 2xl:px-5 3xl:px-7 3xl:py-3  hover:opacity-70">More +</a>
                          </div>
                        </div>
                      </div>
                </div>
            ))}
            </article>
          </section>

          {/* Work Flow */}
          <section id='workSection' className='flex flex-col justify-start items-center h-lvh md:h-[38rem] lg:h-[42rem] gap-y-36 lg:gap-y-16 w-full md:justify-center md:w-10/12 xl:w-8/12'>
            <div className='w-10/12 md:w-full overflow-hidden'>
              <h2 id='workFlow' className='font-head font-black text-2xl md:text-2xl lg:text-3xl 3xl:text-4xl'>Work Flow</h2>
            </div>
            <article className='flex flex-col items-center lg:flex-row md:justify-between md:items-start lg:gap-x-20 md:gap-x-10 md:h-72 lg:w-full '>
              <div className=" relative rounded-2xl overflow-hidden shadow-lg bg-lightBlue flex justify-center items-center mb-8 h-52 md:h-52 md:w-52 w-72 md:w-80 lg:w-1/3 lg:h-96 text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl">
                <FontAwesomeIcon icon={faBrain} id='fIcon01' className='absolute opacity-0 text-black'/>
                <FontAwesomeIcon icon={faMagnifyingGlassChart} id='fIcon02' className='absolute opacity-0 text-black'/>
                <FontAwesomeIcon icon={faChartLine} id='fIcon03' className='absolute opacity-0 text-black'/>
                <FontAwesomeIcon icon={faCode} id='fIcon04' className='absolute opacity-0 text-black'/>
              </div>

              <div className='flex flex-col items-center justify-start gap-y-8 md:w-1/2 lg:w-1/2 2xl:w-8/12 2xl:gap-y-12'>
                <ol className="flex justify-between items-center w-full  font-medium text-center text-gray text-sm md:text-base lg:text-xl 2xl:text-2xl">
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
                <div className='relative w-full md:h-56 text-2xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl'>
                  <div id='flow01' className='absolute opacity-0'>
                    <strong className='font-head' >Think</strong>
                    <p className='text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-2xl leading-relaxed mt-4'>I start by clearly understanding and defining the problem or challenge I am facing. I break it down into manageable components. I engage in creative thinking to brainstorm potential solutions and think broadly without evaluating ideas.</p>
                  </div>
                  <div id='flow02' className='absolute opacity-0'>
                    <strong className='font-head'>Gather</strong>
                    <p className='text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-2xl leading-relaxed mt-4'>I gather relevant information and resources related to the problem. This includes data, research findings, or insights from others who have faced similar challenges. I usually google a lot and look through other&#39;s codes and to instructors and colleagues to get a sense of how they approach the problem and to gain different perspectives on the issue.</p>
                  </div>
                  <div id='flow03' className='absolute opacity-0'>
                    <strong className='font-head'>Analyze</strong>
                    <p className='text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-2xl leading-relaxed mt-4'>Then, it&#39;s time to assess the feasibility and potential effectiveness of each solution generated during the thinking and gathering phase. I consider each option&#39;s resources required, possible risks, and benefits.
                      I sort out the potential solutions based on their impact and feasibility and identify the most suitable options to move forward with.</p>
                  </div>
                  <div id='flow04' className='absolute opacity-0'>
                    <strong className='font-head'>Try</strong>
                    <p className='text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-2xl leading-relaxed mt-4'>I take action by trying out the chosen solution. In this step, I keep in mind any potential risks or challenges. I monitor the implementation results. If the solution works well, great! If not, use the experience as a learning opportunity. I iterate on my approach by adjusting or trying alternative solutions based on outcomes.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Testimonials */}
          <section id='testiSection' className='bg-lightBlue px-4 flex items-center justify-center w-full py-10 lg:h-[36rem]'>
            <div className='flex flex-col justify-center items-center md:flex-row md:gap-x-8 md:w-10/12'>
              <div className='flex flex-row gap-2.5 justify-between items-center w-full overflow-hidden md:w-1/4 md:flex-col-reverse md:items-start'>
                <h2 id='testimonial' className='font-head font-black text-2xl md:row-start-2 md:text-2xl lg:text-3xl 3xl:text-4xl'>Testimonials</h2>
                <FontAwesomeIcon icon={faQuoteRight} className='quote text-blue text-8xl md:row-start-1 md:text-center md:col-start-1 md:text-10xl'/>
              </div>
              <div id='testi' className=' md:w-1/2 opacity-0'>
                  <div className='flex flex-col items-center md:w-full '>
                    {items.map((item, index) => (
                      <div key={index} style={{ display: index === currentSlide ? 'block' : 'none',}} className='bg-white rounded-xl min-h-44 w-80 p-4 flex justify-center items-center md:w-full h-64 lg:h-72'>
                        <div className='flex flex-col justify-between h-full'>
                          <p className='text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl h-1/2'>{item.p}</p>
                          <div>
                            <h6 className='font-black text-md text-right lg:text-lg 2xl:text-xl'>{item.person}</h6>
                            <span className='block font-thin text-sm text-right lg:text-lg 2xl:text-xl'>{item.status}</span>
                          </div>
                        </div>
                      </div>
                  ))}
                  <div className='flex justify-center gap-x-24 mt-6'>
                    <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length)}><FontAwesomeIcon icon={faChevronLeft}className='text-red text-xl lg:text-4xl hover:text-gray' /></button>
                    <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length)}><FontAwesomeIcon icon={faChevronRight}className='text-red text-xl lg:text-4xl hover:text-gray' /></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id='contactSection' className='text-center pb-40 px-10 flex flex-col justify-center items-center lg:h-[30rem]'>
              <h2 className='font-head font-black text-2xl pb-10 md:pb-20 md:text-2xl lg:text-4xl 3xl:text-5xl w-1/2 lg:w-3/4 overflow-hidden'><p id='contact'>Contact</p></h2>
              <div className='grid grid-cols-2 gap-8 text-blue  md:grid-cols-2 md:w-10/12'>
                <a href="https://www.linkedin.com/in/yooran/" target="_blank" className='overflow-hidden h-8 w-32 flex justify-center relative hover:text-black'><p className='absolute cLink md:text-lg lg:text-2xl 3xl:text-3xl'>LinkedIn</p></a>
                <a href="https://github.com/yoo-ran" target="_blank" className='overflow-hidden h-8 flex justify-center relative hover:text-black'><p className='absolute cLink md:text-lg lg:text-2xl 3xl:text-3xl'>Github</p></a>
              </div>
          </section>
        </main>

    </div>
  )
}

export default Home;