import React from "react";
import ReactDOM from "react-dom";
import huracan from "./images/huracan.jpg";
import members from "./eventData.json";

function Activities(){
    let intro = <><h1>2021 Car Meetups and Shows</h1> <br/>            
    <img src = {huracan} className = "carImg"/><br /><h2>Club Activities</h2></>;

    let rows = members.map(function(u){
        return <tr key={u.title}><td>{u.title}</td> <td>{u.venue}</td><td>{u.dates}</td></tr>;
    });
    
    var memberTable = <table className="activityTable">
        <thead><tr><th>Title</th><th>Venue</th><th>Dates</th></tr></thead>
        <tbody>{rows}</tbody>
    </table>;
    
    let content = <section><center>{intro}{memberTable}</center></section>;
    return(content);

}

export default Activities;