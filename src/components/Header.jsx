import {useEffect, useState} from 'react';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faHouse,faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
// import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile, faFolderClosed, faFile} from '@fortawesome/free-regular-svg-icons';
import logo from "../images/logo.png";




function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [expand, setExpand] = useState(() => {
        // Get the expand state from sessionStorage
        const savedExpandState = sessionStorage.getItem('expand');
        return savedExpandState ? JSON.parse(savedExpandState) : false;
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
      const pathname = window.location.pathname;
      console.log(pathname);
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

    const handleExpandMenu = () => {
        setExpand(prevExpand => {
            const newExpand = !prevExpand;
            // Save the new expand state to sessionStorage
            sessionStorage.setItem('expand', JSON.stringify(newExpand));
            return newExpand;
        });
    }

    


  return(
    <div className='font-head text-gray z-50 flex relative w-full'>
         
        <div className='fixed left-0 w-full md:hidden'>

            {/* submenu */}
            <ul id='list' className={`absolute top-10 z-50 flex flex-col justify-center items-end gap-4  pr-10 py-10 bg-lightBlue w-full rounded-b-lg shadow-lg shadow-blue-500/40  transition-all duration-500 transform ${menuOpen ? '' : "-translate-y-full" }`}>
                <li>
                    <a href={`/`} className={active === 'home' ? 'text-red' : ''} onClick={() => navClick('home')}>Home</a>
                </li>
                <li> 
                    <a href={`/about`}>About</a>
                </li>
                <li>
                    <a href={`/projects`}>Projects</a>
                </li>
                <li className='mt-4 pt-4 border-t-2 w-10/12 flex justify-end border-dashed'>
                    <a href='#' onClick={handleDownload} className='bg-red text-white py-1 px-2 text-sm rounded-full'>Resume <FontAwesomeIcon icon={faChevronRight} /></a>
                </li>
            </ul>
            
            {/* mobile menu */}
            <div className='md:hidden fixed z-50 bg-white flex justify-between items-center w-full py-2 px-6'>
                <h1><a href="/"><img className='w-7' src={logo} alt="Yooran Logo"/></a></h1>
                    {/* hamburger */}
                <div id='menu' className='flex flex-col justify-center items-end gap-y-1.5 col-start-4 h-8 w-10 md:hidden' onClick={toggleMenu}>
                    <span className={`block w-7/12 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "rotate-45 translate-y-3": ""}`}></span>
                    <span className={`w-5/12 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "opacity-0": ""}`}></span>
                    <span className={`w-7/12 h-1 bg-red rounded-lg transition transform duration-500 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2": ""}`}></span>
                </div>
            </div>
        </div>
             
        <div className={`fixed left-0 md:w-40 transition-[width] ${expand==true ? "md:w-16":""}`}>
            
            {/* desktop header */}
            <div className={`hidden md:flex flex-col justify-between w-full h-lvh z-50 bg-white py-10 drop-shadow rounded-r-lg  pl-4 lg:pl-6 lg:py-14`}>
                <button className='absolute -right-3 flex justify-center items-center rounded-full text-lightBlue text-sm drop-shadow-sm w-6 h-6 bg-lightBlue hover:bg-gray' onClick={()=>handleExpandMenu()}>
                    { expand==true ?  <FontAwesomeIcon icon={faAnglesRight} className='text-white'/> : <FontAwesomeIcon icon={faAnglesLeft} className='text-white'/>}
                </button>
                <nav>
                    <ul className='flex flex-col justify-between items-start gap-y-10 md:text-md lg:text-xl'>
                        <li className='group'>
                            <h1><a href={`/`}><img className='w-8 md:w-7 lg:w-10' src={logo} alt="Yooran Logo"/></a></h1>
                        </li>
                        <li className='group'>
                            <a href="/" className={`flex items-center transition hover:text-black relative ${active === 'home' ? 'text-black' : ''}`}  onClick={() => navClick('home')}>
                            <FontAwesomeIcon icon={faHouse} className='pr-1' />
                            <p className={expand==true? "hidden":""}>Home</p> 
                            <span className={`absolute -bottom-4 underline group-hover:w-full  ${active === 'home' ? 'w-full' : ''} ${expand==true? "hidden":""}`}  ></span></a>
                        </li>
                        <li className='group'>
                            <a href={`/about`} className={`flex items-center transition hover:text-black relative ${active === 'about' ? 'text-black' : ''}`} onClick={() => navClick('about')}>
                            <FontAwesomeIcon icon={faFaceSmile} className='pr-1' />
                            <p className={expand==true? "hidden":""}>About</p>
                            <span className={`absolute -bottom-4 underline group-hover:w-full ${active === 'about' ? 'w-full' : ''} ${expand==true? "hidden":""}` }></span></a>
                        </li>
                        <li className='group'>
                            <a href={`/projects`} className={`flex items-center transition hover:text-black relative ${active === 'projects' ? 'text-black' : ''}`} onClick={() => navClick('projects')}>
                            <FontAwesomeIcon icon={faFolderClosed} className='pr-1' />
                            <p className={expand==true? "hidden":""}>
                                Projects
                            </p>
                            <span className={`absolute -bottom-4 underline group-hover:w-full ${active === 'projects' ? 'w-full' : ''} ${expand==true? "hidden":""} `}></span>
                            </a>
                        </li>
                        <li>
                        <a href='#' onClick={handleDownload} className={`flex justify-center items-center gap-x-1 bg-red text-white rounded-full hover:bg-gray ${expand==true? "w-7 h-7":"py-1 md:px-3"}`}>
                            <FontAwesomeIcon icon={faFile} className={expand==true? "":"pr-1"}/> 
                            <p className={` ${expand==true? "hidden":""}`}>
                                Resume 
                                <FontAwesomeIcon icon={faChevronRight} className='pl-1'/>
                            </p>
                        </a>
                        </li>
                    </ul>
                </nav>

                <div className='flex flex-col justify-between items-start gap-y-2'>
                    <a href="https://www.linkedin.com/in/yooran/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className=' hover:text-blue md:text-xl lg:text-2xl' /></a>
                    <a href="https://github.com/yoo-ran" target='_blank'><FontAwesomeIcon icon={faGithub} className=' hover:text-blue md:text-xl lg:text-2xl' /></a>
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default Header;