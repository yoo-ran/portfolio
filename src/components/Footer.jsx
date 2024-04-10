import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return(
    <div className='bg-white text-center py-6 text-sm'>
        <div className='flex justify-center gap-x-4 text-blue text-lg mb-4'>
          <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href=""><FontAwesomeIcon icon={faGithub} /></a>
          <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href=""><FontAwesomeIcon icon={faPhone} /></a>
        </div>
        <h6>Copyright &copy; 2024 Yooran Kim. All right reserved.</h6>
    </div>
  )
}

export default Footer;