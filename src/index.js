import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Couter from './components/Couter';
import reportWebVitals from './reportWebVitals';
import CouterStore from './stores/CouterStore';

const store = new CouterStore()

ReactDOM.render(
  <React.StrictMode>
    <Couter store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
