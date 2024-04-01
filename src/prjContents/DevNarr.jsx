

const DevNarr = (props) => {
    return(
        <div>
            <h2 className='text-blue text-lg'><span className='relative'>{props.title}</span></h2>
            <p>{props.content}</p>
        </div>
    )
}
  
  export default DevNarr;