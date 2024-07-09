
const Narrative = (props) => {


    return(
        <div>
            <div className='flex items-center justify-between mb-10'>
               <h2 className='text-gray text-lg md:text-2xl 2xl:text-3xl font-head font-bold pr-4 '>
                    <span className='block'>{props.title}</span>
                </h2>
               <p className='bg-lightBlue w-full h-0.5 rounded-full'></p>
            </div>
            <p className='lg:text-base 2xl:text-lg'>{props.content}</p>
        </div>
    )
}
  
  export default Narrative;