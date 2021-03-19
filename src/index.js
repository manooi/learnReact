import React from 'react';
import ReactDOM from 'react-dom';

const name = "Sirawit"
const surname = "Mahanin"
const luckyNumber = 7


ReactDOM.render(
  <div>
    <h1>Hello {name} {surname}!</h1>
    <p>My lucky number is {luckyNumber}.</p>
  </div>,
  document.getElementById('root')
);

