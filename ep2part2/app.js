import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
    "div",
    {id: "child"},
    React.createElement("div",{}, "This is children") 
    )
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);