import React from 'react';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import logo from "../images/logo.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return(
    <div className='font-head text-gray flex z-50 relative '>
         
        <div className='fixed w-full z-50 bg-white flex justify-center items-center'>
            <ul id='list' className={`absolute top-10 flex flex-col items-end gap-4 w-full pr-10 pb-14 pt-20 bg-lightBlue w-full rounded-b-lg shadow-lg shadow-blue-500/40  md:hidden  transition-all duration-500 transform ${menuOpen ? '' : "-translate-y-full" }`}>
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
            <div className='flex justify-between items-center p-4 w-full relative z-50 bg-white '>
                <h1><img className='w-8' src={logo} alt="Yooran Logo"/></h1>
                <nav className='hidden md:block md:col-start-7'>
                    <ul className=' md:grid grid-cols-4'>
                        <li className='group'>
                            <a href={`/`} className='transition hover:text-black relative'>Home <span className='underline group-hover:w-full'></span></a>
                        </li>
                        <li className='group'>
                            <a href={`/about`} className='transition hover:text-black relative'>About<span className='underline group-hover:w-full'></span></a>
                        </li>
                        <li className='group'>
                            <a href={`/projects`} className='transition hover:text-black relative'>Projects<span className='underline group-hover:w-full'></span></a>
                        </li>
                        <li>
                            <a href='' className='bg-red text-white py-2 px-4 rounded-full transition duration-200 ease-in-out hover:bg-gray'>Resume <FontAwesomeIcon icon={faChevronRight} /></a>
                        </li>
                    </ul>
                </nav>
                <div id='menu' className='flex flex-col justify-center items-end gap-y-1.5 col-start-4 h-8 w-10 md:hidden' onClick={toggleMenu}>
                    <span className={`block w-3/4 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "rotate-45 translate-y-3": ""}`}></span>
                    <span className={`w-2/4 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "opacity-0": ""}`}></span>
                    <span className={`w-3/4 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2": ""}`}></span>
                </div>
                
            </div>
        </div>
       
    </div>
  );
}

export default Header;