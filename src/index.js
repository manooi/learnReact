import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const myName = "Sirawit Mahanin"
const currentYear = new Date().getFullYear();
const myImg = "https://picsum.photos/200"

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

if ((1+1)=== 2) {
  customStyle.color ="green";
  customStyle.textAlign="center";
};


ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">Created by {myName}.</h1>
    <p>Copyright {currentYear}.</p>
    <img src={myImg+"?grayscale"} alt='raiwa'/>

    {/*Style ต้องการ Value ที่เป็น JS Object เลขต้องทำให้เป็น Object ยังไงล่ะ*/}
    <p style= {customStyle}>Test inline style yr: {currentYear}.</p>
  </div>,
  document.getElementById('root')
);
