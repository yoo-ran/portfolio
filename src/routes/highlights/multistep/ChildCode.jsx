import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";


hljs.registerLanguage("javascript", javascript);


const ChildCode = (props) => {
    const codeRef = useRef(null);

    useEffect(() => {
        hljs.highlightAll(codeRef.current);
    }, []);

    return (
        <pre className='w-full text-sm mt-4'>
            <code className="javascript" ref={codeRef}>
            {`
                ${props.code}
            `}
            </code>
        </pre>
    );
};

export default ChildCode;