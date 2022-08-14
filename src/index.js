import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const ccstyle={};
let curDate=new Date();
curDate=curDate.getHours();
let massage="";
if (curDate>=6 && curDate<12){
  massage="Good Morning";
  ccstyle.color="green";
}else if (curDate>=12 && curDate<19) {
  massage="Good evening";
  ccstyle.color="Blue";
} else {
  massage="Good Night";
  ccstyle.color="Red";
}

ReactDOM.render(
  <>
  <div className='hello'>
  <h1>Hello sir,<span style={ccstyle}>{massage}</span></h1></div>
  
  </>
  , document.getElementById("root")
)



