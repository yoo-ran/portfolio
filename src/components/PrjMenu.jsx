// import React from 'react';

const PrjMenu = (props) => {

  // const scrollTo = (sectionId) => {
  //   const aboutSection = document.getElementById(sectionId);
  //   aboutSection.scrollIntoView({ behavior: 'smooth' });
  //   console.log(aboutSection);
  // };
  function updatePage(id) {
    props.newPage(id);
  }
 
  return(
    <div>
    <ul>
      <li><a onClick={()=>updatePage("about")}>About</a></li>
      <li><a onClick={()=>updatePage("brainstorming")}>Brainstorming</a></li>
      <li><a onClick={()=>updatePage("develop")}>Development</a></li>
      <li><a onClick={()=>updatePage("takeaway")}>Take Away</a></li>
    </ul>

    {/* <div id='about'>about</div> */}
  </div>
  )
}

export default PrjMenu;