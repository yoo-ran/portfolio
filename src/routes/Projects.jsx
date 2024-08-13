import { useRef,  useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowUpRightFromSquare, faFaceSmileWink, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import gsap from 'gsap';
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

import { projectData } from '../data/projectData';

import SEO from '../components/Seo';

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger);

function Projects() {
  const [category, setCategory] = useState(projectData);
  const [prjId, setPrjId] = useState([]);
  const [clicked, setClicked] = useState("All")
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

  useEffect(() => {
    gsap.utils.toArray("#prjItem").forEach((div, i) => {
      gsap.to(div, 
        {
          opacity: 1,
          scrollTrigger: {
            trigger: div,
            start: "-70 bottom",
            end:"bottom bottom",
            scrub:true,
          },
          duration: 0.4, 
          ease:"power4.inOut"
        }
      );
    });
  }, [category]);


    
  

   
  return(
    <main>
        <SEO
          title='Yooran KIM_PROJECTS'
          description="Explore the projects of Yooran Kim, a frontend developer skilled in creating responsive and engaging web applications. Discover a variety of projects showcasing expertise in HTML, CSS, JavaScript, and popular frameworks like React. From simple websites to complex web applications, Yooran demonstrates creativity, problem-solving skills, and a passion for building exceptional user experiences."
          name='Yooran Kim'
          type='website'
          keywords="frontend developer, web developer, projects, HTML, CSS, JavaScript, React, projects"
          url="https://yoorankim.com/projects"
        />
      {/* Banner */}
      <section className='h-80 bg-white text-center flex justify-center items-center z-10 w-full'>
        <h2 className='font-bold font-head text-3xl text-blue'>Projects <FontAwesomeIcon icon={faFaceSmileWink} className='text-blue'/></h2>
      </section>

      {/* Filter Icon */}
      <section className='flex justify-center items-center mt-10 w-8/12 '>
        <div className='flex flex-col justify-center items-center gap-y-8 w-10/12 md:w-full lg:w-8/12  xl:w-6/12'>
          <div className='w-full flex justify-between'>
            <input type="search" placeholder='Search project name' onChange={(event)=>{handleSearch(event)}} className='border-b-2 border-lightBlue focus:outline-0 focus:border-gray transition duration-200 px-2 pt-1 w-11/12 lg:text-lg'/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray'/></button>
          </div>
          <div className='flex flex-wrap justify-center md:justify-between gap-x-2 gap-y-4 w-full'>
            {filterKeyword.map((item, id)=>(
              <button key={id} value={item} onClick={(event)=>{handleBtns(event);}} className={` rounded-full px-3 py-1 text-sm lg:text-base hover:bg-gray hover:text-white ${clicked==item ? "bg-gray text-white" : "bg-lightBlue text-gray"}`}>{item}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id='prjSection' className=' relative my-10 lg:my-20 flex flex-col justify-center items-center gap-y-20 lg:gap-y-28  w-full lg:w-8/12'>
          {category.map((item) => (
              <div key={item.id} id={`prjItem`} className="opacity-0 z-10 overflow-hidden flex flex-col justify-between items-center gap-y-4 md:flex-row w-10/12 md:w-10/12 xl:w-6/12 md:h-72 lg:h-80 md:gap-x-4 px-4 pt-4 xl:px-6 md:pb-4 border border-blue rounded-lg hover:bg-white transition-all ">
                <img className="w-full h-56 md:w-56 lg:w-72 xl:w-80 md:h-full object-cover object-center rounded-lg" src={item.img} alt={item.title}/>
                
                <div className="w-full md:w-3/4 lg:w-[32rem] xl:w-7/12 flex flex-col justify-center h-full gap-y-6">
                  <div>
                    <div className="font-bold text-xl lg:text-2xl mb-1 font-head">{item.title}</div>
                    <div className="">
                      {item.keywords.map((keyword, index) => (
                        <span key={index} className="inline-block bg-white rounded-full px-3 text-sm lg:text-base text-gray mr-2 ">{keyword}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg">
                    {item.descrp}
                  </p>
                  <div>
                    <hr className='border-gray border-dashed opacity-40'/>
                    <div className="py-4 flex justify-between text-base lg:text-lg">
                      <a href={item.gitLink} aria-label={`${item.title} Github`}  target='_blank' className="inline-block rounded-full text-center text-blue hover:text-gray">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                      <a href={item.webLink} aria-label={`${item.title} Live Website`} target='_blank' className="inline-block rounded-full text-center text-blue hover:text-gray">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                      <a href={item.more} aria-label={`${item.title} Detail`} className="inline-block rounded-full text-center text-red hover:text-gray">More +</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
         
      </section>
    </main>
  );
}

export default Projects;