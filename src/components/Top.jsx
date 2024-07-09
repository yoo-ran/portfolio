import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';


function Top() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

  return(
    <div>
            {showTopBtn && (
                     <button onClick={goTop} className='fixed bottom-10 right-0 bg-red text-xs w-16 md:text-m md:w-20 lg:w-20 2xl:w-24 3xl:w-28 flex items-center justify-center rounded-l-full text-white py-2 lg:text-sm 2xl:text-lg 3xl:text-xl'><FontAwesomeIcon icon={faChevronUp} /> TOP</button>
            )}
    </div>
  )
}

export default Top;