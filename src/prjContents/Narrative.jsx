const Narrative = (props) => {
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <h2 className='text-gray text-xl md:text-2xl xl:text-3xl font-head font-black pr-4 '>
          <span className='block'>{props.title}</span>
        </h2>
        <p className='bg-lightBlue w-full h-0.5 rounded-full'></p>
      </div>
      <p className='lg:text-lg xl:text-lg'>{props.content}</p>
    </div>
  );
};

export default Narrative;
