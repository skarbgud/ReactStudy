import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  //App.js파일에서 임포트함
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* 리액트를 통한 사용자정의 태그 (컴포넌트) */}
    <App />     
  </React.StrictMode>,
  document.getElementById('root') //index.html에서 있는 id가 root에 렌더링됨 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
