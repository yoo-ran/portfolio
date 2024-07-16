

const DetailNarr = (props) => {
    return(
        <div>
            <p className='text-red mb-2 lg:text-lg 2xl:text-2xl'>{props.title}</p>
            <p className='lg:text-base 2xl:text-lg'>{props.content}</p>
        </div>
    )
}
  
  export default DetailNarr;