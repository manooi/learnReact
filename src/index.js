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

if ((1+1)=== 2) {
  customStyle.color ="green";
  customStyle.textAlign="center";
};


const isTimeBetween = function(startTime, endTime, serverTime) {
    let start = moment(startTime, "H:mm")
    let end = moment(endTime, "H:mm")
    let server = moment(serverTime, "H:mm")
    if (end < start) {
        return server >= start && server<= moment('23:59:59', "h:mm:ss") || server>= moment('0:00:00', "h:mm:ss") && server < end;
    }
    return server>= start && server< end
}



var word = 'Good ';
// var testDate = new Date();
console.log(testDate)
var testDate = new Date('March 21, 2021 19:00:00');


const customColor = {}

if (isTimeBetween('00:00', '12:00', testDate )) {
  word += "Morning";
  customColor.color = "red";
} else if (isTimeBetween('12:00', '18:00', testDate )) {
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
