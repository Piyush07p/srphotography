import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
import ProdContext from './Context/ProdContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <>
            <HashRouter>
                <ProdContext>
                  <App/>
                </ProdContext>
            </HashRouter>
         
      </>
);

reportWebVitals();
