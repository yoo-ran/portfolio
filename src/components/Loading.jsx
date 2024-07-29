import "./loadingCss.css"


const Loading = () => {


    return(
    <div className='bg fixed left-0 z-50 w-lvw h-screen bg-white flex justify-center items-center'>
    
        <svg  className='w-1/6' version="1.1" id="Layer_2_00000020363874701586480100000008566409221262928008_"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 126 126.5"
            xml:space="preserve">

            <g id="Layer_1-2">
                <g>
                    <path class="st1 " d="M123.8,1c0,0,8.1,59.3-49.3,59.3C74.6,60.3,110,51.3,123.8,1z"/>
                    <path class="st2 " d="M33.5,0.8H9.6c0,0,0.5,62,63,63.2C72.6,64.1,33.5,65.5,33.5,0.8z"/>
                    <path class="st3 " d="M93.8,126.4h23.9c0,0-0.5-64-63-65.2C54.7,61.2,93.8,59.7,93.8,126.4z"/>
                    <path class="st4" d="M126,0c0,0-54.5,0.2-54.5,63.2s-42.3,79.6-71.5,47c0,0,55.9,15.7,55.9-46.7S126,0,126,0z"/>
                </g>
            </g>
        </svg>
    </div>


    )
}

export default Loading;