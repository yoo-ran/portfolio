import { useState,useEffect } from 'react';

const PrjMenu = (props) => {
  const [clicked, setClicked] = useState("")
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
  }, []);

  function updatePage(id) {
    props.newPage(id);
    setClicked(id)
  }
 
  return(
      // ${showTopBtn ? "sm:left-full md:-right-20 lg:-right-44": "sm:left-0 md:-right-full lg:-right-full "}
    <div className='z-10 '>
        <ul className={`fixed top-12 xl:top-36 text-gray drop-shadow p-4 w-full md:w-1/4 md:p-2 lg:p-6  bg-white border border-blue rounded-xl flex z-50 justify-between gap-x-4 md:flex-col gap-y-4 text-sm lg:text-base transition-[right] duration-500 ease-in-out	
          lg:${showTopBtn ? "-right-44": "-right-full "}
          ${showTopBtn ? "right-0": "-right-full "}
        `}>
          <li className={`hover:text-blue cursor-pointer ${clicked == "about" ? "text-blue": ""}`}><a onClick={()=>updatePage("about")}>About</a></li>
          <li className={`hover:text-blue cursor-pointer ${clicked == "brainstorming" ? "text-blue": ""}`}><a onClick={()=>updatePage("brainstorming")}>Brainstorming</a></li>
          <li className={`hover:text-blue cursor-pointer ${clicked == "develop" ? "text-blue": ""}`}><a onClick={()=>updatePage("develop")}>Development</a></li>
          <li className={`hover:text-blue cursor-pointer ${clicked == "takeaway" ? "text-blue": ""}`}><a onClick={()=>updatePage("takeaway")}>Take Away</a></li>
        </ul>

  </div>
  )
}

export default PrjMenu;