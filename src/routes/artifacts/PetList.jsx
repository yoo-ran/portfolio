import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faSquareGithub, faJs, faCss3Alt, faSass} from '@fortawesome/free-brands-svg-icons';

import ChildCode from '../highlights/multistep/ChildCode';
import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
// import DetailNarr from '../../prjContents/DetailNarr';

import petlist from "../../images/petlist.png"
import SEO from '../../components/Seo';

function PetList() {
  return (
    <div>
        <SEO
          title='Yooran KIM_PETLIST FILTER'
          description="Explore the pet list project with filtering, sorting, and searching functionality by Yooran Kim, a frontend developer skilled in creating interactive and user-friendly web applications. This project showcases Yooran's expertise in implementing advanced features such as filtering by categories, sorting by different criteria, and searching for specific pets. Learn about the technologies utilized, including HTML, CSS, JavaScript, to create a dynamic and responsive pet list that provides a seamless user experience."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, pet list project, filtering, sorting, searching, HTML, CSS, JavaScript"
          url="https://yoorankim.com/petlist"
        />
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
                    <a href='https://github.com/yoo-ran/pet-list-filter' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl md:text-2xl md:w-8' /> Github</a>
                    <a href='https://petlistfilter.yoorankim.com/' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl md:text-2xl md:w-8' /> Website</a>
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
                                    "Initially, I employed the fetch to retrieve pet data from JSON files, ensuring smooth data acquisition and management. I handled successful responses using the then(), setting the stage for subsequent data manipulation. The JSON data is stored in session storage to preserve the integrity of both the original and filtered pet data across user sessions. This approach guarantees that data persistence remains intact even upon user-initiated refreshes, empowering seamless utilization of data throughout various functionalities, such as loading, resetting, sorting, clearing, searching, and filtering. Adhering to UX best practices, preserving data beyond the user's browser session may lead to confusion and disrupt the expected user experience. Therefore, I chose to forgo local storage utilization. Instead, I opted for session-based data management, ensuring data persistence only for the user's session. This approach guarantees a consistent and reliable user experience, aligning with expected behaviors and minimizing confusion, as data resets appropriately with each new session."
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
                                title={"Create function for creating pet cards"} 
                                content={"When loading, filtering, sorting, or searching for pet cards, the approach involves initially removing all existing cards and then generating them anew. To maintain consistency with this method, a new function was made specifically for card creation. This involved the creation of a entirely new HTML element utilizing the createElement and innerHTML methods."}>
                            </DevNarr>
                            <ChildCode code={`
    const createCard = (obj) => {
        let colBox = document.createElement("div");
        let gender = obj.gender=="male" ? '<i class="fa-solid fa-mars"></i>' :'<i class="fa-solid fa-venus"></i>';
        
        colBox.innerHTML=' <div class="col card-col">
                                <div class="card h-100">
                                    <img src="$ {obj.img}" class="card-img-top" alt="$ {obj.name}">
                                    <i class="fa-regular fa-heart"></i>
                                    <div class="card-body">
                                        <h4 class="card-title">$ {obj.name} $ {gender}</h4>
                                        <p class="card-text breedText">$ {obj.breed} | $ {obj.age} years</p>
                                        <p class="card-text distanceText"><i class="fa-solid fa-location-dot"></i> $ {obj.distance}km</p>
                                    </div>
                                </div>
                            </div>'
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
    if(speciesSession==null || speciesSession==""){
        if(sortedObjSession==null || sortedObjSession==""){
            originalObjSession.forEach(element => {
                createCard(element)
            })
        }else{
            sortedObjSession.forEach(element => {
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
     let inputValue = e.target.value.toUpperCase();
     sortedObj.forEach(item => {
        for(let i=0;i<speciesSession.length;i++){
            if(item.species==speciesSession[i]){
                 let petName = item.name.toUpperCase()
                 if(petName.indexOf(inputValue)>-1){
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
                                content={"When the user clicks the sort button, the animal names should be sorted in ascending or descending order. This is done by sorting objects using the sort() method. Initially, all animal names, regardless of the case, are converted to capital letters so that the sorting is done. This adds logic to the sorting process. On the ascending order, if name A is alphabetically ordered over name B, the function returns -1 and indicates that name A must precede name B in the sorted list. Conversely, if name A is alphabetically ordered over name B, the function returns 1 and indicates that name A must precede name B. If name A and name B are the same, the function returns 0, and the relative order remains unchanged. The reverse applies for descending order."}>
                            </DevNarr>
                            <ChildCode code={`
    const ascendingSort = (object) =>{
        object.sort((a,b) =>{
            // Regardless of letter case
            const nameA = (a.name).toUpperCase();
            const nameB = (b.name).toUpperCase();

            if(nameA > nameB) return 1;
            if(nameA < nameB) return -1;
            if(nameA === nameB) return 0;
        })
    setSessionStorage("sortedObj", object)
}
                            `}/>
                        </div>
                        
                    </div>
            </div>

            <Narrative title={"Take away"} content={"I recently discovered that I can manage the sorting method with custom logic, which makes me anticipate utilizing various sorting approaches in the future. Additionally, I learned about a method that helps locate characters within a string and return the index of the first occurrence, providing a useful tool for comparing strings in certain situations. During the process of filtering categories, managing the addition and removal of other species while retaining the clicked species turned out to be more complicated than initially expected, especially when combined with session storage management."}/>
            
        </section>
    </div>

    </div>
  )
}

export default PetList;