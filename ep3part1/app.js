import React from "react";
import ReactDOM from "react-dom";

// React Elements

const heading = React.createElement("div",{id: "parent"},"Nameste React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);