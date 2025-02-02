import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Tailwind from 'primereact/passthrough/tailwind';


import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<PrimeReactProvider  >
      <React.StrictMode>
      <App />
      

  </React.StrictMode>
  </PrimeReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
