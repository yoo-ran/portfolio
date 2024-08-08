import React, { useEffect, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './routes/NotFound.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Projects from './routes/Projects.jsx';
import Weather from './routes/artifacts/weather.jsx';
import Multistep from './routes/artifacts/multistep.jsx';
import Top from './components/Top.jsx';
import PetList from './routes/artifacts/PetList.jsx';
import Furever from './routes/artifacts/Furever.jsx';
import AnimatedCursor from 'react-animated-cursor';
import {  StateContext } from './routes/StateContext.jsx';
import DejApp from './routes/artifacts/dejapp.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/weather', element: <Weather /> },
  { path: '/multistep', element: <Multistep /> },
  { path: '/petlist', element: <PetList /> },
  { path: '/furever', element: <Furever /> },
  { path: '/dejapp', element: <DejApp /> },
  { path: '*', element: <NotFound /> },
]);

const App = () => {
  const { sharedState } = useContext(StateContext); // Ensure this is correctly used

  return (
    <div className='flex justify-end w-full'>
      
      <div>
        <Header />
      </div>
      
      <div className={`transition-[width] mx-0 my-auto
          ${sharedState === "true"  ? 
          "w-full md:w-[calc(100%-8rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-11rem)] 2xl:w-[calc(100%-13rem)] 3xl:w-[calc(100%-16rem)]"
          :
          "w-full md:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] 2xl:w-[calc(100%-7rem)] 3xl:w-[calc(100%-8rem)]"
          }`} 
          >
        <RouterProvider router={router} />
        <Top />
        <Footer />
      </div>
      <AnimatedCursor 
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        color='255, 255, 255'
        outerAlpha={0.3}
        innerStyle={{ backgroundColor: '#9dcadc' }}
        outerStyle={{ border: '3px solid #9dcadc' }}
      />
    </div>
  );
};

export default App;
