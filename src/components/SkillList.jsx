

const SkillSection = ({title,skills}) => (
  <div id="skillList" className='w-full md:w-1/2'>
    <h3 className='lg:text-lg xl:text-xl'>{title}</h3>
    <ul className='grid grid-cols-2 grid-rows-3 h-48 drop-shadow-lg bg-white border border-blue rounded-xl mt-4'>
      {skills.map((skill, index) => (
        <li
          key={index}
          className={`py-2 pl-3 flex items-center justify-start gap-x-2 lg:text-base xl:text-lg
          ${
            index >= 2 && index < 4 ? 'border-y border-dashed border-blue' : ''
          }`}
        >
            <img src={skill.img} alt={title} 
                className='w-6 xl:w-8  object-cover object-center'
            /> 
          
          <p>{skill.skill}</p>
        </li>
      ))}
    </ul>
  </div>
);
export default SkillSection