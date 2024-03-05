import React from 'react';
import { useState,useEffect } from 'react';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    

    useEffect(()=>{
        setMenuOpen(!menuOpen);
    },menuOpen)

  return(
    <div className='relative font-head font-bold text-gray'>
        <div className='z-10 grid grid-cols-4 gap-2.5 w-full justify-items-center items-center p-4 fixed bg-white'>
            <h1><img className='w-8' src="src/images/logo.png" alt="Yooran Logo"/></h1>
            <nav className='hidden md:block'>
                <ul>
                    <li>
                        <a href={`/`}>Home</a>
                    </li>
                    <li>
                        <a href={`/about`}>About</a>
                    </li>
                    <li>
                        <a href={`/projects`}>Projects</a>
                    </li>
                </ul>
            </nav>
            <div id='menu' className='flex flex-col justify-center items-end gap-y-1.5 col-start-4 h-8 w-10 md:hidden' onClick={toggleMenu}>
                <span className="top-0 block w-3/4 h-1 bg-red rounded-lg"></span>
                <span className="w-2/4 h-1 bg-red rounded-lg"></span>
                <span className="bottom-0 w-3/4 h-1 bg-red rounded-lg"></span>
            </div>
        </div>
        <ul id='list' className={`absolute top-10 flex flex-col items-end gap-4 pr-10 pb-10 pt-14 bg-lightBlue w-full rounded-b-lg shadow-lg shadow-blue-500/40  md:hidden  transition-all duration-500 transform ${menuOpen ? '-translate-y-full' : "" }`}>
            <li>
                <a href={`/`}>Home</a>
            </li>
            <li> 
                <a href={`/about`}>About</a>
            </li>
            <li>
                <a href={`/projects`}>Projects</a>
            </li>
        </ul>
    </div>
  );
}

export default Header;