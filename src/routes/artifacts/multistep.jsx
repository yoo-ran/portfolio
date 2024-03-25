import React, {useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faReact, faSquareGithub} from '@fortawesome/free-brands-svg-icons';

import ChildCode from '../highlights/multistep/ChildCode';

import multistep from "../../images/multistep.png";
import mui from "../../images/mui-logo.png";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


function Multistep() {

    useGSAP(() => {
        gsap.to("#aboutL", {
            scrollTrigger: {
            trigger: "#about",
            start: "bottom bottom",
            end: "300 bottom",
            },
            width:"100%"
        });
        gsap.from("#aboutC", {
            scrollTrigger: {
            trigger: "#about",
            start: "bottom bottom",
            end: "300 bottom",
            scrub: true,
            },
            opacity:0
        });
        gsap.to("#brainL", {
            scrollTrigger: {
            trigger: "#brainstorm",
            start: "bottom bottom",
            end: "200 bottom",
            scrub: true,
            },
            width:"100%"
        });
        gsap.from("#brainC", {
            scrollTrigger: {
            trigger: "#brainstorm",
            start: "bottom bottom",
            end: "200 bottom",
            scrub: true,
            },
            opacity:0
        });
        gsap.to("#developL", {
            scrollTrigger: {
            trigger: "#develop",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
            },
            width:"100%"
        });
        gsap.from("#developC", {
            scrollTrigger: {
            trigger: "#develop",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
            },
            opacity:0
        });
        gsap.to("#takeL", {
            scrollTrigger: {
            trigger: "#takeaway",
            start: "200 bottom",
            end: "300 bottom",
            scrub: true,
            },
            width:"100%"
        });
        gsap.from("#takeC", {
            scrollTrigger: {
            trigger: "#takeaway",
            start: "bottom bottom",
            end: "300 bottom",
            scrub: true,
            },
            opacity:0
        });

        
    })   
  const tl = useRef();

    
    // useEffect(()=>{
        const develops = gsap.utils.toArray('#developC');
    
        console.log(develops);
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger:"#develop",
                start:"top center",
                end:"bottom bottom",
                scrub:true,
                markers:true
            }
        })
        .from(develops[0], {opacity:0})
        .from(develops[1], {opacity:0})
        .from(develops[2], {opacity:0})
        .from(develops[3], {opacity:0})
        .from(develops[4], {opacity:0})
    // },[])
  return (
    <div className='flex flex-col gap-y-20 items-center mb-40 pt-20'>
        {/* <PrjMenu/> */}
        {/* Banner */}
        <section className="h-96 bg-cover bg-center w-full md:h-[40rem]" style={{ backgroundImage: `url(${multistep})` }}></section>

        {/* Skills & Link */}
        <section className='flex justify-around w-10/12'>
            <article>
                <h2 className='text-blue text-xl font-head mb-4 font-bold'>Skills</h2>
                <div className='flex flex-col gap-y-2'>
                    <p className='text-gray'><FontAwesomeIcon icon={faHtml5} className='text-blue text-xl md:text-2xl md:w-8' />HTML</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faReact} className='text-blue text-xl md:text-2xl md:w-8'/>React.js</p>
                    <p className='text-gray flex'><img src={mui} alt="MUI logo" className='w-5 md:w-8'/>MUI</p>
                </div>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head mb-4 font-bold'>Link</h2>
                <div className='flex flex-col gap-y-2'>
                    <a href='#' className='text-gray hover:text-black'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl md:text-2xl md:w-8' /> Github</a>
                    <a href='#' className='text-gray hover:text-black'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl md:text-2xl md:w-8' /> Website</a>
                </div>
            </article>
        </section>

        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 w-11/12 md:w-7/12'>
            <article id='about'>
                <h2 className='text-blue text-xl font-head font-bold'><span className='relative'>About<span id='aboutL' className='underline'></span></span></h2>
                <p id='aboutC'>
                    It is a sign-up form the user needs to go through 3~4 steps to sign up by filling out the form and selecting an option. There are progress bars to indicate the user’s progress and validation to make sure all required fields are filled out. Once the user logs in, a confirmation page appears.
                </p>
            </article>
            <article id='brainstorm'>
                <h2 className='text-blue text-xl font-head font-bold'><span className='relative'>Brainstorming<span id='brainL' className='underline'></span></span></h2>
                <p id='brainC'>
                    I sketched the design of the form and wrote down the idea of how I would develop the form on the paper. I searched how multi-step forms work, and I came across MaterialUI. There is a stepper, and it was a good tool to implement into my project, soI decided to use Material UI.
                </p>
            </article>
            <article id="develop" className='flex flex-col items-center gap-y-6'>
                <h2 className='text-blue text-xl font-head font-bold text-start w-full'><span className='relative'>Development<span id='developL' className='underline'></span></span></h2>
                <div id='developC'>
                    <h3 className='text-blue text-lg'>MUI Documentation</h3>
                    <p>
                        To implement Material UI, I should learn documentation. It was harder than I expected, and I felt like it was harder than Tailwind. To use the tag element, I needed to import the element, which was kind of hassle.
                        Also, to use style, I needed to make each style object and add it to each tag as a style attribute. I didn't like it too much but it is still a useful tool for developing step functionality
                    </p>
                </div>
                <div id='developC' className='flex flex-col w-full'>
                    <h3 className='text-blue text-lg'>Input management</h3>
                    <p>
                        To get the value of input and update it, I used useState. I made a State Hook for each input value and stored the value in setState. I put the state in the tag element on the review page, so whenever user selects or changes their input data, the data will be uploaded and updated on the review page. Also, I used props to transfer the data to other components
                    </p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='flex flex-col gap-y-16'>
                        <div  id='developC' >
                            <p className='text-red'>1. Complete the form</p>
                            <p>
                                &nbsp; 
                                First, to proceed to the subsequent step, users are required to fill out the provided form accurately. The information entered into the form for each step is managed using the useState hook, so any modifications made by the user are promptly saved and updated, and eventually, it will be presented in the review phase. 
                                <br/><br/>
                                Subsequently, upon pressing the 'NEXT' button at each step, a verification process ensures that all necessary information has been provided. If any information is missing, indicated by a binary state(true/false), an error message appears, preventing progression until all required data is provided.  
                            </p>
                        </div>
                        <div  id='developC'>
                            <p className='text-red'>2. Proper Input Formatting</p>
                            <p>
                                For email addresses and phone numbers, users are required to input information in accordance with the specified format for each. For instance, if an email address is incorrectly formatted, such as typing "yooran" without "@gmail.com," an error message is triggered, preventing progression to the next step until the correct format is provided.
                                <br/><br/>
                                Regular expressions were employed to validate the email and phone number input format. I used the test() method to ensure that the entered email and phone number adhered to the prescribed pattern. Subsequently, the validity of both formats was assessed using the boolean result of the test() method within conditional statements.   
                            </p>
                            <ChildCode id='developC' code={`
                            switch (activeStep) {
                                case 1:
                                var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                var phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s*\d{3}-\d{4})$/;
                                if( Object.values(info).every(val => val !== "")){
                                    if (emailRegex.test(info.email) && phoneRegex.test(info.phone) ) {
                                    setGoNext(true);
                                    setAlert(false);
                                    setEmailVali(false);
                                    } else{
                                    setEmailVali(true);
                                    setAlert(true);
                                    }
                                }else{
                                    setGoNext(false);
                                    setAlert(true);
                                    setEmailVali(false);
                                }
                                case 2:
                                if (level!=="") {
                                    setActiveStep((activeStep) => activeStep + 1);
                                    setAlert(false);
                                    }else{
                                    setAlert(true);
                                    }
                                break;
                                case 3:
                                if (preference!=="") {
                                    setActiveStep((activeStep) => activeStep + 1);
                                    setAlert(false);
                                    }else{
                                    setAlert(true);
                                    }
                                break;
                                case 4:
                                setActiveStep((activeStep) => activeStep + 2);
                                break;`}/>
                        </div>
                       
                        {/* Highlight js */}
                        <div  id='developC'>
                            <p className='text-red'>3. Update Data</p>
                            <p>
                                As previously explained, whenever the user modifies the state data, it should promptly update with the new information. Using the useEffect hook, the state serves as a dependency, triggering rendering whenever alterations occur, thus ensuring that the state reflects the latest information.
                            </p>

                            <ChildCode id='developC' code={`
                                useEffect(() => {
                                    switch (activeStep) {
                                    case 1:
                                        if(goNext){
                                            setActiveStep((activeStep) => activeStep + 1);
                                            setAlert(false);
                                        }
                                    }
                                }, [goNext]);
                            
                                useEffect(() => {
                                    switch (activeStep) {
                                    case 2:
                                        if (level!=="") {
                                        setAlert(false);
                                        }
                                    break;
                                    }
                                }, [level, activeStep]);  
                            `} />
                        </div>
                    </p>
                </div>
            </article>
            <article id='takeaway'>
                <h2 className='text-blue text-xl font-head font-bold'><span className='relative'>Take Away<span id='takeL' className='underline'></span></span></h2>
                <p  id='takeC'>
                    It was my first time using Material UI, but it was not my style too much because the documentation was confusing. However, I take this as a good experience to try the UI tool kit. Also, in terms of having UI set already, it was convenient to utilize it, and I could learn how it works.
                    By managing the validation of input data, using useEffect and useState, I could learn how these hooks work more.
                </p>
            </article>
        </section>
    </div>
  )
}

export default Multistep