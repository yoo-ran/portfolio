import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { useContext }  from 'react';
import { StateContext } from '../routes/StateContext';


function Footer() {
  const { sharedState } = useContext(StateContext);

  return(
    <div 
    className={`w-screen transition-[width] bg-white text-center py-6 text-sm
    ${sharedState == "true" ? 
    "md:w-[calc(100%-8rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-11rem)] 2xl:w-[calc(100%-13rem)] 3xl:w-[calc(100%-16rem)]":
    "md:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] 2xl:w-[calc(100%-7rem)] 3xl:w-[calc(100%-8rem)]"} `} 
    >
        <div className='flex justify-center gap-x-4 text-blue text-lg mb-4'>
          <a href="https://www.linkedin.com/in/yooran/" aria-label="LinkedIn Link" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='text-xl lg:text-2xl 2xl:text-3xl hover:text-gray' /></a>
          <a href="https://github.com/yoo-ran" aria-label="Github Link" target='_blank'><FontAwesomeIcon icon={faGithub} className='text-xl lg:text-2xl 2xl:text-3xl hover:text-gray' /></a>
        </div>
        <h6 className='text-lg'>Copyright &copy; 2024 Yooran Kim. All right reserved.</h6>
    </div>
  )
}

export default Footer;