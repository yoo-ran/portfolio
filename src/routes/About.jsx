import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faCss3Alt, faSquareJs, faReact, faPhp} from '@fortawesome/free-brands-svg-icons';


function About() {
  return (
    <div className='flex flex-col gap-y-40'>
      {/* Banner */}
      <section className='flex flex-col justify-center items-center gap-y-8 text-center pt-32 pb-10'>
        <p className='font-head'>Hi, my name is</p>
        <div  className='font-head'>
            <h1 className='font-black text-4xl'>Yooran Kim</h1>
            <p className='text-blue font-bold'>A Front-End Developer</p>
        </div>
        <div className='font-head text-m'>
            <p>I love CODING</p>
            <p>because it has ANSWER!</p>
        </div>
        <div>
          <img src="src/images/headShot.png" alt="Head Shot" className='w-1/2'/>
        </div>
        <button className='bg-blue h-10 w-1/4 rounded-full text-white'>Project <FontAwesomeIcon icon={faChevronRight} /></button>
      </section>

      {/* About Me */}
      <section className='flex flex-col items-center gap-y-6'>
        <h2 className='font-head font-black text-2xl'>About Me</h2>
        <article className='grid grid-cols-3 text-center gap-x-4'>
          <div>
            <p className='text-gray'>Born</p>
            <strong className='text-lg'>June 23, 1998</strong>
          </div>
          <div>
            <p className='text-gray'>Nationality</p>
            <strong className='text-lg'>South Korea</strong>
          </div>
          <div>
            <p className='text-gray'>MBTI</p>
            <strong className='text-lg'>ISTJ</strong>
          </div>
        </article>
        <p className='border-dashed border-b-2 border-lightBlue w-11/12'></p>
        <article className='w-11/12'>
          <h3 className='font-black'>I have an unlimited love for <span className='text-red'>CODING</span> because, to me, it's not just lines of text; it's the pursuit of <span className='text-red'>ANSWER</span>.</h3>
          <br/>
          <p>
            As a front-end developer, I thrive on the challenge of transforming concepts into tangible, interactive solutions. Coding isn't just a skill for me; it's a journey where I put together all the knowledge that I have stacked and discover the answers with the insight I've honed. Coding is always wait for me at the finish line with the answer.
            <br/><br/>In addition to my technical skills, I'm always open to talking and sharing other solutions, new technologies and design trends with people to enhance my skill set. I am interested and curious about new knowledge because it will expand my point of view and allow me to find more ways to find a solution. To do that, I usually go to seminars and workshops to meet people who are in the same industry.
            <br/><br/>Let's embark on this coding journey together and create meaningful, seamless, and visually appealing :)
          </p>        
        </article>
        <button className='bg-red text-white h-10 w-1/4 rounded-full'>Resume <FontAwesomeIcon icon={faChevronRight} /></button>
      </section>

      {/* Skills */}
      <section className='flex flex-col items-center gap-y-8'>
          <h2 className='font-head font-black text-2xl'>Skills</h2>
          <div className='grid grid-cols-5 gap-4'>
            <FontAwesomeIcon icon={faHtml5}  className='text-blue text-4xl' />
            <FontAwesomeIcon icon={faCss3Alt}  className='text-blue text-4xl' />
            <FontAwesomeIcon icon={faSquareJs} className='text-blue text-4xl'  />
            <FontAwesomeIcon icon={faReact}  className='text-blue text-4xl' />
            <FontAwesomeIcon icon={faPhp}  className='text-blue text-4xl' />
          </div>
      </section>

      {/* Values */}
      <section className='flex flex-col items-center gap-y-8'>
          <h2 className='font-head font-black text-2xl text-center'>Values</h2>
          <article className='w-11/12'>
            <h3 className='text-red text-center text-xl font-black mb-4'>"WHY?"</h3>
            <p>I tend to ask <span className='text-red'>"WHY"</span> to everything.
            <br/>Whatever I see and hear, in my mind, I think <span className='text-red'>"WHY?"</span>
            <br/>Consequently, all my values come from <span className='text-red'>"WHY?"</span></p>
          </article>
          <article className='w-11/12 flex flex-col gap-y-8'>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Logical Thinking</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> did I make that decision?</p>
              <p>
              Questioning the reasons behind actions, decisions, or beliefs fosters critical thinking skills by prompting to evaluate information critically. It encourages to assess the validity, reliability, and relevance of information before forming conclusions or making decisions.
              </p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Efficient</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> is this needed?</p>
              <p>
                Through questioning, it enables to uncover inefficiencies, bottlenecks, and redundancies that may be hindering productivity or effectiveness. This allows to streamline workflows, eliminate unnecessary steps, and allocate resources more efficiently.
              </p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-xl font-black'>Problem-Solving</h3>
              <p className='text-gray'><span className='text-red'>WHY</span> does this happen?</p>
              <p>
                Understanding why something occurred enables to develop targeted and sustainable solutions. By addressing the root cause, rather than merely treating symptoms, I can implement strategies that are more likely to resolve the problem effectively in the long term.
              </p>
            </div>
          </article>
      </section>

      {/* Hobbies */}
      <section className='flex flex-col gap-y-8 items-center mb-40'>
        <h2 className='font-head font-black text-2xl text-center'>Hobbies</h2>
        <article className='w-11/12'>
          <p>
          Beyond coding, in my free time, I thrive on diverse interests that keep life exciting and balanced between as a developer and as myself.
          <br/><br/>Also, I find solace and inspiration in various hobbies that complement my passion for front-end development. Here are a few activities that fuel my creativity and balance.
          </p>
        </article>
        <article>
          <div className="relative bg-[url('src/images/hobby-cycle.jpg')] bg-cover bg-center py-10 px-4 h-full w-full">
            <p className='text-white z-50'>
              <span className='text-xl'>Cycling</span> is not just a way to stay active; it's my therapy, exploring new routes and enjoying the beauty of nature. The feeling of the wind in my hair and the thrill of riding the open road helped me refresh. It’s one of my favorite ways to release my stress and pressure to have space in my mind.
            </p>
            <div className='absolute -inset-0 bg-black opacity-30'></div>
          </div>
        </article>

      </section>
    </div>
  )
}

export default About;