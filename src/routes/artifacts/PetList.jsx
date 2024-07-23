import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faSquareGithub, faJs, faCss3Alt} from '@fortawesome/free-brands-svg-icons';

import ChildCode from '../highlights/multistep/ChildCode';
import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
import PrjMenu from '../../components/PrjMenu';

import petlist from "../../images/petlist.png"
import SEO from '../../components/Seo';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function PetList() {

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
    <main className='md:gap-y-20  mb-40 pt-40 md:pt-20 '>

        <PrjMenu newPage={newPage} page={page}  />
        <SEO
          title='Yooran KIM_PETLIST FILTER'
          description="Explore the pet list project with filtering, sorting, and searching functionality by Yooran Kim, a frontend developer skilled in creating interactive and user-friendly web applications. This project showcases Yooran's expertise in implementing advanced features such as filtering by categories, sorting by different criteria, and searching for specific pets. Learn about the technologies utilized, including HTML, CSS, JavaScript, to create a dynamic and responsive pet list that provides a seamless user experience."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, pet list project, filtering, sorting, searching, HTML, CSS, JavaScript"
          url="https://yoorankim.com/petlist"
        />
         <div className='flex flex-col gap-y-20 items-center mb-40 pt-20'>

            <div className='flex flex-col md:flex-row items-center w-full gap-y-14 md:mt-10 md:w-8/12'>
            {/* Banner */}
            <section className="h-80 bg-cover bg-center w-10/12 md:h-[30rem] rounded" style={{ backgroundImage: `url(${petlist})` }}></section>

            {/* Skills & Link */}
            <section className='flex flex-col items-center gap-y-20 w-10/12 h-96'>
                <h1 className='text-3xl text-center font-head font-bold relative'>Pet List Filter & Search <span className='underline w-full'></span></h1>
                <div className="flex justify-around w-3/4">
                    <article>
                        <h2 className='text-blue text-xl font-head mb-4 font-bold'>Skills</h2>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-gray'><FontAwesomeIcon icon={faHtml5} className='text-blue text-xl md:text-2xl md:w-8' />HTML5</p>
                            <p className='text-gray'><FontAwesomeIcon icon={faCss3Alt} className='text-blue text-xl md:text-2xl md:w-8'/>CSS3</p>
                            <p className='text-gray'><FontAwesomeIcon icon={faJs} className='text-blue text-xl md:text-2xl md:w-8'/>Javascript</p>
                            <p className='text-gray'><FontAwesomeIcon icon={faJs} className='text-blue text-xl md:text-2xl md:w-8'/>JSON</p>
                        </div>
                    </article>
                    <article>
                        <h2 className='text-blue text-xl font-head mb-4 font-bold'>Link</h2>
                        <div className='flex flex-col gap-y-2'>
                            <a href='https://github.com/yoo-ran/pet-list-filter' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl md:text-2xl md:w-8' /> Github</a>
                            <a href='https://petlistfilter.yoorankim.com/' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl md:text-2xl md:w-8' /> Website</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>

        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 w-11/12 md:w-7/12 xl:w-6/12'>
            <div id='about'>
                <Narrative id="about" title={"About"} content={"The Pet List project focuses on enhancing the user experience through efficient filtering, sorting, and searching functionalities for the pet list, especially when users visit pet adoption websites and search for pets. Whether users are looking for a specific breed, our advanced search features cater to a wide range of preferences, understanding the diverse needs of potential pet owners."}/>
            </div>
            <div id='brainstorming'>
                <Narrative title={"Brainstorming"} 
                content={"The HTML structure has been thoughtfully planned, reflecting a user journey from navigation to content consumption. CSS styling embodies elegance and coherence, ensuring a visually engaging and intuitive interface that resonates with users. To curate a pet listing, a JSON file was used as the repository for many pet information. Each entry encapsulates details and arranges and presents diverse pet profiles. Using JavaScript, the JSON dataset was fetched and parsed. Users are empowered with the ability to filter pet listings based on popular categories, such as cats, dogs, fish, and birds. Sorting options, alphabetically and in reverse order, offer users enhanced control over their browsing experience. Search functionality also enables swift discovery of pets by name, facilitating efficient matchmaking between users and their potential pets."}/>
            </div>
            <div id='develop' className='flex flex-col gap-y-8'>
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
                // "img": String representing the file path to an image.
                "img": "./images/mcleod.jpg",
                // "name": String representing the animal's name.
                "name": "Mcleod",
                // "gender": String indicating the gender of the animal.
                "gender": "male",
                // "breed": String representing the breed of the animal.
                "breed": "Golden Retreiver",
                // "age": Number indicating the animal’s age.
                "age": 2,
                // "distance": Number, likely indicating how far the animal is from a certain location, relevant for services like adoption.
                "distance": 9,
                // "species": String indicating the species of the animal, presumably to handle different types of animals.
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
        ]
        `}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Fetch & Session Storage"} 
                                content={
                                    "Initially, I employed the fetch to retrieve pet data from JSON files, ensuring smooth data acquisition and management. I handled successful responses using the then(), setting the stage for subsequent data manipulation. The JSON data is stored in session storage to preserve the integrity of both the original and filtered pet data across user sessions. This approach guarantees that data persistence remains intact even upon user-initiated refreshes, empowering seamless utilization of data throughout various functionalities, such as loading, resetting, sorting, clearing, searching, and filtering."
                                    }>
                            </DevNarr>
                            <DevNarr 
                                content={
                                    "Adhering to UX best practices, preserving data beyond the user's browser session may lead to confusion and disrupt the expected user experience. Therefore, I chose to forgo local storage utilization. Instead, I opted for session-based data management, ensuring data persistence only for the user's session. This approach guarantees a consistent and reliable user experience, aligning with expected behaviors and minimizing confusion, as data resets appropriately with each new session."
                                    }>
                            </DevNarr>
                            <ChildCode code={`
    // This function is designed to store data in the browser's sessionStorage.
    // key: The name under which the data will be stored. It is a string.
    // value: The data to be stored. This can be any JavaScript value (e.g., object, array, string, number).
    const setSessionStorage = (key, value) => {
        sessionStorage.setItem(key,JSON.stringify(value))
    }

    // The fetch function returns a Promise that resolves to the Response to the request.
    // "../json/pet-list.json" is the relative URL of the JSON file being fetched
    fetch("../json/pet-list.json")
        // The first .then takes the Response object (res) and calls res.json() on it.
        .then((res) => {
        // res.json() is a method that parses the Response body as JSON and returns a Promise that resolves with the parsed JavaScript object. 
        return res.json()
        })
        // The second .then takes the parsed JavaScript object (obj), which represents the contents of the pet-list.json file.
        .then((obj) => {
            // This line stores the parsed JSON object under the key "originalObj".
            setSessionStorage("originalObj", obj)
            // This line also stores the same object under the key "sortedObj".
            setSessionStorage("sortedObj", obj)
        })
                            `}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Create function for creating pet cards"} 
                                content={"When loading, filtering, sorting, or searching for pet cards, the approach involves initially removing all existing cards and then generating them anew. To maintain consistency with this method, a new function was made specifically for card creation. This involved the creation of a entirely new HTML element utilizing the createElement and innerHTML methods."}>
                            </DevNarr>
                            <ChildCode code={`
    // Function createCard dynamically creates and inserts HTML content to represent a pet card.
    // The function createCard takes a single parameter, obj, which is expected to be an object containing details of a pet.
    const createCard = (obj) => {
        // This line creates a new div element and assigns it to the variable colBox.
        let colBox = document.createElement("div");
        // If the pet's gender is "male", it sets gender to an HTML string containing the Font Awesome Mars icon (fa-mars).
        // If not, it sets gender to an HTML string containing the Venus icon (fa-venus).
        let gender = obj.gender=="male" ? '<i class="fa-solid fa-mars"></i>' :'<i class="fa-solid fa-venus"></i>';
        
        // The innerHTML property of colBox is set to a string of HTML content that represents the structure and content of the card.
        // Template literals (backticks) is used to insert JavaScript expressions directly into the HTML string using $ {}
        // This allows dynamic insertion of obj properties into the HTML.
        colBox.innerHTML=' <div class="col card-col">
                                <div class="card h-100">
                                    <img src="$ {obj.img}" class="card-img-top" alt="$ {obj.name}">
                                    <i class="fa-regular fa-heart"></i>
                                    <div class="card-body">
                                        <h1 class="card-title">$ {obj.name} $ {gender}</h1>
                                        <p class="card-text breedText">$ {obj.breed} | $ {obj.age} years</p>
                                        <p class="card-text distanceText"><i class="fa-solid fa-location-dot"></i> $ {obj.distance}km</p>
                                    </div>
                                </div>
                            </div>
                        '

        // This line appends the created colBox element to an existing container element on the web page. 
        document.querySelector("#container").append(colBox)
    }
                            `}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Categoty Filter"} 
                                content={"For each category of button, each species are assigned with dataset, and the species selected by the user is stored in the session storage. Subsequently, the animal species in the original JSON file is compared with the type stored in the session stroage. If they match, the card is generated for the respective animal species."}>
                            </DevNarr>
                            <ChildCode code={`
    // It checks the values of speciesSession and sortedObjSession 
    // Depending on these values, it creates and displays cards for elements stored in originalObjSession or sortedObjSession

    // If speciesSession is null or an empty string (""),
    if(speciesSession==null || speciesSession==""){
        // And, if sortedObjSession is null or an empty string,
        if(sortedObjSession==null || sortedObjSession==""){
            // Iterates over each element in the originalObjSession array.
            originalObjSession.forEach(element => {
                // Calls the createCard function for each element in the array.
                // If sortedObjSession is not available, it falls back to displaying the original, unsorted list of pets.
                createCard(element)
            })

        // if sortedObjSession is neither null nor an empty string.
        }else{
            // Iterates over each element in the sortedObjSession array.
            sortedObjSession.forEach(element => {
                // Calls the createCard function for each element in the sorted array.
                createCard(element)
            })
    }
                            `}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Search"} 
                                content={"When a user searches for a pet's name, the relevant animal should be displayed. Therefore, it's essential to verify that the searched name in the input field matches the name of the animal. Initially, both the search input value and the animal name are converted to uppercase to ensure case-insensitive comparison. The indexOf() method is then used to determine if the animal name contains the search input. If the indexOf() value is greater than -1, it indicates that there is a corresponding animal for the input value, and the animal's card is generated accordingly"}>
                            </DevNarr>
                            <ChildCode code={`
    // It filters and displays a list of pet cards based on user searched and selected species.

    // Declares a variable named inputValue to store the user input.
    // e.target.value: Refers to the value of the input field where the event was triggered. 
    // .toUpperCase(): Converts the input value to uppercase to make the filtering case-insensitive.
    let inputValue = e.target.value.toUpperCase();

    // sortedObj: An array of pet objects that have been sorted or filtered previously.
    // Iterates over each item in the sortedObj array. The item is an individual pet object.
    sortedObj.forEach(item => {
        // speciesSession: An array that contains the selected species from session storage or a previous user selection
        // Iterates through each species in speciesSession
        for(let i=0;i<speciesSession.length;i++){
            // If the species of the current pet matches any of the selected species, 
            if(item.species==speciesSession[i]){
                // item.name: Refers to the name of the current pet object.
                // .toUpperCase(): Converts the pet’s name to uppercase for case-insensitive comparison.
                let petName = item.name.toUpperCase()

                // Checks if inputValue is found within petName. 
                // If inputValue is found, indexOf will return a number greater than -1, indicating a match.
                if(petName.indexOf(inputValue)>-1){
                    // Calls the createCard function to create and display a card for the current item (pet) that matches both the species and input value criteria.
                    createCard(item)
                }
            }
        }
    });
                            `}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Sort"} 
                                content={"When the user clicks the sort button, the animal names should be sorted in ascending or descending order. This is done by sorting objects using the sort() method. Initially, all animal names, regardless of the case, are converted to capital letters so that the sorting is done. This adds logic to the sorting process. "}>
                            </DevNarr>
                            <DevNarr 
                                content={"On the ascending order, if name A is alphabetically ordered over name B, the function returns -1 and indicates that name A must precede name B in the sorted list. Conversely, if name A is alphabetically ordered over name B, the function returns 1 and indicates that name A must precede name B. If name A and name B are the same, the function returns 0, and the relative order remains unchanged. The reverse applies for descending order."}>
                            </DevNarr>
                            <ChildCode code={`
    // A function ascendingSort sorts an array of objects in ascending order based on the name property of each object
    const ascendingSort = (object) =>{
        // The sort method takes a comparison function that compares two elements at a time, a and b.
        object.sort((a,b) =>{
            // This ensures that the comparison is case-insensitive
            const nameA = (a.name).toUpperCase();
            const nameB = (b.name).toUpperCase();

            //  If nameA is greater than nameB, it returns 1, indicating that a should come after b.
            if(nameA > nameB) return 1;
            //  If nameA is less than nameB, it returns -1, indicating that a should come before b
            if(nameA < nameB) return -1;
            //  If nameA is equal to nameB, it returns 0, indicating that their order doesn't need to change relative to each other.
            if(nameA === nameB) return 0;
        })
        // A function stores a key-value pair in session storage.
        setSessionStorage("sortedObj", object)
    }
                            `}/>
                        </div>
                        
                    </div>
            </div>

            <div id='takeaway'>
                <Narrative title={"Take away"} content={"I recently discovered that I can manage the sorting method with custom logic, which makes me anticipate utilizing various sorting approaches in the future. Additionally, I learned about a method that helps locate characters within a string and return the index of the first occurrence, providing a useful tool for comparing strings in certain situations. During the process of filtering categories, managing the addition and removal of other species while retaining the clicked species turned out to be more complicated than initially expected, especially when combined with session storage management."}/>
            </div>
            
        </section>
    </div>

    </main>
  )
}

export default PetList;