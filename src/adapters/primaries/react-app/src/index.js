import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/index.css';
import App from './App';


window.React = React

ReactDOM.render(
    <React.StrictMode>
     <App/>
    </React.StrictMode>,
  document.getElementById('root')
);
