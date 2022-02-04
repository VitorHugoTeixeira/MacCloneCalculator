import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';

ReactDOM.render(
  <div className='principal'>
  <h1>Clone of Mac Calculator</h1>
    <Calculator>
    </Calculator>
  </div>
  
  ,document.getElementById('root')
);

