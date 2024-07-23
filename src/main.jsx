import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StateProvider } from './routes/StateContext.jsx';  // Import StateProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
