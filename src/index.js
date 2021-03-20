import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const myName = "Sirawit Mahanin"
const currentYear = new Date().getFullYear();
const myImg = "https://picsum.photos/200"

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

let word = 'Good ';
const customColor = {}
// var testDate = new Date();
const currentDate = new Date('March 21, 2021 18:00:00');
const currentTime = currentDate.getHours()

if (currentTime < 12) {
  word += "Morning";
  customColor.color = "red";
} else if (currentTime < 18) {
  word += "Afternoon";
  customColor.color = "green";
} else {
  word += "Night ";
  customColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">Created by {myName}.</h1>
    <p>Copyright {currentYear}.</p>
    <img src={myImg+"?grayscale"} alt='raiwa'/>

    {/*Style ต้องการ Value ที่เป็น JS Object เลขต้องทำให้เป็น Object ยังไงล่ะ*/}
    <p style= {customStyle}>Test inline style yr: {currentYear}.</p>

    <h1 style= {customColor} className="heading">{word}</h1>

  </div>,
  document.getElementById('root')
);
