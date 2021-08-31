import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './components/Top'
import App from './components/Todo';
import './index.css'
import reportWebVitals from './reportWebVitals';
import RootStore, { RootStoreProvider } from './stores/rootStore'
// import todoListStore from './stores/todoListStore';
// import todoViewStore from './stores/todoViewStore';

// const store = new todoListStore([
//   new todoViewStore('hello Mobx'),
//   new todoViewStore('hello React')
// ])

const rootStore = new RootStore()

ReactDOM.render(
  <RootStoreProvider store={rootStore}>
    <Top />
    <App />
  </RootStoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
