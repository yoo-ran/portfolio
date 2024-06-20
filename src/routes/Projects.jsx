import { useRef,  useState, useEffect, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowUpRightFromSquare, faFaceSmileWink, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import gsap from 'gsap';
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

import { projectData } from '../data/projectData';
import { StateContext } from '../routes/StateContext';




import SEO from '../components/Seo';

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger);


function Projects() {
  const [category, setCategory] = useState(projectData);
  const [prjId, setPrjId] = useState([]);
  const [clicked, setClicked] = useState("All")
  const { sharedState } = useContext(StateContext);
  const tl = useRef();
  const filterKeyword = ["All", "React", "API", "JS", "CSS3", "HTML5", "Tailwind"]


  const handleBtns = (e) => {
    let word=e.target.value;
    var filtered = [];
    var filteredId = []

    projectData.forEach((prj,id) => {
      prj.keywords.forEach((keyword)=>{
        if(keyword==word){
          filtered.push(prj)
          filteredId.push(`prj0${id}`)
          setClicked(word)
        }
      })
    });

    if(word=="All"){
      filtered = projectData
      setClicked(word)
    }    

    setCategory(filtered)
    setPrjId(filteredId)
  }



  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searched = projectData.filter((prj) => {
      return prj.title.toLowerCase().includes(searchTerm);
    });

    if(searched.length>0){
      setCategory(searched);
    }
  
  };
 

  useEffect(()=>{
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#prjSection",
          start: "-200 bottom",
          end: "bottom bottom",
          scrub: true
        }
      })

        console.log(`#prj0${category[0].id}`);

        Flip.fit("#circle", `#prj0${category[0].id}`, {
          opacity:1,
          duration: 0.1, 
          ease: "power1.inOut",
        })

        for (var i = 0; i < category.length; i++) {
          tl.current.add(
            Flip.fit("#circle",  `#prj0${category[i].id}`, {
              duration: 2,
              ease: "power4.in"
            })
          )
          console.log(`#prj0${category[i].id}`);
        }



      })
    })
    


   
  return(
    <div id='home' className={`w-screen transition-[width] 
    ${sharedState == "true" ? 
    "md:w-[calc(100%-8rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-11rem)] 2xl:w-[calc(100%-13rem)] 3xl:w-[calc(100%-16rem)]":
    "md:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] 2xl:w-[calc(100%-7rem)] 3xl:w-[calc(100%-8rem)]"} `} 
    >
        <SEO
          title='Yooran KIM_PROJECTS'
          description="Explore the projects of Yooran Kim, a frontend developer skilled in creating responsive and engaging web applications. Discover a variety of projects showcasing expertise in HTML, CSS, JavaScript, and popular frameworks like React. From simple websites to complex web applications, Yooran demonstrates creativity, problem-solving skills, and a passion for building exceptional user experiences."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, projects, HTML, CSS, JavaScript, React, projects"
          url="https://yoorankim.com/projects"
        />
      {/* Banner */}
      <section className='h-80 bg-white text-center flex justify-center items-center z-10'>
        {/* Scroll box */}
        <h2 className='font-bold font-head text-3xl text-blue'>Projects <FontAwesomeIcon icon={faFaceSmileWink} className='text-blue'/></h2>
      </section>

      {/* Filter Icon */}
    
      <section className='flex justify-center items-center mt-10'>
        <div className='flex flex-col justify-center items-center gap-y-8 w-10/12 md:w-4/12'>
          <div className='w-full flex justify-between'>
            <input type="search" placeholder='Search project name' onChange={(event)=>{handleSearch(event)}} className='border-b-2 border-lightBlue focus:outline-0 focus:border-gray transition duration-200 px-2 pt-1 w-11/12 lg:text-lg'/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray'/></button>
          </div>
          <div className='flex flex-wrap justify-center md:justify-between gap-x-2 gap-y-4 w-full'>
            {filterKeyword.map((item)=>(
              <button key={item.id} value={item} onClick={(event)=>{handleBtns(event);}} className={` rounded-full px-3 py-1 text-sm lg:text-base hover:bg-gray hover:text-white ${clicked==item ? "bg-gray text-white" : "bg-lightBlue text-gray"}`}>{item}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id='prjSection' className='relative my-20 flex flex-col justify-center items-center gap-y-32 lg:gap-y-28'>
        <div id='circle' className='w-40 h-40 border border-blue rounded-lg absolute'></div>
          {category.map((item) => (
              <div key={item.id} id={`prj0${item.id}`} className="z-10 overflow-hidden flex flex-col items-center gap-y-8 md:flex-row md:w-6/12 lg:w-4/12 md:h-72 lg:h-80 md:gap-x-4 p-4">
                <img className="w-full md:w-96 md:h-full object-cover object-center rounded-lg" src={item.img} alt={item.img}/>
                
                <div className="px-6 py-4 w-full md:w-3/4 lg:w-[32rem] flex flex-col justify-between">
                  <div className="font-bold text-xl lg:text-2xl mb-1 font-head">{item.title} {`#prj0${item.id}`}</div>
                  <div className="pt-2 pb-2">
                    {item.keywords.map((keyword, index) => (
                      <span key={index} className="inline-block bg-white rounded-full px-3 py-1 text-sm lg:text-base text-gray mr-2 mb-2">{keyword}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg pb-6">
                    {item.descrp}
                  </p>
                  <hr className='border-gray border-dashed opacity-40'/>
                  <div className="pt-2 pb-2 flex justify-between text-base lg:text-lg">
                    <a href={item.gitLink}  target='_blank' className="inline-block rounded-full p-1 text-center text-blue mb-2 hover:text-gray">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href={item.webLink} target='_blank' className="inline-block rounded-full p-1 text-center text-blue mb-2 hover:text-gray">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href={item.more} className="inline-block rounded-full py-1 text-center text-red mr-2 mb-2 hover:text-gray">More +</a>
                  </div>
                </div>
              </div>
            ))}
         
      </section>
    </div>
  );
}

export default Projects;