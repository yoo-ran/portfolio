import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';

function Top() {
  return(
    <div>
        <a href='#top' className='fixed bottom-20 right-0 bg-red text-xs w-16 md:text-m md:w-20 flex items-center justify-center rounded-l-full text-white py-2'><FontAwesomeIcon icon={faChevronUp} /> TOP</a>
    </div>
  )
}

export default Top;