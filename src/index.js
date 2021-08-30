import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './components';
import './index.css'
import reportWebVitals from './reportWebVitals';
import todoListStore from './stores/todoListStore';
import todoViewStore from './stores/todoViewStore';

const store = new todoListStore([
  new todoViewStore('hello Mobx'),
  new todoViewStore('hello React')
])

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
