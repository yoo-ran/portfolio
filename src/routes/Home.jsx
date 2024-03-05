import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowUpRightFromSquare,faArrowRight,
  faBrain, faMagnifyingGlassChart,faChartLine,faCode, faQuoteRight,faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use


function Home() {
  return(
    <>
        <main className='flex flex-col gap-y-40'>
          {/* Banner */}
          <section className='flex flex-col justify-center items-center gap-y-8 text-center pt-32 pb-10 bg-white'>
            <p className='font-head'>Hi, my name is</p>
            <div  className='font-head'>
                <h1 className='font-black text-4xl'>Yooran Kim</h1>
                <p className='text-blue font-bold'>A Front-End Developer</p>
            </div>
            <div className='font-head text-m'>
                <p>Who
                  <span> Think Logically</span>
                  <span> Love Solving Problem</span>
                  <span> Make Efficient Code</span>
                </p>
            </div>
            <button className='bg-blue h-10 w-1/4 rounded-full text-white'>Project <FontAwesomeIcon icon={faChevronRight} /></button>
            <div>
              <img src="src/images/headShot.png" alt="Head Shot" className='w-1/2'/>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className='text-blue text-2xl mt-10'/>
          </section>

          {/* Projects */}
          <section>
            <div className='grid grid-cols-4 gap-2.5 justify-items-center items-cente mb-10'>
              <h2 className='col-start-1 col-span-2 font-head font-black text-2xl'>Project Features</h2>
              <a href="" className='col-start-4 text-red'>More +</a>
            </div>

            <article className='flex flex-col items-center gap-y-20'>

              <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-1 font-head">Weather API</div>
                  <div className="pt-2 pb-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">API</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">Tailwind</span>
                  </div>
                  <p className="text-gray-700 text-base pb-6">
                      The weather app project allows users to check the weather now and the weather forecast.</p>
                  <hr className='border-gray opacity-40'/>
                  <div className="pt-4 pb-2 grid grid-cols-3">
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full py-1 text-m text-center text-white mr-2 mb-2">More +</a>
                  </div>
                </div>
              </div>

              <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-1 font-head">Pet List Filter</div>
                  <div className="pt-2 pb-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">HTML</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">CSS</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">JS</span>
                  </div>
                  <p className="text-gray-700 text-base pb-6">
                    The filter project is to create a filter for the pet lists by the categories that users have chosen. 
                  </p>
                  <hr className='border-gray opacity-40'/>
                  <div className="pt-4 pb-2 grid grid-cols-3">
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full py-1 text-m text-center text-white mr-2 mb-2">More +</a>
                  </div>
                </div>
              </div>
              <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-1 font-head">Multistep Form</div>
                  <div className="pt-2 pb-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">MUI</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">JS</span>
                  </div>
                  <p className="text-gray-700 text-base pb-6">
                    It is a sign-up form the user needs to go through 3~4 steps to sign up, filling out the form and selecting an option. 
                  </p>
                  <hr className='border-gray opacity-40'/>
                  <div className="pt-4 pb-2 grid grid-cols-3">
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full py-1 text-m text-center text-white mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full py-1 text-m text-center text-white mr-2 mb-2">More +</a>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Work Flow */}
          <section className='flex flex-col gap-y-10'>
            <div className='grid grid-cols-4 gap-2.5 justify-items-center items-center'>
              <h2 className='col-start-1 col-span-2 font-head font-black text-2xl'>Work Flow</h2>
              <a href="" className='col-start-4 text-red'>More +</a>
            </div>
            <div className="min-w-72 min-h-72 relative rounded-2xl overflow-hidden shadow-lg bg-lightBlue ">
              <FontAwesomeIcon icon={faBrain} className='absolute text-8xl text-black'/>
              <FontAwesomeIcon icon={faMagnifyingGlassChart} />
              <FontAwesomeIcon icon={faChartLine} />
              <FontAwesomeIcon icon={faCode} />
            </div>

            <ol className="flex justify-center items-center w-full text-lg font-medium text-center dark:text-gray-400">
              <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      Think
                  </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                      <span className="me-2">2</span>
                      Gather
                  </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="font-head flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                      <span className="me-2">3</span>
                      Gather
                  </span>
              </li>
              <li className="font-head flex items-center">
                  <span className="me-2">4</span>
                  Try
              </li>
            </ol>
            <div>
              <div>
                <strong className='font-head text-2xl' >Think</strong>
                <p>I start by clearly understanding and defining the problem or challenge I am facing. I break it down into manageable components. I engage in creative thinking to brainstorm potential solutions and think broadly without evaluating ideas.</p>
              </div>
              <div>
                <strong className='font-head text-2xl'>Gather</strong>
                <p>I gather relevant information and resources related to the problem. This may include data, research findings, or insights from others who have faced similar challenges. I usually google a lot and look through other's codes and to instructors and colleagues to get a sense of how they approach the problem, what method they use, and to gain different perspectives on the issue. Sometimes, a fresh viewpoint can lead to new insights.</p>
              </div>
              <div>
                <strong className='font-head text-2xl'>Analyze</strong>
                <p>Then, it's time to assess the feasibility and potential effectiveness of each solution generated during the thinking and gathering phase. I consider each option's resources required, possible risks, and benefits.
                  I sort out the potential solutions based on their impact and feasibility and identify the most suitable options to move forward with.</p>
              </div>
              <div>
                <strong className='font-head text-2xl'>Try</strong>
                <p>I take action by trying out the chosen solution. In this step, I keep in mind any potential risks or challenges. I monitor the implementation results. If the solution works well, great! If not, use the experience as a learning opportunity. I iterate on my approach by adjusting or trying alternative solutions based on outcomes.</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className='bg-lightBlue px-4 flex flex-col py-8'>
            <div className='grid grid-cols-2 gap-2.5 justify-items-center items-center'>
              <h2 className='col-start-1  font-head font-black text-2xl'>Testimonials</h2>
              <FontAwesomeIcon icon={faQuoteRight} className='text-blue text-8xl'/>
            </div>
            
          </section>

          {/* Contact */}
          <section className='text-center pb-40 px-10'>
              <h2 className='font-head font-black text-2xl pb-10'>Contact</h2>
              <div className='grid grid-cols-2 gap-8 text-blue text-lg'>
                <a href="https://www.linkedin.com/in/yooran/">LinkedIn</a>
                <a href="https://github.com/yoo-ran">Github</a>
                <a href="mailto:yuranm80@gmail.com">Email</a>
                <a href="tel:+12365589103">Phone</a>
              </div>
          </section>
        </main>

    </>
  )
}

export default Home;