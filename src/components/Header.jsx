import {useEffect, useState, useContext} from 'react';
import { StateContext } from '../routes/StateContext';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faHouse,faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile, faFolderClosed, faFile} from '@fortawesome/free-regular-svg-icons';

import logo from "../images/logo.png";




function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const { setSharedState } = useContext(StateContext);

    const [expand, setExpand] = useState(() => {
        // Get the expand state from sessionStorage
        const savedExpandState = sessionStorage.getItem('expand');
        return savedExpandState ? JSON.parse(savedExpandState) : false;
    });

    const handleExpandMenu = () => {
        setExpand(prevExpand => {
            const newExpand = !prevExpand;
            // Save the new expand state to sessionStorage
            sessionStorage.setItem('expand', JSON.stringify(newExpand));
            return newExpand;
        });

        setSharedState(`${expand}`);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
      const pathname = window.location.pathname;
      if (pathname === '/') {
        setActive('home');
      } else if (pathname === '/about') {
        setActive('about');
      } else if (pathname === '/projects'||pathname === '/multistep' || pathname === '/furever' || pathname === '/weather' || pathname === '/petlist') {
        setActive('projects');
      }
    }, [active]);
  

   const navClick = (navItem) => {
         setActive(navItem)
   };



    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = '/resume.pdf'; // Replace with the actual path to your resume file
        a.download = 'resume.pdf'; // Replace with the desired file name for download
        a.click();
    }

  
  return(
    <div className='font-head text-gray z-50 flex relative'>
         
        <div className='fixed left-0 w-full md:hidden'>

            {/* submenu */}
            <ul id='list' className={`absolute top-10 z-50 flex flex-col justify-center items-end gap-4  pr-10 py-10 bg-lightBlue w-full rounded-b-lg shadow-lg shadow-blue-500/40  transition-all duration-500 transform ${menuOpen ? '' : "-translate-y-full" }`}>
                <li>
                    <a href={`/`} className={active === 'home' ? 'text-red' : ''} aria-label="Home" onClick={() => navClick('home')}>Home</a>
                </li>
                <li> 
                    <a href={`/about`} className={active === 'about' ? 'text-red' : ''} aria-label="About">About</a>
                </li>
                <li>
                    <a href={`/projects`} className={active === 'projects' ? 'text-red' : ''} aria-label="Project">Projects</a>
                </li>
                <li className='mt-4 pt-4 border-t-2 w-10/12 flex justify-end border-dashed'>
                    <button onClick={handleDownload}  aria-hidden="true" aria-label="Resume" className='bg-red text-white py-1 px-2 text-sm rounded-full'>Resume <FontAwesomeIcon icon={faChevronRight} /></button>
                </li>
            </ul>
            
            {/* mobile menu */}
            <div className='md:hidden fixed z-50 bg-white flex justify-between items-center w-full py-2 px-6'>
                <p><a href="/"><img className='w-7' aria-label="Home Logo" src={logo} alt="Yooran Logo"/></a></p>
                    {/* hamburger */}
                <div id='menu' className='flex flex-col justify-center items-end gap-y-1.5 col-start-4 h-8 w-10 md:hidden' onClick={toggleMenu}>
                    <span className={`block w-7/12 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "rotate-45 translate-y-3": ""}`}></span>
                    <span className={`w-5/12 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "opacity-0": ""}`}></span>
                    <span className={`w-7/12 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2": ""}`}></span>
                </div>
            </div>
        </div>
             
        <div 
        // className={`fixed left-0 transition-[width] h-lvh ${expand==true ? "md:w-14 lg:w-16 xl:w-24 3xl:w-32":"md:w-32 lg:w-40 xl:w-44 2xl:w-52 3xl:w-64"}`}
        className={`fixed left-0 transition-[width] h-lvh ${expand==true ? "md:w-14 lg:w-16 xl:w-24 3xl:w-32":"md:w-32 lg:w-40 xl:w-44 2xl:w-52 3xl:w-64"}`}
        >
            
            {/* desktop header */}
            <div className={`hidden md:flex flex-col justify-between w-full h-lvh z-50 bg-white drop-shadow rounded-r-lg  md:px-4 md:py-8 lg:pl-6 lg:py-14`}>
                <button aria-label='Expand Menu' className='absolute -right-3 flex justify-center items-center rounded-full text-lightBlue drop-shadow-sm md:w-5 md:h-5 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 md:text-xs lg:text-base 2xl:text-lg 3xl:text-2xl bg-lightBlue hover:bg-gray' onClick={()=>handleExpandMenu()}>
                    { expand==true ?  <FontAwesomeIcon icon={faAnglesRight} className='text-white'/> : <FontAwesomeIcon icon={faAnglesLeft} className='text-white'/>}
                </button>
                <nav>
                    <ul className={`flex flex-col justify-between gap-y-10 md:gap-y-8 2xl:gap-y-14 md:text-base xl:text-lg 2xl:text-2xl ${expand==true ? "":"item-start"} `}>
                        <li className='group lg:mb-10'>
                            <p><a href={`/`} aria-label="Home Logo"><img className='w-8 md:w-6 lg:w-7 xl:w-8 2xl:w-10 3xl:w-12' src={logo} alt="Yooran Logo"/></a></p>
                        </li>
                        <ul className='flex flex-col justify-between md:gap-y-4 lg:gap-y-6'>
                            <li className='group flex h-8'>
                                <a href="/" aria-label="home" className={`flex items-center transition hover:text-black relative ${active === 'home' ? 'text-black' : ''}`}  onClick={() => navClick('home')}>
                                    <FontAwesomeIcon icon={faHouse} className='pr-1 3xl:pr-2' />
                                    <p className={`${expand==true? "hidden":""}`}>Home</p> 
                                    <span role="presentation" className={`absolute -bottom-4 md:-bottom-2 lg:-bottom-4 2xl:-bottom-8 underline group-hover:w-full  ${active === 'home' ? 'w-full' : ''} ${expand==true? "hidden":""}`}  ></span>
                                </a>
                            </li>
                            <li className='group flex h-8'>
                                <a href={`/about`} aria-label="About" className={`flex items-center transition hover:text-black relative ${active === 'about' ? 'text-black' : ''}`} onClick={() => navClick('about')}>
                                    <FontAwesomeIcon icon={faFaceSmile} className='pr-1 3xl:pr-2' />
                                    <p className={`${expand==true? "hidden":""}`}>About</p>
                                    <span role="presentation" className={`absolute -bottom-4 md:-bottom-2 lg:-bottom-4 2xl:-bottom-8 underline group-hover:w-full ${active === 'about' ? 'w-full' : ''} ${expand==true? "hidden":""}` }></span>
                                </a>
                            </li>
                            <li className='group flex h-8'>
                                <a href={`/projects`} aria-label="Project" className={`flex items-center transition hover:text-black relative ${active === 'projects' ? 'text-black' : ''}`} onClick={() => navClick('projects')}>
                                    <FontAwesomeIcon icon={faFolderClosed} className='pr-1 3xl:pr-2' />
                                    <p className={`${expand==true? "hidden":""}`}>Projects</p>
                                    <span role="presentation" className={`absolute -bottom-4 md:-bottom-2 lg:-bottom-4 2xl:-bottom-8 underline group-hover:w-full ${active === 'projects' ? 'w-full' : ''} ${expand==true? "hidden":""} `}></span>
                                </a>
                            </li>
                            <li>
                                <button onClick={handleDownload} aria-label="Resume Download" className={`flex justify-center items-center gap-x-1 bg-red text-white rounded-full hover:bg-gray ${expand==true? "md:w-6 md:h-6 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 3xl:w-11 3xl:h-11":"md:py-1 3xl:py-2 md:w-24 lg:w-28 2xl:w-36 3xl:w-48"}`}>
                                    <FontAwesomeIcon icon={faFile} className={expand==true? "":"pr-1"}/> 
                                    <p className={`flex items-center text-white ${expand==true? "hidden":""}`}>
                                        Resume 
                                        {/* <FontAwesomeIcon icon={faChevronRight} className='pl-1'/> */}
                                    </p>
                                </button>
                            </li>
                        </ul>
                    </ul>
                </nav>

                <div className='flex flex-col justify-between items-start gap-y-2 md:text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl'>
                    <a href="https://www.linkedin.com/in/yooran/" aria-label="LinkedIn Link" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className=' hover:text-blue' /></a>
                    <a href="https://github.com/yoo-ran"  aria-label="Github Link" target='_blank'><FontAwesomeIcon icon={faGithub} className=' hover:text-blue' /></a>
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default Header;