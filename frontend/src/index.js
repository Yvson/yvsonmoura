import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


const data = window.data;

ReactDOM.render(
  <BrowserRouter basename="/">
    <App data={data}/>
  </BrowserRouter>,
  document.getElementById('root')
);