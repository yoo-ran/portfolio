import { useState } from 'react';

const PrjMenu = (props) => {
  const [clicked, setClicked] = useState("")

  function updatePage(id) {
    props.newPage(id);
    setClicked(id)
  }
 
  return(
    <div className='fixed right-0 text-gray drop-shadow  p-2 pr-10'>
      <div className='absolute -z-10 inset-0 w-full h-full rounded-l-xl bg-white opacity-80 blur-sm'></div>
      <ul className='flex flex-col gap-y-2 '>
        <li className={`hover:text-blue cursor-pointer ${clicked == "about" ? "text-blue": ""}`}><a onClick={()=>updatePage("about")}>About</a></li>
        <li className={`hover:text-blue cursor-pointer ${clicked == "brainstorming" ? "text-blue": ""}`}><a onClick={()=>updatePage("brainstorming")}>Brainstorming</a></li>
        <li className={`hover:text-blue cursor-pointer ${clicked == "develop" ? "text-blue": ""}`}><a onClick={()=>updatePage("develop")}>Development</a></li>
        <li className={`hover:text-blue cursor-pointer ${clicked == "takeaway" ? "text-blue": ""}`}><a onClick={()=>updatePage("takeaway")}>Take Away</a></li>
      </ul>
  </div>
  )
}

export default PrjMenu;