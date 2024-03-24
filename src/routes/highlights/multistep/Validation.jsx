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
        <pre>
            <code className="language-javascript" ref={codeRef}>
            {`
                export function useWeb3AnalyticsReporter() {
                const { pathname, search } = useLocation(); //depends on project routes manager 
                const { provider } = useWeb3React(); //depends on project web3 providers handling

                //track page-views
                useEffect(() => {
                    Web3Analytics.trackPageView(pathname, search);
                }, [pathname, search]);

                //track web3 activity
                useEffect(() => {
                    if (provider) {
                    Web3Analytics.walletProvider(provider);
                    }
                }, [provider]);
                }`}
            </code>
        </pre>
    );
};

export default Validation;