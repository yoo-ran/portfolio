import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return(
    <div>
      {/* Banner */}
      <section className='h-80 bg-white text-center flex justify-center items-center'>
        <h2 className='font-black text-3xl'>Projects</h2>
      </section>

      {/* Projects */}
      <section className='my-20 flex flex-col justify-center items-center gap-y-20'>
          <div className="max-w-sm overflow-hidden">
            <img className="w-full" src="/img/card-top.jpg" alt="Weather API"/>
            <div className="px-6 py-4">
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
                <a href='#' className="inline-block  rounded-full py-1 text-m text-center text-blue mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='#' className="inline-block  rounded-full py-1 text-m text-center text-blue mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href={`/weather`} className="inline-block rounded-full py-1 text-m text-center text-red mr-2 mb-2">More +</a>
              </div>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden ">
              <img className="w-full" src="/img/card-top.jpg" alt="Pet List Filter"/>
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
              <hr className='border-gray border-dashed opacity-40'/>
              <div className="pt-4 pb-2 grid grid-cols-3">
                <a href='#' className="inline-block rounded-full py-1 text-m text-center text-blue mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='#' className="inline-block rounded-full py-1 text-m text-center text-blue mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href='#' className="inline-block rounded-full py-1 text-m text-center text-red mr-2 mb-2">More +</a>
               </div>
              </div>
          </div>
          <div className="max-w-sm overflow-hidden">
            <img className="w-full" src="/img/card-top.jpg" alt="Multistep Form"/>
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
              <hr className='border-gray border-dashed opacity-40'/>
              <div className="pt-4 pb-2 grid grid-cols-3">
                <a href='#' className="inline-block  rounded-full py-1 text-m text-center text-blue mr-2 mb-2">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='#' className="inline-block  rounded-full py-1 text-m text-center text-blue mr-2 mb-2">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href={`/multistep`} className="inline-block rounded-full py-1 text-m text-center text-red mr-2 mb-2">More +</a>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Projects;