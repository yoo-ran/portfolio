import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faSquareGithub, faJs, faCss3Alt} from '@fortawesome/free-brands-svg-icons';

import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
import SEO from '../../components/Seo';
import PrjMenu from '../../components/PrjMenu';

import furever from "../../images/furever.png"


import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Furever() {

    const [page, setPage]= useState("")

    const newPage = (newP) =>{
        setPage(newP)
    }

    useEffect(()=>{
        if (page!="") {
            let section = document.getElementById(page)
            section.scrollIntoView({behavior: "smooth", block: "start"})
        }
    },[page])

  return (
    <div className='md:w-11/12'>
        <PrjMenu newPage={newPage} page={page}  />

        <SEO
          title='Yooran KIM_FUREVER FRIENDS'
          description="Explore the pet adoption website project by Yooran Kim, a frontend developer passionate about creating meaningful and user-friendly web experiences. This project showcases Yooran's skills in designing and developing a comprehensive pet adoption platform, enabling users to search for pets, view detailed profiles, and initiate adoption processes. Discover the technologies utilized, including HTML, CSS, JavaScript to create a dynamic and responsive website that connects pets with loving homes."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, pet adoption website, pet adoption platform, HTML, CSS, JavaScript"
          url="https://yoorankim.com/petlist"
        />
         <div className='flex flex-col gap-y-20 items-center mb-40 pt-20'>
        {/* <PrjMenu/> */}
        <div className='flex flex-col md:flex-row items-center w-full gap-y-14 md:mt-10 md:w-8/12'>
            {/* Banner */}
            <section className="h-80 bg-cover bg-center w-10/12 md:h-[30rem] rounded" style={{ backgroundImage: `url(${furever})` }}></section>

            {/* Skills & Link */}
            <section className='flex flex-col items-center gap-y-20 w-10/12 h-96'>
                <h3 className='text-3xl text-center font-head font-bold relative'>Furever Friend <span className='underline w-full'></span></h3>
                <div className="flex justify-around w-3/4">
                    <article>
                        <h2 className='text-blue text-xl font-head mb-4 font-bold'>Skills</h2>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-gray'><FontAwesomeIcon icon={faHtml5} className='text-blue text-xl md:text-2xl md:w-8' />HTML5</p>
                            <p className='text-gray'><FontAwesomeIcon icon={faCss3Alt} className='text-blue text-xl md:text-2xl md:w-8'/>CSS3</p>
                            <p className='text-gray'><FontAwesomeIcon icon={faJs} className='text-blue text-xl md:text-2xl md:w-8'/>Javascript</p>
                        </div>
                    </article>
                    <article>
                        <h2 className='text-blue text-xl font-head mb-4 font-bold'>Link</h2>
                        <div className='flex flex-col gap-y-2'>
                            <a href='https://github.com/yoo-ran/fur-ever-friend' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl md:text-2xl md:w-8' /> Github</a>
                            <a href='https://super-blini-9acaa6.netlify.app/' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl md:text-2xl md:w-8' /> Website</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>


        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 w-11/12 md:w-7/12 xl:w-6/12'>
            <div id='about'>
                <Narrative id="about" title={"About"} content={"Furever Friend is a project crafted to facilitate pet adoption by providing a seamless online platform where users can easily discover and connect with adorable pets needing loving homes. With expertise in HTML, CSS, and JS,  I have created an intuitive interface that enhances the adoption experience for pets and their future owners."}/>
            </div>
            <div id='brainstorming'>
                <Narrative title={"Brainstorming"} content={"While using the Illustrator program, I conceived Furever Friend, a concept that inspired the creation of various illustrations and logos. Enamoured by its design, I took it upon myself to develop a website around this concept. I focused on maximizing plugin efficiency and meticulously organized the necessary functions for each page, including the homepage, pet list, and contact page, while carefully crafting their corresponding designs"}/>
            </div>
            
            <div id='develop' className='flex flex-col gap-y-8'>
                <Narrative title={"Development"}></Narrative>
                    <div  className='flex flex-col gap-y-8'>
                        <div>
                            <DevNarr 
                                title={"Interactive Features"} 
                                content={"I brainstormed various interactive features aimed at enriching user engagement and streamlining the adoption process. These include dynamic pet profiles featuring photos, detailed descriptions, and current adoption statuses. Additionally, I implemented a carousel and scroll animation using the gsap scroll trigger to showcase a gallery of previously adopted pets."}>
                            </DevNarr>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Responsive Design"} 
                                content={"I devised a layout and grid system to ensure accessibility across a spectrum of devices, encompassing desktops, tablets, and mobile phones. Notably, I integrated cards for pet profiles, incorporating a fluid layout, adaptable images, and a distinct grid structure to optimize user experience."}>
                            </DevNarr>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Drag-Drop Functionality"} 
                                content={"To add drag-dropdown functionality, I used draggable first, to be able to drag. I used drop event to give animation and change the emoji when a user drags and drops the cat emoji. When the user drops down the cat emoji, the cat emoji will be changed to a smile face. To do that, I used opacity to hide the cat emoji(opacity 0%) and show a smile face giving opacity 100%."}>
                            </DevNarr>
                        </div>
                    </div>
            </div>
            <div id='takeaway'>
                <Narrative title={"Take away"} content={"Searching for a well-documented plugin was challenging, as clarity and comprehensibility were lacking. It required considerable time to find a plugin that was both easily understandable and functional. However, through persistent exploration and comprehension of documentation, unfamiliar terms and techniques were acquired. This process also involved learning to customize plugins to fit the project's needs and becoming proficient in their manipulation. Emphasizing a refined strategy, the developer placed a premium on efficiency by maximizing plugin usage and carefully organizing functions to align with the distinct demands of each page. This detailed approach resulted in the development of a sophisticated and flawlessly designed website."}/>
            </div>
        </section>
    </div>

    </div>
  )
}

export default Furever