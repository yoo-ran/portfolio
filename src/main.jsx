import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
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
    path: "/notfound",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Top/>
    <Footer/>
  </React.StrictMode>,
)
