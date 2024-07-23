import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { useContext }  from 'react';


function Footer() {

  return(
    <div 
    className={`bg-white text-center py-6 text-sm`}
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