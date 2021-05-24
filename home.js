import React from "react";
import ReactDOM from "react-dom";
import mustang from "./images/mustang.jpg";
import supra from "./images/supra.jpg";

function Home(){
    return(
        <center>
            <h1>The Hayward Petrol-Head Club</h1>
            <img src = {mustang} className = "carImg"/>
            <br /> 
            <h2>Straight Piping</h2>
            <p>Here we explain why we love loud cars and its benifits in performance.&#x1f697;</p>
            <img src = {supra} className = "carImg"/>
            <br />    
            <h2>Track Rides</h2>
            <p>All the legal ways to have fun by driving cars at high speed &#x1f3ce; and do the stuns would be described here.</p>
        </center>);
}

export default Home;