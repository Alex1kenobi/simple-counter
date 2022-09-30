//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import SecondCounter from "./component/SecondCounter.jsx"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0

setInterval(() => {
    
seconds++;
let one = Math.floor(seconds/1);
let two = Math.floor(seconds/10);
let three = Math.floor(seconds/100);


ReactDOM.render(<SecondCounter one = {one} two = {two} three = {three}/>, document.querySelector("#app"));

}, 1000);



    //ReactDOM.render(<SecondCounter digito1 = {i} digito2 ={i} digito3 = {i} digito4 = {i} />, document.querySelector("#app"));


