

const DetailNarr = (props) => {
    return(
        <div>
            <p className='text-red mb-2 lg:text-lg'>{props.title}</p>
            <p className='lg:text-lg'>{props.content}</p>
        </div>
    )
}
  
  export default DetailNarr;