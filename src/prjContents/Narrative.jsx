
const Narrative = (props) => {

    return(
        <div>
            <h2 className='text-blue text-2xl font-head font-bold'><span className='relative'>{props.title}<span id='aboutL' className='underline w-full'></span></span></h2>
            <p>{props.content}</p>
        </div>
    )
}
  
  export default Narrative;