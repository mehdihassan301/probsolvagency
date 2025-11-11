
import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from '@/App';
=======
import App from './App';
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
<<<<<<< HEAD
);
=======
);
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
