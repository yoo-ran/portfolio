import { useState,useEffect } from 'react';

const PrjMenu = (props) => {
  const [clicked, setClicked] = useState("")
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
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
    <div className='fixed top-12 z-10 right-0 text-gray drop-shadow w-full p-4 md:w-0 md:p-2 lg:p-6 md:pr-10 lg:pr-32'>
      {showTopBtn && (
        <div className='absolute -z-10 inset-0 w-full h-full md:rounded-l-xl bg-white border-t border-lightBlue md:opacity-80'></div>

      )}
      {showTopBtn && (
        <ul className='flex z-50 justify-between md:flex-col gap-y-2 text-sm lg:text-base'>
          <li className={`hover:text-blue cursor-pointer ${clicked == "about" ? "text-blue": ""}`}><a onClick={()=>updatePage("about")}>About</a></li>
          <li className={`hover:text-blue cursor-pointer ${clicked == "brainstorming" ? "text-blue": ""}`}><a onClick={()=>updatePage("brainstorming")}>Brainstorming</a></li>
          <li className={`hover:text-blue cursor-pointer ${clicked == "develop" ? "text-blue": ""}`}><a onClick={()=>updatePage("develop")}>Development</a></li>
          <li className={`hover:text-blue cursor-pointer ${clicked == "takeaway" ? "text-blue": ""}`}><a onClick={()=>updatePage("takeaway")}>Take Away</a></li>
        </ul>
      )}

  </div>
  )
}

export default PrjMenu;