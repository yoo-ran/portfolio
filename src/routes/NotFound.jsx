// import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use


function NotFound() {

  return (
    <main className=
    {`relative bg-lightBlue h-screen w-full justify-center  gap-y-10 overflow-hidden `} 
      >
       
       <div className='z-10 text-center'>
          <h2 className="font-accent lg:text-[150px]">4<span className='lg:text-[130px]'>&#40;&#41;</span>4</h2>
          <p className="font-head font-black lg:text-3xl">OOPS! Page Not Found</p>
          <p>Perhaps you want to go back to homepage</p>
       </div>
        <a href={`/`} 
                className='z-10 flex justify-center items-center gap-x-4 bg-red text-sm  py-1 md:px-4 lg:px-6 2xl:px-8 2xl:py-2 rounded-full text-white transition ease-in-out hover:bg-gray cursor-pointer lg:text-lg 3xl:text-2xl'>
                  Homepage <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <div
         style={{
          background: 'radial-gradient(circle, rgba(157,202,220,1) 0%, rgba(213,233,240,1) 59%, rgba(247,252,254,0.2) 100%)',
        }}
          className='z-0 absolute w-[60rem] h-[60rem] rounded-full bg-opacity-90 blur animate-pulse '
      >

        </div>
    </main>

  )
}

export default NotFound;