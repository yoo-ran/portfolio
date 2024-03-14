import React, {  useRef,useState, useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowUpRightFromSquare,faArrowRight, faCircleCheck,
  faBrain, faMagnifyingGlassChart,faChartLine,faCode, faQuoteRight,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);




function Home() {
  const greet = useRef(null);
  const name = useRef(null);
  const prjBtn = useRef(null);
  const container = useRef(null);
  const tl = useRef();


  useGSAP(() => {
    gsap.fromTo([greet.current, name.current], { duration: 1, x: -100, opacity: 0.5 }, { duration: 1, x: 0, opacity: 1 });
    gsap.fromTo(prjBtn.current, {opacity: 0.1 }, { duration: 1,  opacity: 1 });

      // Select all elements within the container
      const whos = gsap.utils.toArray('.who');
      const underlines = gsap.utils.toArray('.underline');
      tl.current = gsap
        .timeline({
          repeat: -1
        })
        .fromTo(whos[0], {y:100 }, {y:0})
        .to(underlines[0], { width:"100%"})
        .to(whos[0], {duration:1.5, y:100, delay:2 })
        .fromTo(whos[1], {y:100 }, {y:0})
        .to(underlines[1], { width:"100%"})
        .to(whos[1], {duration:1.5, y:100, delay:2 })
        .fromTo(whos[2], {y:100 }, {y:0})
        .to(underlines[2], { width:"100%"})
        .to(whos[2], {duration:1.5,y:100, delay:2 })

        gsap.from("#project",{
          scrollTrigger: {
            trigger: "#projSection",
            start: "top 100%",
            end: "100 center",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from("#more",{
          scrollTrigger: {
            trigger: "#projSection",
            start: "top 100%",
            end: "100 center",
            scrub: true,
          },
          xPercent:100
        });
        gsap.from("#workFlow",{
          scrollTrigger: {
            trigger: "#workSection",
            start: "top 100%",
            end: "100 center",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from("#testimonial",{
          scrollTrigger: {
            trigger: "#testiSection",
            start: "top 100%",
            end: "100 center",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from("#contact",{
          scrollTrigger: {
            trigger: "#contactSection",
            start: "-50 bottom",
            end: "center bottom",
            scrub: true,
          },
          xPercent:-100
        });
        gsap.from(".cLink",{
          scrollTrigger: {
            trigger: "#contactSection",
            start: "50 bottom",
            end: "bottom bottom",
            scrub: true,
            markers:true
          },
          yPercent: -300
        });
        gsap.to('#workSection', {
          scrollTrigger: {
            pin: '#workSection',
            end: '+=4000s',
            pinSpacing: true,
            markers:true
          },
        });
        gsap.to(['#flow01',"#fIcon01"], {
          scrollTrigger: {
            trigger: '#fIcon01',
            toggleActions: 'play reverse play reverse',
            start: '0s',
            end: '+=1000s',
          },
          opacity: 1
        });
      
        gsap.to(['#flow02',"#fIcon02"], {
          scrollTrigger: {
            trigger: '#flow02',
            toggleActions: 'play reverse play reverse',
            start: '+=1000s',
            end: '+=1000s',
          },
          opacity: 1,
        });
      
        gsap.to(['#flow03',"#fICon03"], {
          scrollTrigger: {
            trigger: '#flow03',
            toggleActions: 'play reverse play reverse',
            start: '+=2000s',
            end: '+=1000s',
          },
          opacity: 1,
        });
      
        gsap.to(['#flow04',"#fIcon04"], {
          scrollTrigger: {
            trigger: '#flow04',
            toggleActions: 'play reverse play reverse',
            start: '+=3000s',
            end: '+=1000s',
          },
          opacity: 1,
        });
    }
    // https://codepen.io/GreenSock/pen/QWEGPeQ
  )

  const items = [
    { p: 'This is the content of slide 1.', person: 'Richard', status:"BCIT Instructor" },
    { p: 'This is the content of slide 2.', person: 'p2', status:"Student" },
    { p: 'This is the content of slide 3', person: 'p4', status:"Manager" },
  ];

  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
 }, [items.length]);


  return(
    <>
        <main className='flex flex-col gap-y-40'>

          {/* Banner */}
          <section className='flex flex-col justify-center items-center gap-y-8 text-center pt-32 pb-10 bg-white md:grid md:grid-cols-2 '>
            <article className='flex flex-col items-center gap-y-6'>
              <p className='font-head' ref={greet}>Hi, my name is</p>
              <div className='font-head' ref={name}>
                  <h1 className='font-black text-4xl'>Yooran Kim</h1>
                  <p className='text-blue font-bold'>A Front-End Developer</p>
              </div>
              <div className='font-head text-m flex w-full md:w-1/3 '>
                  <p className='overflow-hidden w-full text-left relative' ref={container}>Who &nbsp;
                    <span className='who absolute'> Think Logically <span className='underline'></span></span>
                    <span className='who absolute'> Love Solving Problem  <span className='underline'></span></span>
                    <span className='who absolute'> Make Efficient Code  <span className='underline'></span></span>
                  </p>
              </div>
              <a href={'/projects'} ref={prjBtn} className='flex justify-center items-center gap-x-4 bg-blue h-8 w-1/2 rounded-full text-white transition ease-in-out hover:bg-gray cursor-pointer'>Project<FontAwesomeIcon icon={faChevronRight} /></a>
            </article>
            <div className='flex justify-center relative'>
              <img src="src/images/headShot.png" alt="Head Shot" className='w-1/2 z-10'/>
              <div className='blob w-2/3 h-4/5 absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-lightBlue to-blue shadow-lg shadow-blue-500 animate-[morpheus_8s_ease-in-out_infinite]'></div>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className='text-blue text-2xl mt-10 w-full md:col-span-2'/>
          </section>

          {/* Projects */}
          <section id='projSection' className='flex flex-col items-center gap-y-10 md:gap-y-20 md:grid md:grid-rows-2 md:place-items-center'>
            <div className='grid grid-cols-4 gap-2.5 justify-between items-center mb-10 w-10/12 md:w-8/12'>
              <h2 id='project' className='col-span-3 font-head font-black text-2xl'>Project Features</h2>
              <a href="" id='more' className='text-red md:col-end-5 text-end'>More +</a>
            </div>

            <article className='flex flex-col items-center gap-y-20 md:grid md:grid-cols-3 md:w-10/12'>

              <div className="flex flex-col justify-between max-w-sm rounded-xl overflow-hidden shadow-lg md:h-80">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 pb-6 flex flex-col gap-y-3">
                  <div className="font-bold text-xl mb-1 font-head">Weather API</div>
                  <div>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">API</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">Tailwind</span>
                  </div>
                  <p className="text-gray-700 text-base">
                      The weather app project allows users to check the weather now and the weather forecast.</p>
                  <hr className='border-gray opacity-40 py-2'/>
                  <div className="grid grid-cols-3 items-center md:h-full">
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">More +</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between max-w-sm rounded-xl overflow-hidden shadow-lg md:h-80">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 pb-6 flex flex-col gap-y-3">
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
                  <div className="grid grid-cols-3 items-center md:h-full">
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">More +</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between max-w-sm rounded-xl overflow-hidden shadow-lg md:h-80">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 pb-6 flex flex-col gap-y-3">
                  <div className="font-bold text-xl mb-1 font-head">Multistep Form</div>
                  <div>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">MUI</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">JS</span>
                  </div>
                  <p className="text-gray-700 text-base">
                    It is a sign-up form the user needs to go through 3~4 steps to sign up, filling out the form and selecting an option. 
                  </p>
                  <hr className='border-gray opacity-40 py-2'/>
                  <div className="grid grid-cols-3 items-center md:h-full">
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full py-1 text-m text-center text-white mr-2 mb-2 md:text-sm hover:opacity-70">More +</a>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Work Flow */}
          <section id='workSection' className='flex flex-col justify-center items-center gap-y-8 md:gap-y-20 h-screen'>
            <div className='w-10/12 md:w-8/12 overflow-hidden'>
              <h2 id='workFlow' className='font-head font-black text-2xl'>Work Flow</h2>
            </div>
            <article className='md:grid md:grid-cols-2 gap-x-4 md:w-10/12'>
              <div className="min-w-72 min-h-72 relative rounded-2xl overflow-hidden shadow-lg bg-lightBlue flex justify-center items-center mb-8">
                <FontAwesomeIcon icon={faBrain} id='fIcon01' className='absolute opacity-0 text-8xl text-black'/>
                <FontAwesomeIcon icon={faMagnifyingGlassChart} id='fIcon02' className='absolute opacity-0  text-8xl text-black'/>
                <FontAwesomeIcon icon={faChartLine} id='fIcon03' className='absolute opacity-0  text-8xl text-black'/>
                <FontAwesomeIcon icon={faCode} id='fIcon04' className='absolute opacity-0  text-8xl text-black'/>
              </div>

              <div>
                <ol className="flex justify-center items-center w-full text-lg font-medium text-center dark:text-gray-400 pb-10 text-gray">
                  <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <span className="font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <p><span>1</span><FontAwesomeIcon icon={faCircleCheck} /></p>
                        <span className='stepTxt01'>Think</span>
                      </span>
                  </li>
                  <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <span className="font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                          <p>2</p>
                          <span className='stepTxt02'>Gather</span>
                      </span>
                  </li>
                  <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <span className="font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                          <p>3</p>
                          <span className='stepTxt03'>Analyze</span>
                      </span>
                  </li>
                  <li className="font-head flex items-center">
                      <span className="font-head flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                          <p>4</p>
                          <span className='stepTxt04'>Try</span>
                      </span>
                  </li>
                </ol>
                <div className='relative h-56'>
                  <div id='flow01' className='absolute opacity-0'>
                    <strong className='font-head text-2xl' >Think</strong>
                    <p>I start by clearly understanding and defining the problem or challenge I am facing. I break it down into manageable components. I engage in creative thinking to brainstorm potential solutions and think broadly without evaluating ideas.</p>
                  </div>
                  <div id='flow02' className='absolute opacity-0'>
                    <strong className='font-head text-2xl'>Gather</strong>
                    <p>I gather relevant information and resources related to the problem. This may include data, research findings, or insights from others who have faced similar challenges. I usually google a lot and look through other's codes and to instructors and colleagues to get a sense of how they approach the problem, what method they use, and to gain different perspectives on the issue. Sometimes, a fresh viewpoint can lead to new insights.</p>
                  </div>
                  <div id='flow03' className='absolute opacity-0'>
                    <strong className='font-head text-2xl'>Analyze</strong>
                    <p>Then, it's time to assess the feasibility and potential effectiveness of each solution generated during the thinking and gathering phase. I consider each option's resources required, possible risks, and benefits.
                      I sort out the potential solutions based on their impact and feasibility and identify the most suitable options to move forward with.</p>
                  </div>
                  <div id='flow04' className='absolute opacity-0'>
                    <strong className='font-head text-2xl'>Try</strong>
                    <p>I take action by trying out the chosen solution. In this step, I keep in mind any potential risks or challenges. I monitor the implementation results. If the solution works well, great! If not, use the experience as a learning opportunity. I iterate on my approach by adjusting or trying alternative solutions based on outcomes.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Testimonials */}
          <section id='testiSection' className='bg-lightBlue px-4 flex flex-col gap-y-4 py-8'>
            <div className='grid grid-cols-2 gap-2.5 justify-between items-center w-full overflow-hidden'>
              <h2 id='testimonial' className='col-start-1 font-head font-black text-2xl'>Testimonials</h2>
              <FontAwesomeIcon icon={faQuoteRight} className='col-start-3 text-blue text-8xl md:row-start-1'/>
            </div>
            <div>
                <div>
                  {items.map((item, index) => (
                    <div key={index} style={{ display: index === currentSlide ? 'block' : 'none',}} className='bg-white rounded-xl p-4 min-h-40 flex justify-center items-center'>
                      <div className='flex flex-col justify-between h-32'>
                        <p className='text-sm h-1/2'>{item.p}</p>
                        <div>
                          <h6 className='font-black text-md text-right'>{item.person}</h6>
                          <span className='block font-thin text-sm text-right'>{item.status}</span>
                        </div>
                      </div>
                    </div>
                ))}
                <div className='flex justify-center gap-x-10 mt-6'>
                  <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length)}><FontAwesomeIcon icon={faChevronLeft}className='text-red text-xl' /></button>
                  <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length)}><FontAwesomeIcon icon={faChevronRight}className='text-red text-xl' /></button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id='contactSection' className='text-center pb-40 px-10 md:flex md:flex-col md:items-center overflow-hidden'>
              <h2 id='contact' className='font-head font-black text-2xl pb-10 md:pb-20'>Contact</h2>
              <div className='grid grid-cols-2 gap-8 text-blue  md:grid-cols-4 md:w-10/12'>
                <a href="https://www.linkedin.com/in/yooran/" target="_blank" className='overflow-hidden h-8 flex justify-center relative hover:text-black'><p className='absolute cLink'>LinkedIn</p></a>
                <a href="https://github.com/yoo-ran" target="_blank" className='overflow-hidden h-8 flex justify-center relative hover:text-black'><p className='absolute cLink'>Github</p></a>
                <a href="mailto:yuranm80@gmail.com" target="_blank" className='overflow-hidden h-8 flex justify-center relative hover:text-black'><p className='absolute cLink'>Email</p></a>
                <a href="tel:+12365589103" target="_blank" className='overflow-hidden h-8 flex justify-center relative hover:text-black'><p className='absolute cLink'>Phone</p></a>
              </div>
          </section>
        </main>

    </>
  )
}

export default Home;