import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <>
            <HashRouter>
                <App/>
            </HashRouter>
         
      </>
);

reportWebVitals();
