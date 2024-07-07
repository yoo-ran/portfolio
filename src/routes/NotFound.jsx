// import React from 'react';
import { useContext }  from 'react';
import { StateContext } from '../routes/StateContext';

function NotFound() {
  const { sharedState } = useContext(StateContext);

  return (
    <div className=
    {`flex flex-col bg-lightBlue h-screen w-full justify-center items-center transition-[width] lg:gap-y-40
      ${sharedState == "true" ? 
      "md:w-[calc(100%-8rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-11rem)] 2xl:w-[calc(100%-13rem)] 3xl:w-[calc(100%-16rem)]":
      "md:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] 2xl:w-[calc(100%-7rem)] 3xl:w-[calc(100%-8rem)]"} `} 
      >
       
        <h2 className="font-accent lg:text-9xl">404</h2>
        <p className="font-accent">Not Found</p>
    </div>

  )
}

export default NotFound;