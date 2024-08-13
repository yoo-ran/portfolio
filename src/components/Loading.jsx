import "./loadingCss.css"


const Loading = () => {

    return(
    <div className='bg fixed left-0 z-50 w-lvw h-screen bg-white flex justify-center items-center'>
    
        <svg  className='w-1/6' version="1.1" id="Layer_2_00000020363874701586480100000008566409221262928008_"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 126 126.5"
            xml:space="preserve">

            <g id="Layer_1-2">
                <g>
                    <path className="st1" d="M83.1,124.7H107c0,0-3.9-50.5-50.8-62.1C56.2,62.6,81.6,66.8,83.1,124.7z"/>
                    <path className="st2" d="M106.6,0c0,0,8.1,59.3-49.3,59.3C57.3,59.3,92.7,50.3,106.6,0z"/>
                    <path className="st3" d="M24.1,0H0.2c0,0,3.9,50.5,50.8,62.1C51,62.1,25.6,57.9,24.1,0z"/>
                    <path className="st4" d="M107,0c0,0-48,1.7-48,64.7c0,40.6-28.9,75.1-59,53.2c0,0,44-9.2,43.4-52.8C42.7,2.7,107,0,107,0z"/>
                </g>
            </g>
        </svg>
    </div>


    )
}

export default Loading;