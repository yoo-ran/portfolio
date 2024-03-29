import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowUpRightFromSquare, faFaceSmileWink} from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

import multistep from "../images/multistep.png"
import petlist from "../images/petlist.png"
import weather from "../images/weather.png"

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger);


function Projects() {
  const tl = useRef();
  
  useGSAP(() => {

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#prjSection",
        start: "300 bottom",
        end: "bottom bottom",
        scrub: true,
        markers: true
      }
    })
    
    Flip.fit("#circle", "#prj01", {
      opacity:1,
      duration: 0.1, 
      ease: "power1.inOut"
    })
    tl.current.add(Flip.fit("#circle", "#prj01", {
      duration: 2, 
      ease: "power4.in"
    })).add(Flip.fit("#circle", "#prj02", {
      duration: 2, 
      ease: "power4.in"
    })).add(Flip.fit("#circle", "#prj03", {
      duration: 2, 
      ease: "power4.in"
    }))
    
  });
    


   
  return(
    <div>
      {/* Banner */}
      <section className='h-80 bg-white text-center flex justify-center items-center z-10'>
        {/* Scroll box */}
        <p id='circle' className='absolute border-2 border-lightBlue opacity-0 rounded-lg'></p>
        <h2 className='font-bold font-head text-3xl z-50 text-blue'>Projects <FontAwesomeIcon icon={faFaceSmileWink} className='text-blue'/></h2>
      </section>


      {/* Projects */}
      <section id='prjSection' className='my-20 flex flex-col justify-center items-center gap-y-32'>

          <div id='prj01' className="z-10 overflow-hidden flex flex-col items-center gap-y-8 md:flex-row md:w-6/12 md:h-72 md:gap-x-4 p-4">
            <img className="w-full md:w-1/2 md:h-full md:object-cover rounded-lg" src={weather} alt="Weather API"/>
            <div className="px-6 py-4 w-full md:w-3/4">
              <div className="font-bold text-xl mb-1 font-head">Weather API</div>
              <div className="pt-2 pb-2">
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">API</span>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">Tailwind</span>
              </div>
              <p className="text-gray-700 text-base pb-6">
                  The weather app project allows users to check the weather now and the weather forecast.</p>
              <hr className='border-gray border-dashed opacity-40'/>
              <div className="pt-4 pb-2 grid grid-cols-3">
                <a href='#' className="inline-block rounded-full p-1 text-m text-center text-blue mb-2 hover:text-gray">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='#' className="inline-block rounded-full p-1 text-m text-center text-blue mb-2 hover:text-gray">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href={`/weather`} className="inline-block rounded-full py-1 text-m text-center text-red mr-2 mb-2 hover:text-gray">More +</a>
              </div>
            </div>
          </div>

          <div id='prj02' className="z-10 overflow-hidden flex flex-col items-center gap-y-8 md:flex-row md:w-6/12 md:h-72 md:gap-x-4 p-4">
              <img className="w-full md:w-1/2  md:h-full md:object-cover rounded-lg" src={petlist} alt="Pet List Filter"/>
            <div className="px-6 py-4 w-full md:w-3/4">
                <div className="font-bold text-xl mb-1 font-head">Pet List Filter</div>
                <div className="pt-2 pb-2">
                  <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">JS</span>
              </div>
              <p className="text-gray-700 text-base pb-6">
                  The filter project is to create a filter for the pet lists by the categories that users have chosen. 
              </p>
              <hr className='border-gray border-dashed opacity-40'/>
              <div className="pt-4 pb-2 grid grid-cols-3">
                <a href='#' className="inline-block rounded-full py-1 text-m text-center text-blue mr-2 mb-2 hover:text-gray">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='#' className="inline-block rounded-full py-1 text-m text-center text-blue mr-2 mb-2 hover:text-gray">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href='#' className="inline-block rounded-full py-1 text-m text-center text-red mr-2 mb-2 hover:text-gray">More +</a>
               </div>
              </div>
          </div>
          <div id='prj03' className="z-10 min-w-m overflow-hidden flex flex-col items-center gap-y-8 md:flex-row md:w-6/12 md:h-72 md:gap-x-4 p-4">
            <img className="w-full md:w-1/2 md:h-full md:object-cover rounded-lg" src={multistep} alt="Multistep Form"/>
            <div className="px-6 py-4 w-fullmd:w-3/4">
              <div className="font-bold text-xl mb-1 font-head">Multistep Form</div>
              <div className="pt-2 pb-2">
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">MUI</span>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">React</span>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">JS</span>
              </div>
              <p className="text-gray-700 text-base pb-6">
                It is a sign-up form the user needs to go through 3~4 steps to sign up, filling out the form and selecting an option. 
              </p>
              <hr className='border-gray border-dashed opacity-40'/>
              <div className="pt-4 pb-2 grid grid-cols-3">
                <a href='#' className="inline-block  rounded-full py-1 text-m text-center text-blue mr-2 mb-2 hover:text-gray">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='#' className="inline-block  rounded-full py-1 text-m text-center text-blue mr-2 mb-2 hover:text-gray">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href={`/multistep`} className="inline-block rounded-full py-1 text-m text-center text-red mr-2 mb-2 hover:text-gray">More +</a>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Projects;