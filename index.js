import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json"
import Menu from "./menu"; // my new menu component in menu.js
import Home from "./home";
import Activities from "./activities";
import Membership from "./membership";

let myName = "Prasoon Shakya"; // Use your name not mine!!!
var contents = <section>
    <h1>Hello from React</h1>
    <h2>{myName}</h2>
  </section>;

ReactDOM.render(contents, document.getElementById("root"));

// Create contents using imported Menu and Home
contents = <> <Menu /> <Home /> </>; 

ReactDOM.render(contents, document.getElementById("root"));

// Create contents using imported Menu and Activity
contents = <> <Menu /> <Activities /> </>; 

ReactDOM.render(contents, document.getElementById("root"));

// Create contents using imported Menu and Membership
contents = <> <Menu /> <Membership /> </>; 

ReactDOM.render(contents, document.getElementById("root"));
