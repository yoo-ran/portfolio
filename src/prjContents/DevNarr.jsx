const DevNarr = (props) => {
  return (
    <div>
      <h2 className='text-blue text-xl font-head font-black lg:text-2xl mb-2'>
        <span className='relative'>{props.title}</span>
      </h2>
      <p className='lg:text-lg xl:text-lg'>{props.content}</p>
    </div>
  );
};

export default DevNarr;
