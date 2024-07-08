// import React from 'react';
import { useContext }  from 'react';
import { StateContext } from '../routes/StateContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use


function NotFound() {
  const { sharedState } = useContext(StateContext);

  return (
    <div className=
    {`relative flex flex-col bg-lightBlue h-screen w-full justify-center items-center transition-[width] gap-y-10
      ${sharedState == "true" ? 
      "md:w-[calc(100%-8rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-11rem)] 2xl:w-[calc(100%-13rem)] 3xl:w-[calc(100%-16rem)]":
      "md:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] 2xl:w-[calc(100%-7rem)] 3xl:w-[calc(100%-8rem)]"} `} 
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
          className='z-0 absolute w-[60rem] h-[60rem] rounded-full bg-opacity-90 backdrop-blur animate-pulse '
      >

        </div>
    </div>

  )
}

export default NotFound;