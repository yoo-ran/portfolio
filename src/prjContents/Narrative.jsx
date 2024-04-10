import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Narrative = (props) => {

    useGSAP(() => {
        // gsap.to('#about', {
        //     scrollTrigger: {
        //       trigger: '#about',
        //       scrub:true,
        //       start: 'top center',
        //       end: 'bottom center',
        //       markers:true
        //     },
        //     // y: 100, // adjust the value for the desired translation
        //     duration: 0.5,
        //     ease: 'power1.out', // optional easing function
        //     opacity:1
        //   });
    })


    return(
        <div>
            <div className='flex items-center justify-between mb-10'>
                <p className='bg-lightBlue w-1/4 md:w-1/3 h-0.5 rounded-full'></p><h2 className='text-gray text-lg md:text-2xl font-head font-bold'><span className='relative'>{props.title}<span id='aboutL' className='underline w-full'></span></span></h2><p className='bg-lightBlue w-1/4 md:w-1/3 h-0.5 rounded-full'></p>
            </div>
            <p>{props.content}</p>
        </div>
    )
}
  
  export default Narrative;