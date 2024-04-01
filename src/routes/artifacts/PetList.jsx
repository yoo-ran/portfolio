import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faSquareGithub, faJs, faCss3Alt, faSass} from '@fortawesome/free-brands-svg-icons';

import ChildCode from '../highlights/multistep/ChildCode';
import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
// import DetailNarr from '../../prjContents/DetailNarr';

import petlist from "../../images/petlist.png"

function PetList() {
  return (
    <div>
         <div className='flex flex-col gap-y-20 items-center mb-40 pt-20'>
        {/* <PrjMenu/> */}
        {/* Banner */}
        <section className="h-96 bg-cover bg-center w-full md:h-[40rem]">
            <img src={petlist} alt="petlist" className='h-full w-full object-cover object-top' />
        </section>

        {/* Skills & Link */}
        <section className='flex justify-around w-10/12'>
            <article>
                <h2 className='text-blue text-xl font-head mb-4 font-bold'>Skills</h2>
                <div className='flex flex-col gap-y-2'>
                    <p className='text-gray'><FontAwesomeIcon icon={faHtml5} className='text-blue text-xl md:text-2xl md:w-8' />HTML</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faCss3Alt} className='text-blue text-xl md:text-2xl md:w-8' />CSS</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faSass} className='text-blue text-xl md:text-2xl md:w-8' />SCSS</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faJs} className='text-blue text-xl md:text-2xl md:w-8'/>Javascript</p>
                </div>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head mb-4 font-bold'>Link</h2>
                <div className='flex flex-col gap-y-2'>
                    <a href='#' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl md:text-2xl md:w-8' /> Github</a>
                    <a href='#' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl md:text-2xl md:w-8' /> Website</a>
                </div>
            </article>
        </section>

        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 w-11/12 md:w-7/12'>
            <Narrative id="about" title={"About"} content={"The Pet List project focuses on enhancing the user experience through efficient filtering, sorting, and searching functionalities for the pet list, especially when users visit pet adoption websites and search for pets. Whether users are looking for a specific breed, our advanced search features cater to a wide range of preferences, understanding the diverse needs of potential pet owners."}/>
            <Narrative title={"Brainstorming"} 
            content={"The HTML structure has been thoughtfully planned, reflecting a user journey from navigation to content consumption. CSS styling embodies elegance and coherence, ensuring a visually engaging and intuitive interface that resonates with users. To curate a pet listing, a JSON file was used as the repository for many pet information. Each entry encapsulates details and arranges and presents diverse pet profiles. Using JavaScript, the JSON dataset was fetched and parsed. Users are empowered with the ability to filter pet listings based on popular categories, such as cats, dogs, fish, and birds. Sorting options, alphabetically and in reverse order, offer users enhanced control over their browsing experience. Search functionality also enables swift discovery of pets by name, facilitating efficient matchmaking between users and their potential pets."}/>
            
            <div className='flex flex-col gap-y-8'>
                <Narrative title={"Development"}></Narrative>
                    <div  className='flex flex-col gap-y-8'>
                        <div>
                            <DevNarr 
                                title={"JSON File"} 
                                content={ "A structured JSON file was purposefully created to optimize the accessibility and usability of pet data. In this file, major information about each pet—including their image, name, gender, breed, age, and distance to species—was stored as key-value pairs.Each pet's image was named identically to its corresponding name, facilitating data retrieval. This intuitive naming convention ensures that the image data can be seamlessly accessed under the designated pet name, followed by the 'name.png' extension. JSON file serves as a comprehensive repository of pet data, enhancing the efficiency and effectiveness of data retrieval processes."}>
                            </DevNarr>
                            <ChildCode code={`
                            [
                                {
                                    "img": "./images/mcleod.jpg",
                                    "name": "Mcleod",
                                    "gender": "male",
                                    "breed": "Golden Retreiver",
                                    "age": 2,
                                    "distance": 9,
                                    "species": "dog"
                                },
                                {
                                    "img": "./images/mccullough.jpg",
                                    "name": "Mccullough",
                                    "gender": "male",
                                    "breed": "Dachshund",
                                    "age": 4,
                                    "distance": 7,
                                    "species": "dog"
                                }
                                ...
                            ]`}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Fetch & Session Storage"} 
                                content={
                                    "Initially, I employed the fetch API to retrieve pet data from JSON files, ensuring smooth data acquisition and management. I handled successful responses using the then(), setting the stage for subsequent data manipulation. The JSON data is stored in session storage to preserve the integrity of both the original and filtered pet data across user sessions. This approach guarantees that data persistence remains intact even upon user-initiated refreshes, empowering seamless utilization of data throughout various functionalities, such as loading, resetting, sorting, clearing, searching, and filtering. Adhering to UX best practices, preserving data beyond the user's browser session may lead to confusion and disrupt the expected user experience. Therefore, I chose to forgo local storage utilization. Instead, I opted for session-based data management, ensuring data persistence only for the user's session. This approach guarantees a consistent and reliable user experience, aligning with expected behaviors and minimizing confusion, as data resets appropriately with each new session."
                                    }>
                            </DevNarr>
                            <ChildCode code={`
        const setSessionStorage = (key, value) => {
            sessionStorage.setItem(key,JSON.stringify(value))
        }

        fetch("../json/pet-list.json")
        .then((res) => {
        return res.json()
        })
        .then((obj) => {
            setSessionStorage("originalObj", obj)
            setSessionStorage("sortedObj", obj)
        })
                            `}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Date and Week data"} 
                                content={"Since there was no data about the date and date of the week, I needed to make the date variable. To do that, I used the new Date() method, including getFullYear(), getMonth(), and getDate(). Also, since as the days go by, the date of the week in the forecast part should be updated, I created a new array of the date of the week to continue updating, using a for loop."}>
                            </DevNarr>
                            <ChildCode code={`const date = new Date();
                                const today =  date.getFullYear() + (date.getMonth()+1) + date.getDate();
                                const weekConst = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                                const week = [];
                                for (let i = 0; i < 7; i++) {
                                    week[i] = (date.getDay()+i>=7) ?  weekConst[(date.getDay()+i)-7] :weekConst[date.getDay()+i];
                                }`}/>
                        </div>
                        <DevNarr 
                            title={"Design(Tailwind)"} 
                            content={"I wanted to use and practice a new CSS framework to improve my skills and keep up with new technology, so I used Tailwind. I had a problem with installing Tailwind on my React app. However, After I googled and researched how to fix it, I asked my friend's brother, who is familiar with Terminal, then finally, I could install and use Tailwind. In the beginning, it was a little bit confusing to follow the documentation, but the terms are familiar, which is similar to CSS, so I could figure out how to use it. Also, I had a challenge to use variables in to className, but I asked it to our instructor, then I could find the way to do it.I used tailwind for layout, card design, and stylizing font. For layout, I used both grid and flex together to layout flexibly. For the font, I imported google fonts. To do that, I needed to learn how to import Google fonts in the tailwind and react. It was interesting."}>
                        </DevNarr>
                    </div>
            </div>

            <Narrative title={"Take away"} content={"I've learned to fetch API data using the Fetch API in React, adeptly managing responses using then() and catch() methods. Moreover, I have honed the skill of treating the received API data as a JSON object, extracting information by accessing the object's keys and distributing their corresponding values across the HTML structure for data presentation. Upon further exploration, I've recognized state management with useState, facilitating the storage and dynamic updating of information within the application. Using useEffect, I utilize an empty dependency array to ensure execution solely during the initial rendering phase. This approach guarantees that the operation is executed once after the component's initial render, a practice well-suited for requiring the retrieval of static data or the execution of setup tasks independent of changes in state or props."}/>
            
        </section>
    </div>

    </div>
  )
}

export default PetList;