import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faReact, faSquareGithub} from '@fortawesome/free-brands-svg-icons';

function Multistep() {
  return (
    <div className='flex flex-col gap-y-20 items-center mb-40'>
        {/* Banner */}
        <section className="bg-[url('src/images/hobby-cycle.jpg')] h-96 bg-cover bg-center w-full"></section>

        {/* Skills & Link */}
        <section className='flex justify-around w-11/12'>
            <article>
                <h2 className='text-blue text-xl font-head mb-4'>Skills</h2>
                <div className='flex flex-col gap-y-2'>
                    <p className='text-gray'><FontAwesomeIcon icon={faHtml5} className='text-blue text-xl' /> HTML</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faReact} className='text-blue text-xl' /> React.js</p>
                    <p className='text-gray flex'><img src="src/images/mui-logo.png" alt="MUI logo" className='w-5'/>MUI</p>
                </div>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head mb-4'>Link</h2>
                <div className='flex flex-col gap-y-2'>
                    <p className='text-gray'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl' /> Github</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl' /> Website</p>
                </div>
            </article>
        </section>

        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 w-11/12'>
            <article>
                <h2 className='text-blue text-xl font-head'>About</h2>
                <p>
                    It is a sign-up form the user needs to go through 3~4 steps to sign up by filling out the form and selecting an option. There are progress bars to indicate the user’s progress and validation to make sure all required fields are filled out. Once the user logs in, a confirmation page appears.
                </p>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head'>Brainstorming</h2>
                <p>
                    I sketched the design of the form and wrote down the idea of how I would develop the form on the paper. I searched how multi-step forms work, and I came across MaterialUI. There is a stepper, and it was a good tool to implement into my project, soI decided to use Material UI.
                </p>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head'>MUI Documentation</h2>
                <p>
                    To implement Material UI, I should learn documentation. It was harder than I expected, and I felt like it was harder than Tailwind. To use the tag element, I needed to import the element, which was kind of hassle.
                    Also, to use style, I needed to make each style object and add it to each tag as a style attribute. I didn't like it too much but it is still a useful tool for developing step functionality
                </p>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head'>Input management</h2>
                <p>
                To get the value of input and update it, I used useState. I made a State Hook for each input value and stored the value in setState. I put the state in the tag element on the review page, so whenever user selects or changes their input data, the data will be uploaded and updated on the review page. Also, I used props to transfer the data to other components
                </p>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head'>Take Away</h2>
                <p>
                    It was my first time using Material UI, but it was not my style too much because the documentation was confusing. However, I take this as a good experience to try the UI tool kit. Also, in terms of having UI set already, it was convenient to utilize it, and I could learn how it works.
                    By managing the validation of input data, using useEffect and useState, I could learn how these hooks work more.
                </p>
            </article>
        </section>
    </div>
  )
}

export default Multistep