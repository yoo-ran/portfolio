// import React, {useEffect, useRef} from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faReact, faSquareGithub} from '@fortawesome/free-brands-svg-icons';

import ChildCode from '../highlights/multistep/ChildCode';
import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
import DetailNarr from '../../prjContents/DetailNarr';
import PrjMenu from '../../components/PrjMenu';
import SEO from '../../components/Seo';

import multistep from "../../images/multistep.png";
import mui from "../../images/skills/mui-logo.png";
import tailwind from "../../images/skills/tailwind.png";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


function Multistep() {
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
    <div className='flex flex-col md:gap-y-20 items-center mb-40 pt-40 md:pt-20 w-full md:w-11/12'>

        <SEO
          title='Yooran KIM_MULTISTEP FORM'
          description="Discover the multi-step form project by Yooran Kim, a frontend developer specializing in creating interactive and user-friendly web applications. This project showcases Yooran's expertise in building complex forms with multiple steps, providing a seamless user experience from start to finish. Learn about the technologies utilized, including HTML, CSS, JavaScript, and frameworks like React, to create a dynamic and responsive form that meets the needs of both users and developers."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, multi-step form, form project, HTML, CSS, JavaScript, React"
          url="https://yoorankim.com/multistep"
        />

        <PrjMenu newPage={newPage} page={page}  />
        
        <div className='flex flex-col md:flex-row items-center w-full gap-y-14 md:mt-10 md:w-8/12'>
            {/* Banner */}
            <section className="h-80 bg-cover bg-center w-10/12 md:h-[30rem] rounded" style={{ backgroundImage: `url(${multistep})` }}></section>

            {/* Skills & Link */}
            <section className='flex flex-col items-center gap-y-10 md:gap-y-20 w-10/12 h-96'>
                <h1 className='text-xl md:text-3xl lg:text-3xl 2xl:text-4xl text-center font-head font-bold relative'>Multistep Form <span className='underline w-full'></span></h1>
                <div className="flex justify-around w-3/4">
                    <article>
                        <h2 className='text-blue text-lg md:text-xl lg:text-xl font-head mb-4 font-bold'>Skills</h2>
                        <div className='flex flex-col gap-y-2 text-sm md:text-base lg:text-base'>
                            <p className='text-gray'><FontAwesomeIcon icon={faHtml5} className='text-blue md:w-8 lg:text-xl' />HTML</p>
                            <p className='text-gray'><FontAwesomeIcon icon={faReact} className='text-blue md:w-8 lg:text-xl'/>React.js</p>
                            <p className='text-gray flex'><img src={mui} alt="MUI logo" className='w-5 md:w-6 '/> MUI</p>
                            <p className='text-gray flex'><img src={tailwind} alt="Tailwind logo" className=' w-4 md:w-6'/> Tailwind</p>
                        </div>
                    </article>
                    <article>
                        <h2 className='text-blue text-lg md:text-xl lg:text-xl font-head mb-4 font-bold'>Link</h2>
                        <div className='flex flex-col gap-y-2 text-sm md:text-base lg:text-lg'>
                            <a href='https://github.com/yoo-ran/multistep_form' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl md:w-8' /> Github</a>
                            <a href='https://multistepform.yoorankim.com/' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl md:w-8' /> Website</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>

        {/* Project Contents */}
        <section id='prjSect' className='flex flex-col gap-y-36 w-11/12 md:w-7/12 xl:w-1/2'>
            <div id='about'>
                <Narrative title={"About"} content={"It is a sign-up form the user needs to go through 3~4 steps to sign up by filling out the form and selecting an option. There are progress bars to indicate the user's progress and validation to make sure all required fields are filled out. Once the user logs in, a confirmation page appears."}/>
            </div>
            <div id='brainstorming'>
                <Narrative title={"Brainstorming"} content={"I sketched the design of the form and wrote down the idea of how I would develop the form on the paper. I searched how multi-step forms work, and I came across Material UI. There is a stepper, and it was a good tool to implement into my project, so I decided to use Material UI."}/>
            </div>
            <div id='develop' className='flex flex-col gap-y-8'>
                    <Narrative title={"Development"}></Narrative>
                    <div  className='flex flex-col gap-y-12'>
                        <DevNarr 
                            title={"MUI Documentation"} 
                            content={"To implement Material UI, I should learn documentation. It was harder than I expected, and I felt like it was harder than Tailwind. To use the tag element, I needed to import the element, which was kind of hassle. Also, to use style, I needed to make each style object and add it to each tag as a style attribute. I didn't like it too much but it is still a useful tool for developing step functionalit"}>
                        </DevNarr>
                        <DevNarr 
                            title={"Input management"} 
                            content={"To implement Material UI, I should learn documentation. It was harder than I expected, and I felt like it was harder than Tailwind. To use the tag element, I needed to import the element, which was kind of hassle. Also, to use style, I needed to make each style object and add it to each tag as a style attribute. I didn't like it too much but it is still a useful tool for developing step functionalit"}>
                        </DevNarr>
                            <DetailNarr 
                                title={"1. Complete the form"} 
                                content={"First, to proceed to the subsequent step, users are required to fill out the provided form accurately. The information entered into the form for each step is managed using the useState hook, so any modifications made by the user are promptly saved and updated, and eventually, it will be presented in the review phase. Subsequently, upon pressing the NEXT button at each step, a verification process ensures that all necessary information has been provided. If any information is missing, indicated by a binary state(true/false), an error message appears, preventing progression until all required data is provided."}
                            />
                            <div>
                                <DetailNarr 
                                    title={"2. Proper Input Formatting"} 
                                    content={"For email addresses and phone numbers, users are required to input information in accordance with the specified format for each. For instance, if an email address is incorrectly formatted, such as typing 'yooran' without '@gmail.com,' an error message is triggered, preventing progression to the next step until the correct format is provided. Regular expressions were employed to validate the email and phone number input format."}
                                />
                                <DetailNarr 
                                    content={"I used the test() method to ensure that the entered email and phone number adhered to the prescribed pattern. Subsequently, the validity of both formats was assessed using the boolean result of the test() method within conditional statements."}
                                />
                                <ChildCode code={`
        switch (activeStep) {
            case 1:
                // I used Regular Expression to define complex pattern for various input types and make it very fast at processing input data.
                // [a-zA-Z0-9._%+-]: A character class that matches any single character in the set
                // + : Quantifier that matches one or more occurrences of the preceding character class.
                // [a-zA-Z]: A character class that matches any single uppercase or lowercase letter.
                var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                var phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s*\d{3}-\d{4})$/;
                if( Object.values(info).every(val => val !== "")){
                    // test() method is used to determine if a particular string matches the pattern defined by a regular expression.
                    // Based on the regular expression validation for email and phone number, if the inputs are correct, proceed to the next step.                    
                    if (emailRegex.test(info.email) && phoneRegex.test(info.phone) ) {
                        setGoNext(true);
                        setAlert(false);
                        setEmailVali(false);
                    } else{
                        setEmailVali(true);
                        setAlert(true);
                    }
                }else{
                    // If the email or password input is incorrect, do not proceed to the next step; display an alert.
                    setGoNext(false);
                    setAlert(true);
                    setEmailVali(false);
                }
            case 2:
                // If the level input is not blank, indicating that the user has selected an option, proceed to the next step.
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
                            <div>
                                <DetailNarr 
                                    title={"3. Update Data"} 
                                    content={"As previously explained, whenever the user modifies the state data, it should promptly update with the new information. Using the useEffect hook, the state serves as a dependency, triggering rendering whenever alterations occur, thus ensuring that the state reflects the latest information."}     />
                                <ChildCode 
            code={`

            useEffect(() => {
                // Whenever goNext is updated, the switch condition will execute
                // to determine whether to proceed with the form.
                switch (activeStep) {
                case 1:
                    if(goNext){
                        setActiveStep((activeStep) => activeStep + 1);
                        setAlert(false);
                    }
                }

            }, [goNext]);
        
            // When level or activestep is updated and the form is on step 2,
            // do not display an alert if a level is selected.
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

                    </div>

            </div>

        <div id='takeaway'>
           <Narrative title={"Take away"} content={"It was my first time using Material UI, but it was not my style too much because the documentation was confusing. However, I take this as a good experience to try the UI tool kit. Also, in terms of having UI set already, it was convenient to utilize it, and I could learn how it works. By managing the validation of input data, using useEffect and useState, I could learn how these hooks work more."}/>
        </div>    
        </section>
    </div>
  )
}

export default Multistep