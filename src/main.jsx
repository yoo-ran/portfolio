import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './routes/NotFound.jsx';
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Projects from './routes/Projects.jsx';
import Weather from './routes/artifacts/weather.jsx';
import Multistep from './routes/artifacts/multistep.jsx';
import Top from './components/Top.jsx';
import PetList from './routes/artifacts/PetList.jsx';
import Furever from './routes/artifacts/Furever.jsx';

import AnimatedCursor from "react-animated-cursor"


import { HelmetProvider } from 'react-helmet-async';
import { StateProvider } from './routes/StateContext.jsx';  // Import StateProvider





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/multistep",
    element: <Multistep />,
  
  },
  {
    path: "/petlist",
    element: <PetList />,
  },
  {
    path: "/furever",
    element: <Furever />,
  },
  {
    path: "*",
    element: <NotFound />, // Wildcard route to catch all undefined routes
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <StateProvider>
        <div className='flex w-full'>
        <AnimatedCursor 
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          color='255, 255, 255'
          outerAlpha={0.3}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#9dcadc'
          }}
          outerStyle={{
            border: '3px solid #9dcadc'
          }}
        />
          <Header />
          <div className='flex flex-col justify-between items-end h-dvh w-screen'>
            <RouterProvider router={router}/>
              <Top/>
            <Footer/>
          </div>
        </div>
      </StateProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
