import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './tutorial/Gretting';
import Game from './Game';
import Tick from './ticktock';
import Toggle from './Toggle';
import Product from './Product';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Welcome/>
    <Game />
    <Tick/>
    <Toggle/>
    <Product/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start mea suring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
