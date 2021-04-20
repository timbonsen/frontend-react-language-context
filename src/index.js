import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { LanguageContextProvider } from "./context/LanguageContext";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <LanguageContextProvider>
              <App />
          </LanguageContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);