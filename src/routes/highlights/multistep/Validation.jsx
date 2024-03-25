import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";


hljs.registerLanguage("javascript", javascript);


const Validation = () => {
    const codeRef = useRef(null);

    useEffect(() => {
        hljs.highlightAll(codeRef.current);
    }, []);

    return (
        <pre className='w-full'>
            <code className="javascript" ref={codeRef}>
            {`
                switch (activeStep) {
                    case 1:
                      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                      var phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s*\d{3}-\d{4})$/;
                      if( Object.values(info).every(val => val !== "")){
                        if (emailRegex.test(info.email) && phoneRegex.test(info.phone) ) {
                          setGoNext(true);
                          setAlert(false);
                          setEmailVali(false);
                        } else{
                          setEmailVali(true);
                          setAlert(true);
                        }
                      }else{
                        setGoNext(false);
                        setAlert(true);
                        setEmailVali(false);
                      }
                    case 2:
                      if (level!=="") {
                        setActiveStep((activeStep) => activeStep + 1);
                        setAlert(false);
                        }else{
                          setAlert(true);
                        }
                      break;
                    case 3:
                      if (preference!=="") {
                        setActiveStep((activeStep) => activeStep + 1);
                        setAlert(false);
                        }else{
                          setAlert(true);
                        }
                      break;
                    case 4:
                      setActiveStep((activeStep) => activeStep + 2);
                      break;
              
            `}
            </code>
        </pre>
    );
};

export default Validation;