import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use


function Home() {
  return(
    <>
        <main>
            <p>Hi, my name is</p>
            <div>
                <h1>Yooran Kim</h1>
                <p>A Front-End Developer</p>
            </div>
            <div>
                <p>Who
                  <span>Think Logically</span>
                  <span>Love Solving Problem</span>
                  <span>Make Efficient Code</span>
                </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <FontAwesomeIcon icon={faChevronDown} />

        </main>

    </>
  )
}

export default Home;