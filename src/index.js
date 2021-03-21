import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading.jsx"; //ES6 no need to put extension
import List from "./List.jsx";
import './index.css';

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
)


