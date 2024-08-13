import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faSquareGithub, faJs, faCss3Alt, faReact, faNodeJs, faGithub} from '@fortawesome/free-brands-svg-icons';

import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
import SEO from '../../components/Seo';
import PrjMenu from '../../components/PrjMenu';
import ChildCode from '../highlights/multistep/ChildCode';

import zenbreath from "../../images/zenbreath/zenbreath.jpg"
import react from "../../images/skills/react.png"
import css from "../../images/skills/css.png"
import html from "../../images/skills/html.png"
import js from "../../images/skills/js.png"
import tailwind from "../../images/skills/tailwind.png"

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Zenbreath() {

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
    <main className='flex flex-col gap-y-20  mb-40'>
        <PrjMenu newPage={newPage} page={page}  />

        <SEO
            title='Real Estate App by Yooran Kim'
            description="Explore the Real Estate App project by Yooran Kim, a frontend developer focused on creating intuitive and user-friendly web applications. This project highlights Yooran's expertise in developing a comprehensive real estate platform that allows users to browse properties, view detailed listings, and save their favorite properties. Learn about the technologies used, including React, Node.js, and MySQL, to build a dynamic and responsive app that enhances the property search experience."
            name='Yooran Kim'
            type='website'
            keywords="frontend developer, web developer, real estate app, property listings, React, Node.js, MySQL"
            url="https://yoorankim.com/zenbreath"
        />

        {/* <PrjMenu/> */}
        <div className='flex flex-col lg:flex-row items-center w-full gap-y-14 md:mt-10 md:w-10/12 xl:w-8/12'>
            {/* Banner */}
            <section className="h-96 bg-cover bg-center w-10/12 md:h-[30rem] xl:h-[40rem]  rounded" style={{ backgroundImage: `url(${zenbreath})` }}></section>

            {/* Skills & Link */}
            <section className='flex flex-col items-center gap-y-10 lg:gap-y-20 w-10/12 '>
                <h1 className='text-2xl lg:text-3xl text-left font-head font-bold relative'>Zen Breath <span className='underline w-full'></span></h1>
                <div className="flex flex-col justify-around gap-y-8 lg:w-3/4">
                    <article className='bg-white flex justify-between rounded-xl border border-lightBlue p-4 drop-shadow-lg w-full'>
                        <h2 className='text-gray lg:text-xl font-head font-bold w-1/3'>Skills:</h2>
                        <div className='flex flex-wrap items-start gap-y-2 text-gray w-full'>
                            <p className='flex w-1/2'><img src={js} className='w-6 aspect-square mr-2'/>Javascript</p>
                            <p className='flex w-1/2'><img src={react} className='w-6 aspect-square mr-2'/>React</p>
                            <p className='flex w-1/2'><img src={css} className='w-6 aspect-square mr-2'/>CSS</p>
                            <p className='flex w-1/2'><img src={tailwind} className='w-6 aspect-square mr-2'/>Tailwind</p>
                            <p className='flex w-1/2'><img src={html} className='w-6 aspect-square mr-2'/>HTML</p>
                        </div>
                    </article>
                    <article className='bg-white flex items-start  rounded-xl border border-lightBlue p-4 drop-shadow-lg'>
                        <h2 className='text-gray lg:text-xl font-head font-bold w-1/3'>Team: </h2>
                        <div className='flex flex-col gap-y-2 w-full text-gray'>
                            <p>Yooran Kim<span> (Developer)</span></p>
                            <p>Eunsong Choi<span> (UXUI Designer)</span></p>
                        </div>
                    </article>
                    <article className='bg-white flex items-center rounded-xl border border-lightBlue p-4 drop-shadow-lg'>
                        <h2 className='text-gray text-xl font-head font-bold w-1/3'>Link: </h2>
                        <div className='flex justify-between w-full'>
                            <a href='https://github.com/yoo-ran/zenbreath' target='_blank' className='text-gray hover:text-black w-1/2'>
                                <FontAwesomeIcon icon={faGithub} className='text-blue text-xl xl:text-2xl md:w-8' /> 
                                Github
                            </a>
                            <a href='https://zenbreath.yoorankim.com/' target='_blank' className='text-gray hover:text-black w-1/2'>
                                <FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl xl:text-2xl md:w-8' /> 
                                Website
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </div>


        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 xl:gap-y-48 w-11/12 md:w-8/12 xl:w-6/12'>
            <div id='about'>
                <Narrative id="about" title={"About"} 
                content={"Zen-Breath is a mental health care application that helps not only well-sleep, and meditation but also with breathing patterns. It is a web application so I used react.js to make an SPA website to provide mobile friendliness and improve speed and responsiveness. Also, I added functionality such as playing music, animation, and countdown using Javascript"}/>
            </div>
            <div id='brainstorming'>
                <Narrative title={"Brainstorming"} content={"I planned the content strategy for easy access and engagement. I defined how components like the music player, animations, and countdown timers will seamlessly integrate into the user experience. I also ensured the effective implementation of session playback and progress-tracking functionalities to enhance user interaction and support mental well-being. I also researched how to integrate a Spline 3D scene into React.js."}/>
            </div>
            
            <div id='develop' className='flex flex-col gap-y-8'>
                <Narrative title={"Development"}></Narrative>
                  <div  className='flex flex-col gap-y-24 xl:gap-y-44'>
                      <div className='flex flex-col gap-y-6'>
                          <DevNarr 
                              title={"Breathe Page_Spline 3D"} 
                              content={"The Balloon animation was designed to assist users in practicing proper breathing techniques. I opted for an animation in which a balloon inflates and deflates. To implement this 3D balloon animation, I utilized a tool called Spline. I found documentation on GitHub that explains how to integrate Spline with React.js. Initially, I created the balloon object and set up the scene using Spline. Then, I copied the URL and passed it to the <Spline /> component in React. Additionally, I implemented an event on the button to enable users to start and stop the animation using each button. I referred to a GitHub document titled 'Trigger Spline events from outside' for guidance."}>
                          </DevNarr>
                          <ChildCode 
                          code={`
// The Spline component is used to embed and interact with 3D scenes created in Spline within a React application.
import Spline from '@splinetool/react-spline';

// The onLoad function is a callback that is triggered when the Spline scene is fully loaded.
function onLoad(splineApp) {
  // save the app in a ref for later use
  // so that it can be accessed later for interacting with the scene 
  spline.current = splineApp;
}

// The triggerAnimation function handles user interactions to trigger animations within the Spline scene.
function triggerAnimation(e) {
    // If the element contains the "start" class:
    if(e.target.classList.contains("start")){
        // The spline.current.emitEvent('mouseUp', 'Sphere') line triggers an event within the Spline scene, specifically the 'mouseUp' event for an object named 'Sphere'.
        spline.current.emitEvent('mouseUp', 'Sphere');
        // The startInhalationCountdown() function is called (presumably defined elsewhere) to start a countdown or some related functionality.
        startInhalationCountdown()

    // If the element does not contain the "start" class:
    }else{
        // The spline.current.emitEvent('mouseDown', 'Sphere') line triggers a 'mouseDown' event for the 'Sphere' object.
        spline.current.emitEvent('mouseDown', 'Sphere');
        // The stopAllCountdowns() function is called to stop any ongoing countdowns or related functionality.
        stopAllCountdowns()
    }
}

// This is a JSX snippet that renders the Spline 3D scene within the React component.
<Spline 
  // The scene prop specifies the URL of the Spline scene to be loaded.
  scene="https://prod.spline.design/RT5xPiwUBSDqBY0K/scene.splinecode" 
  // The onLoad prop is assigned the onLoad function, which will be called when the scene is fully loaded, allowing interaction with the scene.
onLoad={onLoad}
/>`}/>
                      </div>
                      <div className='flex flex-col gap-y-6'>
                          <DevNarr 
                              title={"Breathe Page_Counting function"} 
                              content={"To guide users through the correct breathing technique, I implanted functionalities for inhaling duration, exhaling duration, and counting the number of breaths."}>
                          </DevNarr>
                          <DevNarr 
                              content={"First, I managed state (useState Hook). I managed state variables (inCount, exCount, numCount) to track inhalation, exhalation, and overall exercise counts. I utilized boolean states (isCountingIn, isCountingEx) to monitor active inhalation and exhalation countdowns. Additionally, intervalIdIn and intervalIdEx are used to manage setInterval functions for timing these counts accurately."}>
                          </DevNarr>
                          <DevNarr 
                              content={"Then, I created functions for Inhale, Exhale, and Counting numbers. startInhalationCountdown initiates a 5-second inhalation countdown. exCountFunction begins a 3-second exhalation countdown after 5 inhalations. numCountFunction decreases numCount after each complete breathing cycle and manages the sequence of inhalation and exhalation countdowns until completion."}>
                          </DevNarr>
                          <DevNarr 
                              content={"Lastly, I used useEffect Hooks with dependencies on isCountingIn and isCountingEx trigger exCountFunction and numCountFunction respectively when these states change, ensuring smooth synchronization of the breathing exercises"}>
                          </DevNarr>
                          <ChildCode 
                          code={`
// Function to start the inhalation countdown (5 seconds)
const startInhalationCountdown = () => {
    // Check if neither inhalation nor exhalation is active
    if (!isCountingIn && !isCountingEx) {
        setIsCountingIn(true); // Mark inhalation as active
        let currentInCount = 0;

        // Set an interval to count up every second
        intervalIdIn = setInterval(() => {
            currentInCount += 1;
            setInCount(currentInCount); // Update the inhalation count state

            // If the count reaches 5, clear the interval and mark inhalation as inactive
            if (currentInCount === 5) {
                clearInterval(intervalIdIn);
                setIsCountingIn(false);
            }
        }, 1000);
    }
};

// Function to start the exhalation countdown (3 seconds)
const exCountFuntion = () => {
    // Check if inhalation is complete (inCount is 5) and exhalation is not active
    if (inCount === 5 && !isCountingEx) {
        setInCount(0); // Reset inhalation count to 0
        setIsCountingEx(true); // Mark exhalation as active
        let currentExCount = 0;

        // Set an interval to count up every second
        intervalIdEx = setInterval(() => {
            currentExCount += 1;
            setExCount(currentExCount); // Update the exhalation count state

            // If the count reaches 3, clear the interval and mark exhalation as inactive
            if (currentExCount === 3) {
                clearInterval(intervalIdEx);
                setIsCountingEx(false);
            }
        }, 1000);
    }
};

// Function to manage the overall countdown cycles
const numCountFuntion = () => {
    // Check if inhalation is complete (inCount is 0) and exhalation is complete (exCount is 3)
    if (inCount === 0 && exCount === 3) {
        setExCount(0); // Reset exhalation count to 0
        setNumCount(numCount - 1); // Decrement the overall cycle count

        startInhalationCountdown(); // Start the next inhalation cycle

        // If numCount is less than or equal to 1, stop all countdowns
        if (numCount <= 1) {
            stopAllCountdowns();
        }
    }
};

// useEffect hook to trigger exhalation countdown when inhalation is complete
useEffect(() => {
    exCountFuntion(); // Start exhalation countdown
}, [isCountingIn]);

// useEffect hook to manage overall cycle count after each exhalation
useEffect(() => {
    numCountFuntion(); // Update overall cycle count and start new inhalation
}, [isCountingEx]);

// Function to stop all countdowns and reset the state
const stopAllCountdowns = () => {
    clearInterval(intervalIdIn); // Stop inhalation countdown
    clearInterval(intervalIdEx); // Stop exhalation countdown
    setIsCountingIn(false); // Mark inhalation as inactive
    setIsCountingEx(false); // Mark exhalation as inactive
    setInCount(0); // Reset inhalation count
    setExCount(0); // Reset exhalation count
    setNumCount(3); // Reset overall cycle count to its initial state (3 cycles)
};`}/>
                      </div>
                      <div className='flex flex-col gap-y-6'>
                          <DevNarr 
                              title={"Meditation Page_Music Component"} 
                              content={"When the user selects a meditation item, and they pressed the “Play Music” button, the corresponding music begins playing. The music playback components were developed separately and imported into the meditation page."}>
                          </DevNarr>
                          <DevNarr 
                              content={"I set State variables (isPlaying, volume, currentTime, duration, close) control playback status, volume, current time, duration of the audio, and modal visibility. Also, I used audioRef and progressBarRef with useRef Hook to reference the audio element and progress bar."}>
                          </DevNarr>
                          <DevNarr 
                              content={"I created functions like togglePlayPause, handleVolumeChange, handleTimeUpdate, handleLoadedMetadata, formatTime, updateProgressBar, handleSeek, skipBackward, skipForward, and closeEvent manage play/pause toggling, volume adjustment, time tracking, progress bar updating, seeking, skipping backward and forward, and modal closing."}>
                          </DevNarr>
                          <DevNarr 
                              content={"I used useEffect hooks to call formatTime() whenever currentTime changes to format the current playback time for display. Also useEffect is used to add event listeners for 'timeupdate' and 'loadedmetadata' to update time and duration states (currentTime and duration) respectively, and removes them when the component unmounts."}>
                          </DevNarr>
                          <ChildCode 
                          code={`
// Function to activate the slider and move items forward or backward
const activate = (e) => {
    const slider = document.querySelector(".slider"); // Select the slider element
    const items = document.querySelectorAll("#item"); // Select all elements with the ID 'item'

    // If the event target has the 'next' class, move the first item to the end
    if (e.currentTarget.classList.contains("next")) {
        slider.append(items[0]);
    } 
    // If the event target has the 'prev' class, move the last item to the beginning
    else if (e.currentTarget.classList.contains("prev")) {
        slider.prepend(items[items.length - 1]);
    }
};

// Function to set the selected music item and open the music modal
const musicID = (item) => {
    setMItem(item); // Set the selected music item state
    setOpenM(true); // Open the music modal
};

// Function to toggle the state of the music modal from a child component
const openFromChild = (newOpenM) => {
    setOpenM(newOpenM);
};

// Function to toggle between play and pause states for the audio
const togglePlayPause = () => {
    if (isPlaying) {
        audioRef.current.pause(); // Pause the audio if it is currently playing
    } else {
        audioRef.current.play(); // Play the audio if it is currently paused
    }
    setIsPlaying(!isPlaying); // Toggle the play/pause state
};

// Function to handle volume change of the audio
const handleVolumeChange = (e) => {
    const newVolume = e.target.value; // Get the new volume value from the input
    audioRef.current.volume = newVolume; // Set the audio volume
    setVolume(newVolume); // Update the volume state
};

// Function to update the current time of the audio and progress bar
const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime); // Update the current time state
    updateProgressBar(); // Update the progress bar
};

// Function to handle metadata load and set the audio duration
const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration); // Set the duration state when metadata is loaded
};

// useEffect to add event listeners to the audio element and clean up on component unmount
useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener('timeupdate', handleTimeUpdate); // Listen to time updates
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata); // Listen to metadata load

    return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate); // Remove time update listener
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata); // Remove metadata load listener
    };
}, []);

// useEffect to format the time whenever the current time changes
useEffect(() => {
    formatTime(currentTime);
}, [currentTime]);

// Function to format time in minutes and seconds (e.g., "1:09")
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes}: seconds < 10 ? 0 seconds : seconds};
};

// Function to update the width of the progress bar based on current time
const updateProgressBar = () => {
    const progress = (audioRef.current.currentTime / duration) * 100;
    progressBarRef.current.style.width = 'progress%'; // Set the progress bar width
};

// Function to handle seeking (scrubbing) through the audio by clicking on the progress bar
const handleSeek = (e) => {
    const progressBarTotal = document.querySelector(".progress-bar");
    const progressBarWidth = progressBarTotal.clientWidth;

    if (progressBarWidth === 0) return; // Exit early if width is zero to avoid division by zero

    const seekTime = (e.nativeEvent.offsetX / progressBarWidth) * duration;

    if (isFinite(seekTime)) { // Ensure the seek time is valid
        audioRef.current.currentTime = seekTime; // Set the new current time
        setCurrentTime(seekTime); // Update the current time state
        updateProgressBar(); // Update the progress bar
    } else {
        console.error('Invalid seek time:', seekTime); 
    }
};

// Function to skip the audio backward by 10 seconds
const skipBackward = () => {
    audioRef.current.currentTime -= 10;
    setCurrentTime(audioRef.current.currentTime); // Update the current time state
    updateProgressBar(); // Update the progress bar
};

// Function to skip the audio forward by 10 seconds
const skipForward = () => {
    audioRef.current.currentTime += 10;
    setCurrentTime(audioRef.current.currentTime); // Update the current time state
    updateProgressBar(); // Update the progress bar
};

// Function to close or toggle the music modal
const closeEvent = () => {
    setOpenM(!openM); // Toggle the open state of the music modal
};

// Function to determine which volume icon to display based on the current volume
const volumeIcon = () => {
    if (Number(volume) === 1) {
        return <FontAwesomeIcon icon={faVolumeHigh} />; // High volume icon
    } else if (Number(volume) > 0 && Number(volume) < 1) {
        return <FontAwesomeIcon icon={faVolumeLow} />; // Low volume icon
    } else {
        return <FontAwesomeIcon icon={faVolumeOff} />; // Muted volume icon
    }
};`}/>
                      </div>
                      <div className='flex flex-col gap-y-6'>
                          <DevNarr 
                              title={"Profile Page_Calendar"} 
                              content={"A calendar feature was developed and integrated into the profile page, allowing users to view dates and log their daily activities or meditation plans."}>
                          </DevNarr>
                          <DevNarr 
                              content={"First, I defined State variables to manage current date, events, selected month and year, event details, modal state. Also, Constants was defined days of the week, number of days in the current month, and blank days at the beginning."}>
                          </DevNarr>
                          <DevNarr 
                              content={"Second, I used useEffect hooks handle event loading from and saving to localStorage to save user’s log"}>
                          </DevNarr>
                          <DevNarr 
                              content={"Third, I created functions to manage event addition, modal display for events, and date comparison for today's date."}>
                          </DevNarr>
                          <DevNarr 
                              content={"Lastly, I created components (CalendarHeader, CalendarDays, CalendarCells, EventModal) render calendar header, days of the week, calendar cells, and activity or modal interface."}>
                          </DevNarr>
                          <ChildCode 
                          code={`
// Setting up state variables
const [today] = useState(new Date()); // Initialize 'today' with the current date
const [events, setEvents] = useState([]); // State to hold the list of events
const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // State to hold the current month
const [currentYear, setCurrentYear] = useState(today.getFullYear()); // State to hold the current year
const [eventTitle, setEventTitle] = useState(''); // State to hold the title of a new event
const [eventDate, setEventDate] = useState(''); // State to hold the date of a new event
const [eventTheme, setEventTheme] = useState('blue'); // State to hold the theme color of a new event
const [isModalOpen, setIsModalOpen] = useState(false); // State to control the visibility of the modal

// Constants for day names and to generate the days of the current month
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Array representing the days of the week

// Generate an array representing the number of days in the current month
const noOfDays = new Array(new Date(currentYear, currentMonth + 1, 0).getDate())
  .fill(null)
  .map((_, i) => i + 1);

// Generate an array representing the blank days at the start of the calendar
const blankDays = new Array(new Date(currentYear, currentMonth).getDay()).fill(null);

// useEffect to load stored events from localStorage when the component mounts
useEffect(() => {
  const storedEvents = localStorage.getItem('events');
  if (storedEvents) setEvents(JSON.parse(storedEvents)); // If there are stored events, load them into the state
}, []);

// useEffect to store the events array in localStorage whenever the events state changes
useEffect(() => {
  localStorage.setItem('events', JSON.stringify(events)); // Store the updated events array in localStorage
}, [events]);

// Function to add a new event
const addEvent = () => {
  setEvents([
    ...events, // Copy the existing events
    {
      event_title: eventTitle, // Add the new event title
      event_date: eventDate, // Add the new event date
      event_theme: eventTheme // Add the new event theme color
    }
  ]);
  setIsModalOpen(false); // Close the modal after adding the event
  setEventTitle(''); // Clear the event title input
  setEventDate(''); // Clear the event date input
};

// Function to show the event modal for a specific date
const showEventModal = (date) => {
  setEventDate(currentMonth + 1}/ date / currentYear); // Set the event date based on the selected day
  setIsModalOpen(true); // Open the modal to add a new event
};

// Function to check if a given date is today
const isToday = (date) => {
  const day = new Date(currentYear, currentMonth, date); // Create a date object for the specified day
  return today.toDateString() === day.toDateString(); // Compare it with today's date
};`}/>
                      </div>

                  </div>
            </div>

            <div id='takeaway' className='flex flex-col gap-y-8'>
                <Narrative title={"Take away"}/>
                <div >
                    <h3 className='lg:text-lg xl:text-xl font-head font-bold'>Spline Integration</h3>
                    <p className='xl:text-lg'>
                      Using Spline for a 3D balloon animation was a new experience. I learned to integrate Spline with React using component URLs and implement start and stop animation features based on GitHub documentation.
                    </p>
                </div>
                <div>
                    <h3 className='lg:text-lg xl:text-xl font-head font-bold'>Codebase Maintenance</h3>
                    <p className='xl:text-lg'>
                      By breaking down functionality into reusable components, the codebase becomes more maintainable and scalable. This approach improves code organization, making it easier to update and expand specific application parts, and ensuring flexibility and efficiency in development.
                    </p>
                </div>
                <div>
                    <h3 className='lg:text-lg xl:text-xl font-head font-bold'>Data Management in React</h3>
                    <p className='xl:text-lg'>
                      Utilizing useState, useEffect, and localStorage improves data management by ensuring persistent storage of user-related information such as calendar events. This setup allows the application to maintain consistent data across sessions.
                    </p>
                    <p className='xl:text-lg'>
                      <dl className='list-disc'>
                        <li className='font-black xl:text-xl'>useState</li>
                        <li>
                            State variables are effectively managed with useState, facilitating dynamic updates and smooth user interactions.
                        </li>
                      </dl>
                      <dl className='list-disc'>
                        <li className='font-black  xl:text-xl'>useEffect</li>
                        <li>
                          useEffect handles event operations, ensuring data integrity with localStorage, thereby enhancing the overall user experience and reinforcing data handling practices.
                        </li>
                      </dl>
                    </p>
                </div>
            </div>
        </section>

    </main>
  )
}

export default Zenbreath