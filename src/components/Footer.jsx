import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return(
    <div className='bg-white text-center py-6 text-sm w-full md:w-11/12'>
        <div className='flex justify-center gap-x-4 text-blue text-lg mb-4'>
          <a href="https://www.linkedin.com/in/yooran/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='text-xl lg:text-2xl' /></a>
          <a href="https://github.com/yoo-ran" target='_blank'><FontAwesomeIcon icon={faGithub} className='text-xl lg:text-2xl' /></a>
          {/* <a href="mailto:yuranm80@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a> */}
          {/* <a href="tel:236-558-9103"><FontAwesomeIcon icon={faPhone} /></a> */}
        </div>
        <h6 className='lg:text-xl'>Copyright &copy; 2024 Yooran Kim. All right reserved.</h6>
    </div>
  )
}

export default Footer;