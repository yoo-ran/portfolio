import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faReact, faSquareGithub, faJs} from '@fortawesome/free-brands-svg-icons';

import ChildCode from '../highlights/multistep/ChildCode';
import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
import SEO from '../../components/Seo';

import weather from "../../images/weather.png"

function Weather() {
  return (
    <div>
        <SEO
          title='Yooran KIM_WEATHER API'
          description="Explore the weather API integration project by Yooran Kim, a frontend developer adept at building interactive and informative web applications. This project demonstrates Yooran's proficiency in integrating weather data into web applications, allowing users to retrieve current weather conditions, forecasts, and other relevant information. Learn about the technologies employed, including HTML, CSS, JavaScript, and frameworks like React, to create a dynamic and user-friendly weather application."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, weather API integration, weather application, HTML, CSS, JavaScript, React, Tailwind"
          url="https://yoorankim.com/petlist"
        />
         <div className='flex flex-col gap-y-20 items-center mb-40 pt-20'>
        {/* <PrjMenu/> */}
        {/* Banner */}
        <section className="h-96 bg-cover bg-center w-full md:h-[40rem]" style={{ backgroundImage: `url(${weather})` }}></section>

        {/* Skills & Link */}
        <section className='flex justify-around w-10/12'>
            <article>
                <h2 className='text-blue text-xl font-head mb-4 font-bold'>Skills</h2>
                <div className='flex flex-col gap-y-2'>
                    <p className='text-gray'><FontAwesomeIcon icon={faHtml5} className='text-blue text-xl md:text-2xl md:w-8' />HTML</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faJs} className='text-blue text-xl md:text-2xl md:w-8'/>Javascript</p>
                    <p className='text-gray'><FontAwesomeIcon icon={faReact} className='text-blue text-xl md:text-2xl md:w-8'/>React.js</p>
                </div>
            </article>
            <article>
                <h2 className='text-blue text-xl font-head mb-4 font-bold'>Link</h2>
                <div className='flex flex-col gap-y-2'>
                    <a href='https://github.com/yoo-ran/weather_app' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faSquareGithub} className='text-blue text-xl md:text-2xl md:w-8' /> Github</a>
                    <a href='#' target='_blank' className='text-gray hover:text-black'><FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl md:text-2xl md:w-8' /> Website</a>
                </div>
            </article>
        </section>

        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 w-11/12 md:w-7/12'>
            <Narrative id="about" title={"About"} content={"The weather app project allows users to check the weather now and the weather forecast. In terms of development, this app showcases the skill of React.js, Tailwind, and API management."}/>
            <Narrative title={"Brainstorming"} content={"Before starting to work on the project, I first researched how to fetch API to know if I could bring data from API or not. Also, I researched some methods in React.js to handle data which is updated regularly. In terms of design, I browsed Behance and Pinterest to get weather app designs and gathered some examples. Based on references, I put the background of light gray and gave the app box shadow to emphasize the app more."}/>
            
            <div className='flex flex-col gap-y-8'>
                <Narrative title={"Development"}></Narrative>
                    <div  className='flex flex-col gap-y-8'>
                        <div>
                            <DevNarr 
                                title={"Fetching Data(React.js, API)"} 
                                content={"Firstly, to get data from API, I used Axios. According to Google, it is easier to get data using the fetch() than using the get() method. Also, it changes the data to JSON automatically, which makes it simpler and easier to manage data. To do that, I install Axios in the React app. Also, I used await and async so I could handle errors easily and simplify the promises when getting data. Also, I used try/catch, because it is easier for me to read the code."}>
                            </DevNarr>
                            <ChildCode code={`
        useEffect(()=>{
        const fetch = async() =>{
            try{
                const res = await axios.get("http://api.weatherapi.com/v1/forecast.json?q=Vancouver&days=7&aqi=no&alerts=no");
                setLocation(res.data.location);
                setCurrent(res.data.current);
                setCondition(res.data.current.condition);
                setForecast(res.data.forecast.forecastday)
            }catch(e){
                console.log(e);
            }
        };
        fetch();
    },[]);`}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Manage and Handle Data"} 
                                content={"Once I get the data, I should manage and handle the data. useEffect hook is one of them. useEffect allows me to handle asynchronous operations without blocking the rendering of your component. Especially, I can fetch data from an API and update the state when the data is ready. I used useState hook as well to update data in HTML. When the state is updated using the setState function, React automatically triggers a rerender of the component with the updated state, so whenever API data is updated, the setState is also updated, changing the data."}>
                            </DevNarr>
                            <ChildCode code={`
        const [location, setLocation] = useState({});
        const [current, setCurrent] = useState({});
        const [condition, setCondition] = useState({});
        const [forecast, setForecast] = useState([])

        return(
            <div>
                <p className='text-lg font-medium md:text-2xl'>{location.region}</p>
                <p className='text-sm md:text-base text-neutral-500'>{today}</p>
            </div>
            <div>
                <p className=' flex inline-start' >
                    <span className='text-7xl md:text-9xl'>{current.temp_c}</span><span className='text-xl'>&deg;C</span>
                </p>
                <p className='flex items-center text-neutral-500'>
                    <img className='w-1/6' src={condition.icon} alt={condition.text}/>
                    {condition.text}
                </p>
            </div>
            <div className='grid place-items-center gap-y-1'>
                <FontAwesomeIcon icon={faWind} className='text-m md:text-lg'/>
                <p>
                    <span className='text-sm md:text-m '>{current.wind_mph}</span>   
                    <span className='text-xs'>mph</span> 
                </p>
            </div>
            <div className='grid place-items-center gap-y-1'>
                <FontAwesomeIcon icon={faWater} className='text-m md:text-lg'/>
                <p>
                    <span className='text-sm md:text-m'>{current.precip_mm}</span>
                    <span className='text-xs'>mm</span>
                </p>
            </div>
            <div className='grid place-items-center gap-y-1'> 
                <FontAwesomeIcon icon={faDroplet} className='text-m md:text-lg' />
                <p>
                    <span className='text-sm md:text-m'>{current.humidity}</span>
                    <span className='text-xs'>%</span>
                </p>
            </div>
        )
                            `}/>
                        </div>
                        <div>
                            <DevNarr 
                                title={"Date and Week data"} 
                                content={"Since there was no data about the date and date of the week, I needed to make the date variable. To do that, I used the new Date() method, including getFullYear(), getMonth(), and getDate(). Also, since as the days go by, the date of the week in the forecast part should be updated, I created a new array of the date of the week to continue updating, using a for loop."}>
                            </DevNarr>
                            <ChildCode code={`
        const date = new Date();
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

export default Weather