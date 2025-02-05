const DevNarr = (props) => {
  return (
    <div>
      <h2 className='text-blue text-lg font-head font-black lg:text-xl xl:text-2xl mb-2'>
        <span className='relative'>{props.title}</span>
      </h2>
      <p className='lg:text-base xl:text-lg'>{props.content}</p>
    </div>
  );
};

export default DevNarr;
