import React from 'react';



function Header() {
  return(
    <div>
        <h1><img src="" alt="Yooran Logo"/></h1>
        <nav>
            <ul>
                <li>
                    <a href={`/`}>Home</a>
                </li>
                <li>
                    <a href={`/about`}>About</a>
                </li>
                <li>
                    <a href={`/projects`}>Projects</a>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;