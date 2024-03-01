import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowUpRightFromSquare,faArrowRight,
  faBrain, faMagnifyingGlassChart,faChartLine,faCode, faQuoteRight } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use


function Home() {
  return(
    <>
        <main>
          {/* Banner */}
          <section>
            <p>Hi, my name is</p>
            <div>
                <h1>Yooran Kim</h1>
                <p>A Front-End Developer</p>
            </div>
            <div>
                <p>Who
                  <span> Think Logically</span>
                  <span> Love Solving Problem</span>
                  <span> Make Efficient Code</span>
                </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </section>
          <section>
            <div>
              <h2>Project Features</h2>
              <a href="">More +</a>
            </div>

            {/* Projects */}
            <article>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Weather API</div>
                  <div className="pt-4 pb-2">
                    <span className="inline-block bg-gwhite rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">API</span>
                    <span className="inline-block bg-gwhite rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">React</span>
                    <span className="inline-block bg-gwhite rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">Tailwind</span>
                  </div>
                  <p className="text-gray-700 text-base">
                      The weather app project allows users to check the weather now and the weather forecast.</p>
                  <div className="pt-4 pb-2">
                    <a href='#' className="inline-block bg-blue rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">More +</a>
                  </div>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Pet List Filter</div>
                  <div className="pt-4 pb-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">HTML</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">CSS</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">JS</span>
                  </div>
                  <p className="text-gray-700 text-base">
                    The filter project is to create a filter for the pet lists by the categories that users have chosen. 
                  </p>
                  <div className="pt-4 pb-2">
                    <a href='#' className="inline-block bg-blue rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">More +</a>
                  </div>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Multistep Form</div>
                  <div className="pt-4 pb-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">MUI</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">React</span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">JS</span>
                  </div>
                  <p className="text-gray-700 text-base">
                    It is a sign-up form the user needs to go through 3~4 steps to sign up, filling out the form and selecting an option. 
                  </p>
                  <div className="pt-4 pb-2">
                    <a href='#' className="inline-block bg-blue rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='#' className="inline-block bg-blue rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href='#' className="inline-block bg-red rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">More +</a>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Work Flow */}
          <section>
            <div>
              <h2>Work Flow</h2>
              <a href="">More +</a>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <FontAwesomeIcon icon={faBrain} />
              <FontAwesomeIcon icon={faMagnifyingGlassChart} />
              <FontAwesomeIcon icon={faChartLine} />
              <FontAwesomeIcon icon={faCode} />
            </div>

            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                      <span className="me-2">2</span>
                      Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
              </li>
              <li className="flex items-center">
                  <span className="me-2">3</span>
                  Confirmation
              </li>
            </ol>
            <div>
              <div>
                <strong>Think</strong>
                <p>I start by clearly understanding and defining the problem or challenge I am facing. I break it down into manageable components. I engage in creative thinking to brainstorm potential solutions and think broadly without evaluating ideas.</p>
              </div>
              <div>
                <strong>Gather</strong>
                <p>I gather relevant information and resources related to the problem. This may include data, research findings, or insights from others who have faced similar challenges. I usually google a lot and look through other's codes and to instructors and colleagues to get a sense of how they approach the problem, what method they use, and to gain different perspectives on the issue. Sometimes, a fresh viewpoint can lead to new insights.</p>
              </div>
              <div>
                <strong>Analyze</strong>
                <p>Then, it's time to assess the feasibility and potential effectiveness of each solution generated during the thinking and gathering phase. I consider each option's resources required, possible risks, and benefits.
                  I sort out the potential solutions based on their impact and feasibility and identify the most suitable options to move forward with.</p>
              </div>
              <div>
                <strong>Try</strong>
                <p>I take action by trying out the chosen solution. In this step, I keep in mind any potential risks or challenges. I monitor the implementation results. If the solution works well, great! If not, use the experience as a learning opportunity. I iterate on my approach by adjusting or trying alternative solutions based on outcomes.</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <div>
              <FontAwesomeIcon icon={faQuoteRight} />
              <h2>Testimonials</h2>
            </div>
            

<div id="indicators-carousel" className="relative w-full" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


            
          </section>

          {/* Contact */}
          <section>
              <h2>Contact</h2>
              <div>
                <a href="">LinkedIn</a>
                <a href="">Github</a>
                <a href="mailto:yuranm80@gmail.com">Email</a>
                <a href="tel:+12365589103">Phone</a>
              </div>
          </section>
        </main>

    </>
  )
}

export default Home;