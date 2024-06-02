import {  useState} from 'react';
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
  const [clicked, setClicked] = useState("All")



  const handleBtns = (e) => {
    let word=e.target.value;
    var filtered = [];

    projectData.forEach(prj => {
      prj.keywords.forEach((keyword)=>{
        if(keyword==word){
          filtered.push(prj)
          setClicked(word)
        }
      })
    });

    if(word=="All"){
      filtered = projectData
      setClicked(word)
    }    

    setCategory(filtered)
  }

  const handleSearch = (e) => {
  
    let searchTitle = Array.from(e.target.value.toLowerCase());
    let searched = [];


    projectData.forEach((prj)=>{
      let title = Array.from(prj.title.toLowerCase());
      let match = true;
      for (let i = 0; i < searchTitle.length && match; i++) {
        if (title[i] !== searchTitle[i]) {
          match = false;
        }
      }
      if (match) {
        searched.push(prj)
      }
    });

    setCategory(searched)
  }

 
  // });

  // useEffect(()=>{
    
  //   mm.add("(max-width: 768px)", () => {
  //     tl.current = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#prjSection",
  //         start: "-200 bottom",
  //         end: "bottom bottom",
  //         scrub: true,
  //       }
  //     })
      
  //     Flip.fit("#circle", "#prj01", {
  //       opacity:1,
  //       duration: 0.1, 
  //       ease: "power1.inOut"
  //     })
  //     tl.current.add(Flip.fit("#circle", "#prj01", {
  //       duration: 2, 
  //       ease: "power4.in"
  //     })).add(Flip.fit("#circle", "#prj02", {
  //       duration: 2, 
  //       ease: "power4.in"
  //     })).add(Flip.fit("#circle", "#prj03", {
  //       duration: 2, 
  //       ease: "power4.in"
  //     })).add(Flip.fit("#circle", "#prj04", {
  //       duration: 2, 
  //       ease: "power4.in"
  //     }))
  //   })
  // })
    


   
  return(
    <div className='md:w-11/12'>
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
            <input type="search" placeholder='Search project name' onChange={(event)=>{handleSearch(event)}} className='border-b-2 border-lightBlue focus:outline-0 focus:border-gray transition duration-200 px-2 pt-1 w-11/12'/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray'/></button>
          </div>
          <div className='flex flex-wrap justify-between gap-y-4 w-full'>
              <button value={"All"} onClick={(event)=>{handleBtns(event);}} className={`bg-lightBlue rounded-full px-3 py-1 text-sm lg:text-xl text-gray hover:bg-gray hover:text-white ${clicked=="All" ? "bg-gray text-white":""}`}>All</button>
              <button value={"React"} onClick={(event)=>{handleBtns(event);}} className={`bg-lightBlue rounded-full px-3 py-1 text-sm lg:text-xl text-gray hover:bg-gray hover:text-white ${clicked=="React" ? "bg-gray text-white":""}`}>React</button>
              <button value={"API"} onClick={(event)=>{handleBtns(event);}} className={`bg-lightBlue rounded-full px-3 py-1 text-sm lg:text-xl text-gray hover:bg-gray hover:text-white ${clicked=="API" ? "bg-gray text-white":""}`}>API</button>
              <button value={"HTML5"} onClick={(event)=>{handleBtns(event);}} className={`bg-lightBlue rounded-full px-3 py-1 text-sm lg:text-xl text-gray hover:bg-gray hover:text-white ${clicked=="HTML5" ? "bg-gray text-white":""}`}>HTML5</button>
              <button value={"CSS3"} onClick={(event)=>{handleBtns(event);}} className={`bg-lightBlue rounded-full px-3 py-1 text-sm lg:text-xl text-gray hover:bg-gray hover:text-white ${clicked=="CSS3" ? "bg-gray text-white":""}`}>CSS3</button>
              <button value={"JS"} onClick={(event)=>{handleBtns(event);}} className={`bg-lightBlue rounded-full px-3 py-1 text-sm lg:text-xl text-gray hover:bg-gray hover:text-white ${clicked=="JS" ? "bg-gray text-white":""}`}>JS</button>
              <button value={"Tailwind"} onClick={(event)=>{handleBtns(event);}} className={`bg-lightBlue rounded-full px-3 py-1 text-sm lg:text-xl text-gray hover:bg-gray hover:text-white ${clicked=="Tailwind" ? "bg-gray text-white":""}`}>Tailwind</button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id='prjSection' className='my-20 flex flex-col justify-center items-center gap-y-32'>
          {category.map((item) => (
              <div key={item.id} id='prj01' className="z-10 overflow-hidden flex flex-col items-center gap-y-8 md:flex-row md:w-6/12 md:h-72 md:gap-x-4 p-4">
                <img className="w-full md:w-1/2 md:h-full md:object-cover rounded-lg" src={item.img} alt={item.img}/>
                <div className="px-6 py-4 w-full md:w-3/4">
                  <div className="font-bold text-xl mb-1 font-head">{item.title}</div>
                  <div className="pt-2 pb-2">
                    {item.keywords.map((keyword, index) => (
                      <span key={index} className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray mr-2 mb-2">{keyword}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base pb-6">
                    {item.descrp}
                  </p>
                  <hr className='border-gray border-dashed opacity-40'/>
                  <div className="pt-4 pb-2 grid grid-cols-3">
                    <a href={item.gitLink}  target='_blank' className="inline-block rounded-full p-1 text-m text-center text-blue mb-2 hover:text-gray">Github <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href={item.webLink} target='_blank' className="inline-block rounded-full p-1 text-m text-center text-blue mb-2 hover:text-gray">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href={item.more} className="inline-block rounded-full py-1 text-m text-center text-red mr-2 mb-2 hover:text-gray">More +</a>
                  </div>
                </div>
              </div>
            ))}
         
      </section>
    </div>
  );
}

export default Projects;